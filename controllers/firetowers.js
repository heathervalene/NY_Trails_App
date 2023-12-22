const FireTower = require('../models/fire-tower');
const User = require('../models/user');


async function newFiretower(req,res) {
    const firetowers = await FireTower.find({});
    res.render('fire-tower/new', {firetowers})
};

async function create(req,res) {
    console.log(req.body)
    try {
       const firetower = await FireTower.create(req.body);
       let user = await User.findById(req.user._id);
       user.completedFiretower.push(firetower._id);
       await user.save();
        res.redirect('/hikes')
    } catch (err) {
        console.log(err);
        re.redirect('fire-tower/new', {errorMsg: err.message})
    }
}



module.exports = {
    new: newFiretower,
    create,
   
}