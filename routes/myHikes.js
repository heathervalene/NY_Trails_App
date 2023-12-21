const express = require('express')
const router = express.Router();

const myHikesCtrl = require('../controllers/myHikes')

router.get('/', myHikesCtrl.myHikes);

module.exports =router