const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs")


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
        })
        res.status(201).json({
            statusCode: 201,
            message: "The user has been successfully registered",
            data: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email
            }
        })
    }
})

module.exports = {
    userRegister
}