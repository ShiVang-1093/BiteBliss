const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    speciality: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
