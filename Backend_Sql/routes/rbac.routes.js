const registerUserController = require('../controllers/registerUser.controller');
const verifyAccessToken = require('../middlewares/auth');
const loginUser = require('../controllers/loginUser.controller');
const getProfile = require('../controllers/getProfile.controller');
const getUserList = require('../controllers/getUserList.controller');
const deleteUser = require('../controllers/deleteUser.controller');


const express = require('express');
const router = express();

router.post('/user/create',verifyAccessToken,registerUserController);

router.post('/login',loginUser);

router.get('/user/self',verifyAccessToken,getProfile);

router.get('/user/list',verifyAccessToken,getUserList);

router.delete('/user/delete/:userId',verifyAccessToken,deleteUser);

module.exports = router;
