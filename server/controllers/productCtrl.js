const Product = require('../models/productModel')
const User = require("../models/userModel");
const asyncHandler = require('express-async-handler')
const slugify = require('slugify');

// Create a Product

const createProduct = asyncHandler(async (req, res) => {
    if(req.body.title){
        req.body.slug = slugify(req.body.title);
    }
    try{
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error);
    }
});

// Update a Product

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try{
        if(req.body.title){
            req.body.slug = slugify(req.body.title);
        }
        const updateProduct = await Product.findByIdAndUpdate(
            id,
            req.body, 
            { new:true, }
        );
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error);
    }
});

// Delete a Product

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try{
        if(req.body.title){
            req.body.slug = slugify(req.body.title);
        }
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});

// Get a Product

const getaProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try{
        const findProduct = await Product.findById(id);
        res.json(findProduct);
    } catch(error) {
        throw new Error(error);
    }
});

// Get all Products

const getAllProducts = asyncHandler(async (req, res) => {

    try{
        // Filtering
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach((el) => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
        
        let query = Product.find(JSON.parse(queryStr));

        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        } else {
            query = query.sort('-createdAt');
        }

        // limiting the fields

        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        // pagination

        const page = req.query.page;
        const limit = req.query.limit;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("This Page does not exists");
        }

        const products = await query;
        res.json(products);
    } catch(error) {
        throw new Error(error);
    }
});

// Add a Product to Wishlist

const addToWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { prodId } = req.body;
    console.log(_id)
    try {
        const user = await User.findById(_id);
        const alreadyadded = user.wishList.find((id) => id.toString() === prodId);
        if (alreadyadded) {
        let user = await User.findByIdAndUpdate(
            _id,
            {
            $pull: { wishList: prodId },
            },
            {
            new: true,
            }
        );
        res.json(user);
        } else {
        let user = await User.findByIdAndUpdate(
            _id,
            {
            $push: { wishList: prodId },
            },
            {
            new: true,
            }
        );
        res.json(user);
        }
    } catch (error) {
        throw new Error(error);
    }
});

// Rating a Product

const rating = asyncHandler(async (req, res) => {
const { _id } = req.user;
const { star, prodId, comment } = req.body;
try {
    const product = await Product.findById(prodId);
    let alreadyRated = product.ratings.find(
    (userId) => userId.postedby?.toString() === _id.toString()
    );
    if (alreadyRated) {
    const updateRating = await Product.updateOne(
        {
        ratings: { $elemMatch: alreadyRated },
        },
        {
        $set: { "ratings.$.star": star, "ratings.$.comment": comment },
        },
        {
        new: true,
        }
    );
    } else {
    const rateProduct = await Product.findByIdAndUpdate(
        prodId,
        {
        $push: {
            ratings: {
            star: star,
            comment: comment,
            postedBy: _id,
            },
        },
        },
        {
        new: true,
        }
    );
    }
    const getallratings = await Product.findById(prodId);
    let totalRating = getallratings.ratings.length;
    let ratingsum = getallratings.ratings
    .map((item) => item.star)
    .reduce((prev, curr) => prev + curr, 0);
    let actualRating = Math.round(ratingsum / totalRating);
    let finalproduct = await Product.findByIdAndUpdate(
    prodId,
    {
        totalrating: actualRating,
    },
    { new: true }
    );
    res.json(finalproduct);
} catch (error) {
    throw new Error(error);
}
});


module.exports = { 
    createProduct, 
    getaProduct, 
    getAllProducts, 
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating
}