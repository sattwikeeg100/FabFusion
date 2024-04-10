const { generateToken } = require('../config/jwttoken');
const { generateRefreshToken } = require('../config/refreshtoken');
const User=require('../models/userModel');
const Product=require('../models/productModel');
const Cart=require('../models/cartModel');
const asyncHandler=require('express-async-handler');
const validateMongodbid = require('../utils/validateMongodbid');
const jwt = require('jsonwebtoken');
const sendEmail = require('./emailCtrl');
const crypto = require('crypto');

// Create a User

const createUser = asyncHandler(async(req, res) => {
    const email = req.body.email;
    const findUser=await User.findOne({email: email});

    if(!findUser) {
        // Create a new user
        const newUser = await User.create(req.body);
        res.json(newUser);
    }
    else{
        throw new Error("User already exists");
    }
});

// Login a User

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // Check if user exists or not

    const findUser = await User.findOne({ email });
    if(findUser && await findUser.isPasswordMatched(password)){
        const refreshToken = await generateRefreshToken(findUser?._id);
        //console.log(refreshToken)

        // Store the refresh token in the database
        const updateUser = await User.findByIdAndUpdate(findUser?._id, {
                refreshToken: refreshToken,
            },
            {
                new: true
            }
        );

        // Storing the refresh token in the cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly:true,
            maxAge: 72*60*60*1000, // expiry in 1 day
        });

        //console.log(res);
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
            refreshToken: refreshToken
        });
        //res.json(updateUser);
    } else {
        throw new Error("Invalid credentials");
    }
})

// admin login

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // check if user exists or not
    const findAdmin = await User.findOne({ email });
    if (findAdmin.role !== "admin") throw new Error("Not Authorised");
    if (findAdmin && (await findAdmin.isPasswordMatched(password))) {
        const refreshToken = await generateRefreshToken(findAdmin?._id);
        const updateuser = await User.findByIdAndUpdate(
            findAdmin.id,
            {
            refreshToken: refreshToken,
            },
            { new: true }
        );
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        res.json({
            _id: findAdmin?._id,
            firstname: findAdmin?.firstname,
            lastname: findAdmin?.lastname,
            email: findAdmin?.email,
            mobile: findAdmin?.mobile,
            token: generateToken(findAdmin?._id),
        });
    } else {
    throw new Error("Invalid Credentials");
    }
});


// handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) =>{
    const cookies = req.cookies;
    //console.log(cookies);

    if(!cookies?.refreshToken)
        throw new Error("No refresh tokens in cookies.");
    const refreshToken = cookies.refreshToken;
    const user= await User.findOne({ refreshToken });
    
    if(!user) throw new Error("No Refresh token present in fb or not matched.")
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || user.id !== decoded.id) {
            throw new Error("Invalid refresh token");
        }
        const accessToken = generateToken(user?._id);
        res.json({ accessToken });
    });
});

// logout functionality
const logout = asyncHandler(async (req,res) => {
    const cookies = req.cookies;
    //console.log(cookies);

    if(!cookies?.refreshToken)
        throw new Error("No refresh tokens in cookies.");
    const refreshToken = cookies.refreshToken;
    const user= await User.findOne({ refreshToken });

    if(!user) {
        res.clearCookie("refreshToken", {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204); // forbidden
    }
    await User.findOneAndUpdate({refreshToken}, {
        refreshToken: "",
    });
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
    });
    return res.sendStatus(204); // forbidden
})


// Update a user

const updateaUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbid(_id);
    try{
        const updatedUser = await User.findByIdAndUpdate(
            _id, 
            {
                firstname: req?.body?.firstname,
                lastname: req?.body?.lastname,
                email: req?.body?.email,
                mobile: req?.body?.mobile,
            },
            {
                new: true,
            }
        );
        res.json(updatedUser);
    }
    catch(error) {
        throw new Error(error);
    }
});

// Save User Address

const saveAddress = asyncHandler(async (req, res, next) => {
    const { _id } = req.user;
    validateMongodbid(_id);

    try {
        const updatedUser = await User.findByIdAndUpdate(
            _id,
            {
            address: req?.body?.address,
            },
            {
            new: true,
            }
        );
        res.json(updatedUser);
    } catch (error) {
        throw new Error(error);
    }
});


