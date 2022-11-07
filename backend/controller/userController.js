const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


// @desc create new user
// @route POST /api/users/register
// @access PUBLIC
const userRegister = asyncHandler(async (req,res) => {
    const {name,email,password,passwordConfirmation} = req.body;
    if(!name || !email || !password || !passwordConfirmation){
        res.status(400).json({
            statusCOde: 400,
            message: "Please fill all the field"
        })
    }
    if(password !== passwordConfirmation){
        res.status(400).json({
            statusCode: 400,
            message: "Password and Confirmation password did not match"
        })
    } else {
        // check if the user exist
        const user = await userModel.findOne({email});
        if(user){
            res.status(400).json({
                statusCode: 400,
                message: "The user has already exist"
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);
        const newUser = await userModel.create({
            name,
            email,
            password : hash
        });
        res.status(201).json({
            statusCode: 201,
            message: "The user has been successfully registered",
            data: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                token: getToken(newUser._id)
            }
        })
    }
});

// @desc login user
// @route POST /api/users/login
// @access Public 
const login = asyncHandler(async (req,res) => {
    const {email,password} = req.body;
    if(!email,!password){
        res.status(400).json({
            statusCode: 400,
            message: "Fill all the field"
        })
    }
    const user = await userModel.findOne({email});
    if(!user){
        res.status(404).json({
            statusCode: 404,
            message: "User not exist"
        })
    }
    res.status(200).json({
        statusCode: 200,
        message: "login success",
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
            token: getToken(user._id)
        }
    })
});

// @desc get user profile
// @route GET /api/users/me
// @access Private
const getUserProfile = asyncHandler(async (req,res) => {
    const user = await userModel.findById(req.user.id);
    if(!user){
        res.status(404).json({
            statusCode: 404,
            message: "User not found"
        })
    }
    res.status(200).json({
        statusCode: 200,
        data: {
            id: user.id,
            name: user.name,
            email: user.email,
        }
    })
})

const getToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: "1d"
    })
}

module.exports = {
    userRegister,
    login,
    getUserProfile
}