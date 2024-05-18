const express = require('express');
const router = express.Router();

const {getAllCoupons, createCoupon, updateCoupon, deleteCoupon } = require('../../controller/Userctr/Coupons.ctr');

// Define routes for coupons CRUD operations
router.get('/get', getAllCoupons);
router.post('/post', createCoupon);
router.put('/update/:id', updateCoupon);
router.delete('/delete/:id', deleteCoupon);

module.exports = router;
