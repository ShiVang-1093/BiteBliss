const express = require('express');
const router = express.Router();

const { auth, isVisitor } = require('../middlewares/Auth.mid');

// Import the controller functions
const { createContact, getAllCoupons, getAllFAQs, getAllRestaurants, getRestaurantById, getAllTestimonials } = require('../controller/Userctr');

// Contact route
router.post('/contactus', auth, isVisitor, createContact);

// Coupon route
router.get('/coupons', getAllCoupons);

// FAQ route
router.get('/faqs', getAllFAQs);

// Restaurant routes
router.get('/restaurants', getAllRestaurants);
router.get('/restaurants/:resid', getRestaurantById);

// Testimonial route
router.get('/testimonials', getAllTestimonials);

module.exports = router;
