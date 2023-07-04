const mongoose = require('mongoose')

const UserShcema = new mongoose.Schema({
    username: String,
    email: String,
    pass: String
})

const User = mongoose.model('User', UserShcema)

module.exports = User