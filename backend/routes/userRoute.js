const express = require('express');
const { regUser, signinUser, userProfile, signOut } = require('../controllers/userController');
const { userValidation, passwordValidation, validation } = require('../validation/validator');
const router = express.Router();
router.post('/register',userValidation,passwordValidation,validation,regUser);
router.post('/login',signinUser)
router.get('/profile',userProfile)
router.post('/logout',signOut)
module.exports=router


