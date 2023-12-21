var express = require('express');
var router = express.Router();

const trailsCtrl = require('../controllers/trails');
const ensuredLoggedIn = require('../config/ensureLoggedIn');


router.get('/', trailsCtrl.index);
router.get('/:id', trailsCtrl.show);
router.post('/:id/completed-hike/user/:userid', ensuredLoggedIn, trailsCtrl.completedHike)


module.exports =router;