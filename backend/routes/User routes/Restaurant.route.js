const express = require('express');
const router = express.Router();

// Import the restaurant controller
const {getAllRestaurants, getRestaurantById } = require('../controller/Userctr/Restaurant.ctr');

// Define routes for restaurant CRUD operations
router.get('/get', getAllRestaurants);
router.get('/get/:id', getRestaurantById);


module.exports = router;
