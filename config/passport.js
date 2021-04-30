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


//to check if user is authenticated
//used as a middleware
passport.checkAuthentication = function(req,res,next){
   //if user is signed in
  if(req.isAuthenticated()){
        return next();
    }

      //if user is not signed in
      return res.redirect('/');
}

passport.setAuthenticateduser = function(req,res,next){
    if(req.isAuthenticated()){
      //req.user contains current signed in user
      res.locals.user = req.user ;
    }
    next();
}

module.exports = passport;