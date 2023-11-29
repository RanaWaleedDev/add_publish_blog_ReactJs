const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    title: String,
    content:String,
    author: String,
    date: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel