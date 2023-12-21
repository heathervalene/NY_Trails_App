const express = require('express');
const router = express.Router();
const firetowersCtrl = require('../controllers/firetowers');
const ensureLoggedIn = require('../config/ensureLoggedIn');




router.get('/new', ensureLoggedIn, firetowersCtrl.new);
router.post('/', ensureLoggedIn, firetowersCtrl.create)




module.exports = router;