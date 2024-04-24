const express = require('express');
const { regUser, signinUser, userProfile } = require('../controllers/userController');
const { userValidation, passwordValidation, validation } = require('../validation/validator');
const router = express.Router();

router.post('/register',userValidation,passwordValidation,validation,regUser);
router.post('/login',signinUser)
router.get('/profile',userProfile)
module.exports=router


