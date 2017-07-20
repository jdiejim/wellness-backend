const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.post('/users/new', apiController.singUp);
router.post('/login', apiController.signIn);

module.exports = router;
