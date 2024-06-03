const express = require('express');
const path = require('path');

const successController = require('../controllers/success')

const router = express.Router();

router.get('/success',successController.getSuccessPage);

module.exports = router;