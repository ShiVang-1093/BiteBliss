const express = require('express');
const router = express.Router();

const {loginController} = require('../controller/Login.ctr');

// POST /login
router.post('/post', loginController);

module.exports = router;
