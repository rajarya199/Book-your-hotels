const express = require('express');
const { regUser } = require('../controllers/userController');
const { userValidation, passwordValidation, validation } = require('../validation/validator');
const router = express.Router();

router.post('/register',userValidation,passwordValidation,validation,regUser);

module.exports=router