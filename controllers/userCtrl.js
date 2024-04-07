const { generateToken } = require('../config/jwttoken');
const { generateRefreshToken } = require('../config/refreshtoken');
const User=require('../models/userModel');
const asyncHandler=require('express-async-handler');
const validateMongodbid = require('../utils/validateMongodbid');

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
        console.log(refreshToken)
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
        /* res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
            refreshtoken: refreshtoken
        }); */
        res.json(updateUser);
    } else {
        throw new Error("Invalid credentials");
    }
})


// handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) =>{
    const cookies = req.cookies;
    console.log(cookies);

    if(!cookies?.refreshToken)
        throw new Error('Do Refresh Token in Cookies');
    const refreshToken = cookies.refreshToken;
    console.log(refreshToken);
    const user= await User.findOne({ refreshToken });
    res.json(user);
});


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


module.exports = { createUser, 
    loginUser, 
    getAllUsers, 
    getaUser, 
    deleteaUser, 
    updateaUser, 
    blockUser, 
    unblockUser, 
    handleRefreshToken 
};