// Get all Users

const getAllUsers = asyncHandler(async (req, res) => {
    try{
        const getUsers = await User.find();
        res.json(getUsers);
    }
    catch (error) {
        throw new Error(error);
    }
});

// Get a Single User

const getaUser = asyncHandler( async (req, res) => {
    //const {id} = req.params;  // const { id } = req.params; is equivalent to const id = req.params.id
    const { id } = req.params;
    validateMongodbid(id);
    try{
        const getaUser = await User.findById(id);
        res.json({
            getaUser,
        });
    }catch(error){
        throw new Error(error);
    }
});

// Delete a Single User

const deleteaUser = asyncHandler( async (req, res) => {
    const {id} = req.params;
    validateMongodbid(id);
    try{
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({
            deletedUser,
        });
    }catch(error){
        throw new Error(error);
    }
});

// Block a User

const blockUser = asyncHandler( async (req, res) => {
    const { id } = req.params;
    validateMongodbid(id);
    try{
        const blocked = await User.findByIdAndUpdate(id, {
                isBlocked:true,
            },
            {
                new:true,
            }
        );
        res.json({
            message: "User blocked successfully",
        });
    }catch(error){
        throw new Error(error);
    }
});

// Unblock a User

const unblockUser = asyncHandler( async (req, res) => {
    const {id} = req.params;
    validateMongodbid(id);
    try{
        const unblocked = await User.findByIdAndUpdate(id, {
                isBlocked:false,
            },
            {
                new:true,
            }
        );
        res.json({
            message: "User unblocked successfully",
        });
    }catch(error){
        throw new Error(error);
    }
});

// Update password

const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { password } = req.body;
    validateMongodbid(_id);
    const user = await User.findById(_id);
    if (password) {
        user.password = password;
        const updatedPassword = await user.save();
        res.json(updatedPassword);
    } else {
        res.json(user);
    }
});

// Forgot Password Token generation

const forgotPasswordToken = asyncHandler(async (req, res) => {
    console.log("Hey")
    const { email } = req.body;
    console.log("HI", email)
    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found with this email");
    try {
        const token = await user.createPasswordResetToken();
        await user.save();
        const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:3000/api/user/reset-password/${token}'>Click Here</>`;
        const data = {
            to: email,
            text: "Hey User",
            subject: "Forgot Password Link",
            htm: resetURL,
        };
        sendEmail(data);
        res.json(token);
} catch (error) {
    throw new Error(error);
}
});

// Reset Password

const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });
    if (!user) throw new Error(" Token Expired, Please try again later");
    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();
    res.json(user);
});

// Get Wishlist

const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const findUser = await User.findById(_id).populate("wishList");
        res.json(findUser);
    } catch (error) {
        throw new Error(error);
    }
});

// Create User Cart

const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;
    validateMongodbid(_id);
    try {
        let products = [];
        const user = await User.findById(_id);
        // check if user already have product in cart
        const alreadyExistCart = await Cart.findOne({ orderby: user._id }).exec();
        if (alreadyExistCart) {
            await alreadyExistCart.deleteOne();
        }
        for (let i = 0; i < cart?.length; i++) {
            let object = {};
            object.product = cart[i]._id;
            object.count = cart[i].count;
            object.color = cart[i].color;
            let getPrice = await Product.findById(cart[i]._id).select("price").exec();
            object.price = getPrice.price;
            products.push(object);
        }
        let cartTotal = 0;
        for (let i = 0; i < products.length; i++) {
            cartTotal = cartTotal + products[i].price * products[i].count;
        }
        let newCart = await new Cart({
            products,
            cartTotal,
            orderby: user?._id,
        }).save();
        res.json(newCart);
    } catch (error) {
        throw new Error(error);
    }
});

// Get Cart of the User

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbid(_id);
    try {
        const cart = await Cart.findOne({ orderby: _id }).populate(
            "products.product"
        );
        res.json(cart);
    } catch (error) {
        throw new Error(error);
    }
});


module.exports = { createUser, 
    loginUser, 
    getAllUsers, 
    getaUser, 
    deleteaUser, 
    updateaUser, 
    blockUser, 
    unblockUser, 
    handleRefreshToken,
    logout,
    updatePassword,
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart
};