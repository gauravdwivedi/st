const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    influencer: {
        type: Boolean,
        required: true,
    },

    sponser: {
        type: Boolean,
        required: true,
    }



}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;