var express = require('express');
var router = express.Router();

const weatherCtrl = require('../controllers/weather')



router.get('/', weatherCtrl.getWeather);

module.exports = router;