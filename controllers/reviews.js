const Trail= require('../models/trail');

async function create(req, res) {
    const trail = await Trail.findById(req.params.id);
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    trail.reviews.push(req.body);
    try {
      await trail.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/trails/${trail._id}`);
}

async function deleteReview(req, res) {
    const trail = await Trail.findOne({ 'reviews._id': req.params.id, 'reviews.user': req.user._id });
    if (!trail) return res.redirect('/trails');
    trail.reviews.remove(req.params.id);
    await trail.save();
    res.redirect(`/trails/${trail._id}`);
  }

module.exports = {
    create,
    delete: deleteReview
}