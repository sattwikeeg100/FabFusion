const Product = require('../models/productModel')
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
        const getAllProducts = await Product.find();
        res.json(getAllProducts);
    } catch(error) {
        throw new Error(error);
    }
});

module.exports = { createProduct, getaProduct, getAllProducts }