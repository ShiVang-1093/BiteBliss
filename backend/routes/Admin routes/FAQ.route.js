const express = require('express');
const router = express.Router();

const {getAllFAQs, createFAQ, updateFAQ, deleteFAQ } = require('../../controller/Userctr/FAQ.ctr');

router.get('/get', getAllFAQs);
router.post('/post', createFAQ);
router.put('/update/:id', updateFAQ);
router.delete('/delete/:id', deleteFAQ);

module.exports = router;
