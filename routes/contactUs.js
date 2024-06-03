const express = require('express');
const path = require('path');

const contactUsController = require('../controllers/contact-us');

const router = express.Router();

router.get('/contact-us', contactUsController.getContactUsPage);




module.exports = router;