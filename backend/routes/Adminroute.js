const express = require('express');
const router = express.Router();

const{auth,isAdmin} = require('../middlewares/Auth.mid');

//contact route
const { createContact }  = require('../controller/Adminctr');
// router.post('/contactus',auth,isAdmin, createContact);

//coupon route
const {getAllCoupons, createCoupon, updateCoupon, deleteCoupon } = require('../controller/Adminctr');
// Define routes for coupons CRUD operations
router.get('/allcoupons',auth,isAdmin, getAllCoupons);
router.post('/createcoupon',auth,isAdmin, createCoupon);
router.put('/updatecoupon/:coupon_id',auth,isAdmin, updateCoupon);
router.delete('/deletecoupon/:coupon_id',auth,isAdmin, deleteCoupon);

//faq route
const {getAllFAQs, createFAQ, updateFAQ, deleteFAQ } = require('../controller/Adminctr');

router.get('/allfaqs',auth,isAdmin, getAllFAQs);
router.post('/createfaq',auth,isAdmin, createFAQ);
router.put('/updatefaq/:faq_id',auth,isAdmin, updateFAQ);
router.delete('/deletefaq/:faq_id',auth,isAdmin, deleteFAQ);


//restaurant route
const {getAllRestaurants, getRestaurantById, createRestaurant, updateRestaurant, deleteRestaurant } = require('../controller/Adminctr');

// Define routes for restaurant CRUD operations
router.get('/allrestaurants',auth,isAdmin, getAllRestaurants);
router.get('/getrestaurant/:resid',auth,isAdmin, getRestaurantById);
router.post('/addrestaurant',auth,isAdmin, createRestaurant);
router.put('/updateres/:id',auth,isAdmin, updateRestaurant);
router.delete('/deleteres/:id',auth,isAdmin, deleteRestaurant);


//testimonial route
const {getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } = require('../controller/Adminctr');

// Define routes for testimonial CRUD operations
router.get('/alltestimonials',auth,isAdmin, getAllTestimonials);
router.post('/addtestimonial',auth,isAdmin, createTestimonial);
router.put('/updatetesti/:id',auth,isAdmin, updateTestimonial);
router.delete('/deletetesti/:id',auth,isAdmin, deleteTestimonial);


module.exports = router;