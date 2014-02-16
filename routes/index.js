/*
 * GET home page.
 */

exports.index = function(req, res) {
    console.log(req.query);
    var config = req.query;
    config.title = 'Drinky';

    res.render('index', config);
};