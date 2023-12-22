const FireTower = require('../models/fire-tower');


async function newFiretower(req,res) {
    const firetowers = await FireTower.find({});
    res.render('fire-tower/new', {firetowers})
};

async function create(req,res) {
    try {
        await FireTower.create(req.body);
        res.redirect('/hikes')
    } catch (err) {
        console.log(err);
        re.redirect('fire-tower/new', {errorMsg: err.message})
    }
}


async function completedFiretower(req, res) {
    try {
        let user = await User.findById(req.user._id).populate([
            {
                path: 'completedHike',
                model: 'Trail'
            },
            {
                path: 'completedFiretower',
                model: 'Firetower'
            }
        ]);
        await FireTower.create(req.body);
        user.completedFiretower.push(req.params.id)
        res.render('hikes', { trails: user.completedHike, firetower:user.completedFiretower });
    } catch (err) {
        res.render('errors/errorPage', { errorMsg: err.message });
    }
}


module.exports = {
    new: newFiretower,
    create,
    completedFiretower
}