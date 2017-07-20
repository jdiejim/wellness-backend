const express = require('express');
const router = express.Router();
const apiController = require('./apiController');

router.get('/users', apiController.getUsers);
router.get('/activities', apiController.getActivities);
router.post('/users/new', apiController.postUser);
router.post('/users', apiController.signIn);
router.post('/activities', apiController.postActivity);

module.exports = router;
