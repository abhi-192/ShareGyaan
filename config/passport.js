const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy();

const User = require('../models/user');


//using passport for authentication
passport.use(new LocalStrategy(
    function(username, password, done) {
        //find a user and establish identity
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            //when user doesn't exist
          return done(null, false, { message: 'ERROR: Incorrect username.' });
        }
        //when passowrd is incorrect
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'ERROR: Incorrect password.' });
        }

        //everything fine
        return done(null, user);
      });
    }
));


//serializing the user
passport.serializeUser(function(user, done) {
  done(null, user.id);
});


//deserializing the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;