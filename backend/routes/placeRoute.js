const express = require('express');
const { uploadByLink } = require('../controllers/placeController');
const router = express.Router();
router.post('/upload-by-link',uploadByLink)
module.exports=router