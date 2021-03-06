const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/model').User;

module.exports = function (passport) {
  passport.use(new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    }, async function (username, password, done) {
      User.findOne({username: username}, function (err, user) {
          if (err) {
              return done(err);
          }
          if(!user) {
              return done(null, false, { message: 'Incorrect username'});
          }

          if(!user.validPassword(password)) {
              return done(null, false, { message: 'Incorrect password' })
          }

          return done(null, user);
      });


  }))
};