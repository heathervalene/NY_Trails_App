const express = require('express');
const router = express.Router();
const imageCtrl = require('../controllers/images')



router.post('/', upload.single('image'), imageCtrl.uploadImage);

module.exports = router;