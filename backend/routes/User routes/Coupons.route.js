const express = require('express');
const router = express.Router();

const {getAllCoupons} = require('../../controller/Userctr/Coupons.ctr');

// Define routes for coupons CRUD operations
router.get('/get', getAllCoupons);

module.exports = router;
