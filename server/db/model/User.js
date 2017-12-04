const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {
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
    },
    password: {
        type: String
    }
});

User.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};

module.exports = mongoose.model('User', User);