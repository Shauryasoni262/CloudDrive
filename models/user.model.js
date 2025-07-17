const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [3, "username must be longer than 3 characters"]
    },

        email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [13, "email must be longer than 13 characters"]
    },
        password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, "password must be longer than 5 characters"]
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user