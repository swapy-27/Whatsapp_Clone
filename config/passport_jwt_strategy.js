const passport = require('passport')
const JWTstrategy = require('passport-jwt').Strategy();

const ExtractJWT = require('passport-jwt').ExtractJwt();

const User = require('../models/user')

let opts ={}

// extracts web token from header of request
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();

//encrypt web token  using this secret key 
opts.secretOrKey = 'swapnil';


passport.use(new JWTstrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload._id}, function(err, user) {
        if (err) {
            console.log('Error in finding user from JWT')
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    })
}));

module.exports=passport;