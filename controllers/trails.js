const Trail = require('../models/trail');


async function index (req,res) {
    try {
        let trails = await Trail.find({})
        res.render('trails/index', {trails})
    } catch (err) {
        res.render('trails/index', {errorMsg: err.message})
    }
}

module.exports = {
    index
}