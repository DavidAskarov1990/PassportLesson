const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false,
        default: 'user'
    }
});

module.exports = mongoose.model('User', User);