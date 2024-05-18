const express = require('express');
const router = express.Router();

const {getAllTestimonials } = require('../../controller/Userctr/Testimonial.ctr');

// Define routes for testimonial CRUD operations
router.get('/get', getAllTestimonials);

module.exports = router;
