const passport = require('passport');

const JWTStrategy = require('passport-jwt').Strategy;

const ExtractJWT = require().ExtractJWT;

const User = require('../model/user');


let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey: 'sponsertruck'
}


passport.use(new JWTStrategy(opts, function (jwtPayLoad, done) {
    User.findById(jwtPayLoad._id, function (err, user) {
        if (err) { console.log('Error in finding user int JWT'); return; }


        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));


module.exports = passport;