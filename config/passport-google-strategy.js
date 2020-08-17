const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;

const User = require('../model/user');

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
});


//deserializing the user from the key in the cookies
passport.deserializeUser(function (id, done) {
    User.findById(id, function (id, done) {
        if (err) { console.log('error in finding the user --> Passport'); return done(err); }

        return done(null, user);
    });
});


passport.use(new GoogleStrategy({
    clientID: '164813607185-vgppi5l9gb4hj8ije5a3gnc5b1sh908s.apps.googleusercontent.com',
    clientSecret: 'X_hUQEGtbbcwhgxMgd_9lt3K',
    callbackURL: "http://127.0.0.1:8000/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));


module.exports = passport;