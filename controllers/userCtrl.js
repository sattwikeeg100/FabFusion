const { generateToken } = require('../config/jwttoken');
const User=require('../models/userModel');
const asyncHandler=require('express-async-handler');

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
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        });
    } else {
        throw new Error("Invalid credentials");
    }
})

// Update a user

const updateaUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try{
        const updatedUser = await User.findByIdAndUpdate(
            id, 
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
})



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
    const {id} = req.params;
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
    try{
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({
            deletedUser,
        });
    }catch(error){
        throw new Error(error);
    }
});

module.exports = { createUser, loginUser, getAllUsers, getaUser, deleteaUser, updateaUser };