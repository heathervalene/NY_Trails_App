const FireTower = require('../models/fire-tower');


async function newFiretower(req,res) {
    const firetowers = await FireTower.find({});
    res.render('fire-tower/new', {firetowers})
};

async function create (req,res) {
    try {
        await FireTower.create(req.body);
        res.redirect('/trails/new')
    } catch (err) {
        console.log(err);
        re.redirect('fire-tower/new', {errorMsg: err.message})
    }
}

async function addFireTowerList(req,res) {
    const fireTower = await FireTower.findById(req.params.id);
    fireTower.push(req.params.id)
    await fireTower.save();
    res.redirect(`/trails/new`)
}


module.exports = {
    new: newFiretower,
    create,
    addFireTowerList
}