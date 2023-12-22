const express = require('express')
const router = express.Router();

const mapsCtrl = require('../controllers/maps')

router.get('/', mapsCtrl.map);

module.exports =router
