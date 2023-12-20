var express = require('express');
var router = express.Router();

const trailsCtrl = require('../controllers/trails');
const ensuredLoggedIn = require('../config/ensureLoggedIn');


router.get('/', trailsCtrl.index);
router.get('/:id', trailsCtrl.show);


module.exports =router;