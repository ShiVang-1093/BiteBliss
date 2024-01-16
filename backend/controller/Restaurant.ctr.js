const Restaurant = require('../model/Restaurant');

// Get all restaurants
exports.getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};
// Get a restaurant by ID
exports.getRestaurantById = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ error: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
    try {
        const {image, name, description, speciality } = req.body;
        const restaurant = new Restaurant({ image, name, description, speciality });
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a restaurant
exports.updateRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const { image, name, description, speciality } = req.body;
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            id,
            { image, name, description, speciality },
            { new: true }
        );
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a restaurant
exports.deleteRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        await Restaurant.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

