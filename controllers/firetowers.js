const FireTower = require('../models/fire-tower');


async function newFiretower(req,res) {
    const firetowers = await FireTower.find({});
    res.render('fire-tower/new', {firetowers})
};

async function create (req,res) {
    try {
        await FireTower.create(req.body);
        res.render('/trails/new')
    } catch (err) {
        console.log(err);
        re.redirect('fire-tower/new', {errorMsg: err.message})
    }
}


module.exports = {
    new: newFiretower,
    create
}