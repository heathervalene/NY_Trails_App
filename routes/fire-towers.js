const express = require('express');
const router = express.Router();
const firetowersCtrl = require('../controllers/firetowers');
const ensureLoggedIn = require('../config/ensureLoggedIn');




router.get('/new', ensureLoggedIn, firetowersCtrl.new);
router.post('/:id', ensureLoggedIn, firetowersCtrl.create)
router.post('/fire-tower/user/:userid',firetowersCtrl.completedFiretower)




module.exports = router;