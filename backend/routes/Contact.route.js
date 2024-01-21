const express = require('express');
const router = express.Router();

// const {
//     isLoggedIn,
//     isAdmin,
// } = require('../middlewares');

const {
    createContact,
    getContacts,
    getContact,
    updateContact,
    deleteContact }  = require('../controller/Contact.ctr');

router.get('/get',  getContacts);
router.get('/get/:id',  getContact);
router.post('/post',  createContact);
router.put('/put/:id',  updateContact);
router.delete('/delete/:id',  deleteContact);

module.exports = router;
