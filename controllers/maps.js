async function map(req,res) {
    try {
        res.render('/map');
    } catch (err) {
        res.render('errors/errorPage', { errorMsg: err.message });
    }
}

module.exports = {
    map
}