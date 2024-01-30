const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
        unique: true,
        match: /^([\w-\\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        requird:true,
        default:"Visitor",
        enum: ["Admin","Visitor","Member","Restaurant","Salesman"]
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
