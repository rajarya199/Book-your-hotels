const multer=require('multer')
const Place = require('../models/placeModel');
const imageDownloader = require('image-downloader');
const path = require('path');
const fs=require('fs')
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');

exports.uploadByLink = async (req, res) => {
    const { link } = req.body;
    const newName = 'photo' + Date.now() + '.jpg';
    const destDir = path.join(__dirname, '..', 'uploads'); // Destination directory

    // Download the image
    try {
        await imageDownloader.image({
            url: link,
            dest: path.join(destDir, newName) // Save to the uploads folder with the new name
        });
        res.json(newName);
    } catch (err) {
        console.error('Error downloading image:', err);
        res.status(500).json({ error: 'Error downloading image' });
    }
};

exports.uploadPhoto=async(req,res)=>{
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
      const { path, originalname, mimetype } = req.files[i];
      const url = await uploadToS3(path, originalname, mimetype);
      uploadedFiles.push(url);
    }
    res.json(uploadedFiles)
}
