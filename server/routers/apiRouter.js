const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/users', apiController.getUsers);
router.get('/activities', apiController.getActivities);
router.post('/singup', apiController.singUp);
router.post('/login', apiController.logIn);
router.post('/activities', apiController.postActivity);

module.exports = router;
