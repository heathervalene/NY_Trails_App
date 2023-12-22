const FireTower = require('../models/fire-tower');
const Trail = require('../models/trail');
const User = require('../models/user');


async function myHikes(req, res) {
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

        res.render('hikes', { trails: user.completedHike, firetower:user.completedFiretower });
    } catch (err) {
        res.render('errors/errorPage', { errorMsg: err.message });
    }
}


module.exports =  {
    myHikes,
}
