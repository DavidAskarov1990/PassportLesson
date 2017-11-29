'use strict';
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const passport = require('passport');

const config = require('./config');
const User = require('./db/model').User;
const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(expressSession({
    secret: config.get('session:secret'),
    cookie: {
        httpOnly: true,
        maxAge: 20000
    }
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
    done(null, user.id)
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user)
    })
});

app.get('/', function (req, res) {
    res.send('Hello!');
});

app.listen(4444, function () {
    console.log('Start some server port 4444')
});
