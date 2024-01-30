const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        // type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    discountOffer: {
        type: Number,
        required: true
    },
    speciality: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        ref: 'Speciality',
        required: true
    }
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
