process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
    express = require('./config/express'),
    passport = require('./config/passport');

var db = mongoose(),
    app = express(),
    passport = passport();

app.listen(3000, function () {
    console.log('server on port 3000');
});

module.exports = app;
