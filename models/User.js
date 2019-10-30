const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleID: String
});

//creates new collection called 'users' if doesn't already exist
mongoose.model('users', userSchema);