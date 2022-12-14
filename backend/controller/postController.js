const asyncHandler = require("express-async-handler");
const { postModel } = require("../models/postModel");

// @desc Get all post
// @route GET /api/post
// @access Public
const getPost = asyncHandler(async (req,res) => {
    const post = await postModel.find()
    res.status(200).json({
        statusCode: 200,
        message: "Here all the existing post",
        data: post
    })
})

// @desc create new post
// @routes POST /api/post
// @access Private
const createNewPost = asyncHandler(async (req,res) => {
    const {text} = req.body;
    if(!text){
        res.status(400).json({
            statusCode: 400,
            message: "The text field cannot be blank"
        });
    }
    const createPost = await postModel.create({
        text,
        user: req.user.id
    })
    res.status(201).json({
        statusCode: 201,
        message: "New Post has been successfully created",
        data: createPost
    })
})

// @desc edit post
// @route PUT api/post/:id
// @access private
const updatePost = asyncHandler(async (req,res) => {
    const post = await postModel.findById(req.params.id);
    if(!post){
        res.status(404).json({
            statusCode: 404,
            message: "Post not found"
        })
    }
    const {text} = await req.body;
    if(!text){
        res.status(400).json({
            statusCode: 400,
            message: "The text field cannot be blank"
        })
    }
    if(post.user.toString() !== req.user.id){
        res.status(401).json({
            statusCode: 401,
            message: "User not Authorized"
        })
    }
    const updatedPost = await postModel.findByIdAndUpdate(req.params.id,{
        text
    })
    res.status(200).json({
        statusCode: 200,
        message: `The data has been successfully updated`,
        data: {
            id: updatedPost.id,
            text,
            user: req.user.id
        }
    })
})

// @desc delete post
// @route DELETE api/post/:id
// @access private
const deletePost = asyncHandler(async (req,res) => {
    const post = await postModel.findById(req.params.id);
    if(!post){
        res.status(404).json({
            statusCode: 404,
            message: "Post not found"
        })
    }
    if(post.user.toString() !== req.user.id){
        res.status(401).json({
            statusCode: 401,
            message: "User not authorized"
        })
    } else {
        const deletedPost = await postModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            statusCode: 200,
            message: "The post has been successfully deleted",
            id: deletedPost.id
        })
    }
})

module.exports = {
    getPost,
    createNewPost,
    updatePost,
    deletePost
}