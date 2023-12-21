const express = require('express')
const router = express.Router();

const myHikesCtrl = require('../controllers/myHikes')

router.get('/trails/:id/new', myHikesCtrl.myHikes);

module.exports =router