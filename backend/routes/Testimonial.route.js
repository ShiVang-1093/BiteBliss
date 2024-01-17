const express = require('express');
const router = express.Router();

// Import the restaurant controller
const {getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controller/Testimonial.ctr');

// Define routes for restaurant CRUD operations
router.get('/get', getAllTestimonials);
router.post('/post', createTestimonial);
router.put('/update/:id', updateTestimonial);
router.delete('/delete/:id', deleteTestimonial);

module.exports = router;
