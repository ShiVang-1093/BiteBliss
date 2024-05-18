const passport = require('passport');
const User = require('../model/User');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

require('dotenv').config();

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `http://localhost:${process.env.PORT}/auth/google/callback`,
        scope   : ["profile","email"]
  },
   async function( accessToken, refreshToken, profile, done) {

        try{
            let user = await User.findOne({email:profile.emails[0].value});

            if(!user){
                user = await User.create({
                    uname: profile.displayName,
                    email: profile.emails[0].value
                })
            }
            return done(null,user);

        }catch(error){
            return done(error,null)
        }
  }
));

// Serialize the user object to store in the session
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize the user object from the session
passport.deserializeUser((user, done) => {
    done(null, user);
});
