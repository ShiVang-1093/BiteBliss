const express = require('express');
const router = express.Router();

const {getAllFAQs} = require('../controller/Userctr/FAQ.ctr');
router.get('/get', getAllFAQs);


module.exports = router;
