const express =  require('express');
const router = express.Router();
const isUserAuth = require("../middlewares/userAuth");



const authController = require('../controllers/auth-controller');



router.post('/user/registration', authController.handleRegistration);
router.post('/user/login', authController.handleLogin);
router.get('/user/logout', authController.handleLogout);
router.get('/user/me', isUserAuth, authController.handleMeReq);
module.exports = router;