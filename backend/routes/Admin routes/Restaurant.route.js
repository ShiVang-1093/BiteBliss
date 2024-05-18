const express = require('express');
const router = express.Router();

// Import the restaurant controller
const {getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require('../../controller/Userctr/Restaurant.ctr');

// Define routes for restaurant CRUD operations
router.get('/get', getAllRestaurants);
router.get('/get/:id', getRestaurantById);
router.post('/post', createRestaurant);
router.put('/update/:id', updateRestaurant);
router.delete('/delete/:id', deleteRestaurant);

module.exports = router;
