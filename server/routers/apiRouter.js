const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/users', apiController.getUsers);
router.get('/activities', apiController.getActivities);
router.post('/users/new', apiController.singUp);
router.post('/login', apiController.signIn);
router.post('/activities', apiController.postActivity);

module.exports = router;
