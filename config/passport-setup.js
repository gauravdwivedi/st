const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth2').Strategy;





passport.serializeUser(function(user,done){
    done(null,user.id);
});

passport.deserializeUser(function(id,done){
    User
})







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