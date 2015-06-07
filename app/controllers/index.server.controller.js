exports.render = function (req, res) {
    res.render('index', {
        title: 'Code App',
        user: JSON.stringify(req.user)
    });
};
