var express = require('express');
var router = express.Router();

const trailsCtrl = require('../controllers/trails');


router.get('/', trailsCtrl.index);


module.exports =router;