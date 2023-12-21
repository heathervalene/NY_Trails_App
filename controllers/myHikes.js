const FireTower = require('../models/fire-tower');
const Trail = require('../models/trail');


async function myHikes(req,res) {
    try {
    const trails = await Trail.findById(req.params.id);
    const fireTowers = await FireTower.findById(req.params.id);
    res.render('trails/new', trails, fireTowers)
} catch (err)
 {
res.render('/tails/show', {errorMsg: err.message})
 }
}


module.exports =  {
    myHikes,
}
