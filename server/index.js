const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require('./models/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.post('/blog', (req, res) => {
    UserModel.create(req.body)
    .then(users =>  res.json(users))
    .catch(err => res.json(err))
})

// Add this route to your server code (index.js or equivalent)
app.get('/blog', (req, res) => {
  UserModel.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.json(err));
});




app.listen(3001, () => {
    console.log("server is running")
})
