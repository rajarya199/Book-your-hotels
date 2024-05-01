const express = require('express');
const { uploadByLink, uploadPhoto } = require('../controllers/placeController');
const router = express.Router();
const multer=require('multer')

router.post('/upload-by-link',uploadByLink)
const photosMiddleware=multer({})
router.post('/upload', photosMiddleware.array('photos', 100), uploadPhoto);

module.exports=router