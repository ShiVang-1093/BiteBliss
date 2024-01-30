const mongoose = require('mongoose');
// const { Schema } = mongoose;

const contactSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 5
    },
    // created_by: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User'
    // }
});

module.exports = mongoose.model('Contact', contactSchema);
