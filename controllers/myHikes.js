const FireTower = require('../models/fire-tower');
const Trail = require('../models/trail');
const User = require('../models/user');

async function myHikes(req, res) {
    try {
        let user = await User.findById(req.user._id).populate({
            path: 'completedHike',
            model: 'Trail'
        });

        console.log(user.completedHike)

        res.render('hikes', { trails: user.completedHike });
    } catch (err) {
        res.render('errors/errorPage', { errorMsg: err.message });
    }
}


module.exports =  {
    myHikes,
}
