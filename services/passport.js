const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id); // user.id is the unique udentifier of the profile.id record in db
});

passport.deserializeUser((id, done) => {
  // search db to for User model
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => console.log(err));
});

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          console.log('[MONGOOSE EXISTING USER] ' + existingUser.id);
          return done(null, existingUser);
        } else {
          const newUser = await new User({
            googleId: profile.id,
            displayName: profile.displayName,
          }).save();
          console.log('[MONGOOSE NEW USER] ' + newUser.id);
          return done(null, newUser);
        }
      } catch (err) {
        console.log(err);
      }
    }
  )
);
