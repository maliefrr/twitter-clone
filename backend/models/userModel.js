const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"The name field cannot be blank"]
    },
    email: {
        type: String,
        required: [true, "The email field cannot be blank"],
        unique: true
    },
    password: {
        type:String,
        required: [true, "The password field cannot be blank"]
    }
},{
    timestamps: true
});

const userModel = mongoose.model("User",userSchema);

module.exports = userModel;