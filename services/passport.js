const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');

//fetch a model out of mongoose
//one argument means fetch something out of mongoose, two means load something into mongoose
const User = mongoose.model('users');

//first argument is whatever "done" from use is passing in as a user
passport.serializeUser((user, done) => {
    done(null, user.id)
});

//first argument is the user.id passed into serializeUser
passport.deserializeUser((id, done) =>{
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        //redirect to this route after user have granted permission from google
        callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        //find one record
        const existingUser = await User.findOne({ googleID: profile.id})
        {
            if (existingUser){
                //we already have a record with the given profile ID
                //done(error, user record)
                return done(null, existingUser);
            }
            //creates a new instance of user with data from google profile and save
            const user = await new User({googleID: profile.id}).save()
            done(null, user);
        }
    })
);