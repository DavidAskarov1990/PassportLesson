const passport = require('passport');
const LocalStrategy = require('passport-local');
const DB = require('../../db/model');

exports.localStrategy = function () {
  passport.use(new LocalStrategy(function (username, password, done) {
      DB.User.findOne({name: username}, function (err, user) {
          if(err) {
              return done(err);
          }

          if(!user) {
              return done(null, false, { message: 'Incorrect username'});
          }

          if(!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password' })
          }

          return done(null, user);
      })
  }))
};