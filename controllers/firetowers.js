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
    let user = await User.findById(req.params.userid);
    user.addFireTowerList.push(req.params.id)
    try { 
        await user.save()
        res.redirect('/trails/new')
    } catch (err) {
        res.render('trails/show',{errorMsg: err.message})
    }
}


module.exports = {
    new: newFiretower,
    create,
    addFireTowerList
}