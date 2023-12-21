const express = require('express');
const router = express.Router();
const firetowersCtrl = require('../controllers/firetowers');


router.get('/new', firetowersCtrl.new);
router.post('/', firetowersCtrl.create)




module.exports = router;