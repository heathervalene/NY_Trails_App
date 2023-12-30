const express = require('express');
const router = express.Router();
const imageCtrl = require('../controllers/images')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get('/', imageCtrl.getUploadForm);
router.post('/', upload.single('image'), imageCtrl.uploadImage);

module.exports = router;