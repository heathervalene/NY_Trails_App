const Trail = require('../models/trail');


async function index (req,res) {
    try {
        let trails = await Trail.find({})
        res.render('trails/index', {trails})
    } catch (err) {
        res.render('trails/index', {errorMsg: err.message})
    }
}

async function show(req,res) {
    try {
    const trail = await Trail.findById(req.params.id)
    res.render('trails/show', {trail})
} catch (err) {
res.render('trails/show', {errorMsg: err.message})
}
}







module.exports = {
    index,
    show
}