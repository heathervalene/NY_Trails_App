const Trail = require('../models/trail');
const User = require('../models/user');


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

async function completedHike(req,res) {
    let user = await User.findById(req.params.userid);
    user.completedHike.push(req.params.id)
    try { 
        await user.save()
        res.redirect('/trails/new')
    } catch (err) {
        res.render('trails/show',{errorMsg: err.message})
    }
}








module.exports = {
    index,
    show,
    completedHike
}