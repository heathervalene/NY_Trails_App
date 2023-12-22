async function map(req,res) {
    try {
        res.render('trails/map');
    } catch (err) {
        res.render('errors/errorPage', { errorMsg: err.message });
    }
}

module.exports = {
    map
}