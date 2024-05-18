const express = require('express');
const router = express.Router();

// const {
//     isLoggedIn,
//     isAdmin,
// } = require('../middlewares');

// getContacts,
//     getContact,
//     updateContact,
//     deleteContact

const { createContact }  = require('../../controller/Userctr/Contact.ctr');

router.post('/post', createContact);
// router.get('/get',  getContacts);
// router.get('/get/:id',  getContact);
// router.put('/put/:id',  updateContact);
// router.delete('/delete/:id',  deleteContact);

module.exports = router;
