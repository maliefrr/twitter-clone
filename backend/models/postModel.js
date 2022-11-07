const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true,"The text field cannot be blank"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
},{
    timestamps: true
})

const postModel = mongoose.model("Post",postSchema)

module.exports = {postModel}