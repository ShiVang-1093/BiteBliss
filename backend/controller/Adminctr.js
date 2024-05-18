const Contact = require('../model/Contact');
const Coupon = require('../model/Coupons');
const FAQ = require('../model/FAQ');
const Restaurant = require('../model/Restaurant');
const Testimonial = require('../model/Testimonial');

require('dotenv').config();

//contact us
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        return res.status(200).json({ contacts });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        return res.status(200).json({ contact });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ contact });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        return res.status(200).json({ contact });
    } catch (error) {
        return res.status(500).json({ error });
    }
};


// Create a new coupon
exports.createCoupon = async (req, res) => {
    try {
        const { restaurantName, discountOffer, speciality } = req.body;
        const newCoupon = new Coupon({ restaurantName, discountOffer, speciality });
        await newCoupon.save();
        res.status(201).json(newCoupon);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a coupon
exports.updateCoupon = async (req, res) => {
    try {
        const { id } = req.params;
        const { restaurantName, discountOffer, speciality } = req.body;
        const updatedCoupon = await Coupon.findByIdAndUpdate(id, { restaurantName, discountOffer, speciality }, { new: true });
        if (!updatedCoupon) {
            return res.status(404).json({ error: 'Coupon not found' });
        }
        res.status(200).json(updatedCoupon);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a coupon
exports.deleteCoupon = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCoupon = await Coupon.findByIdAndDelete(id);
        if (!deletedCoupon) {
            return res.status(404).json({ error: 'Coupon not found' });
        }
        res.status(200).json({ message: 'Coupon deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all coupons
exports.getAllCoupons = async (req, res) => {
    try {
        const coupons = await Coupon.find();
        res.status(200).json(coupons);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Create a new FAQ
exports.createFAQ = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const faq = new FAQ({ question, answer });
        await faq.save();
        res.status(201).json(faq);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing FAQ
exports.updateFAQ = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answer } = req.body;
        const faq = await FAQ.findByIdAndUpdate(id, { question, answer }, { new: true });
        res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete an FAQ
exports.deleteFAQ = async (req, res) => {
    try {
        const { id } = req.params;
        await FAQ.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

//Get all FAQs
exports.getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json(faqs);
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


// Create a new testimonial
exports.createTestimonial = async (req, res) => {
    try {
        const { name, content } = req.body;
        const testimonial = new Testimonial({ name, content });
        await testimonial.save();
        res.json(testimonial);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a testimonial
exports.updateTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, content } = req.body;
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, { name, content }, { new: true });
        res.json(updatedTestimonial);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a testimonial
exports.deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        await Testimonial.findByIdAndDelete(id);
        res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get all testimonials
exports.getAllTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};