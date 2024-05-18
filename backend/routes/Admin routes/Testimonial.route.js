const express = require('express');
const router = express.Router();

const {getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../../controller/Userctr/Testimonial.ctr');

// Define routes for testimonial CRUD operations
router.get('/get', getAllTestimonials);
router.post('/post', createTestimonial);
router.put('/update/:id', updateTestimonial);
router.delete('/delete/:id', deleteTestimonial);

module.exports = router;
