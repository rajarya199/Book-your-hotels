const express = require('express');
const { regUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register',regUser);

module.exports=router