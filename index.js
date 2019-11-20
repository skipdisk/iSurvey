const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');


require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, //30 days, 24 hrs, 60 mins, 60 secs, 1000 milli secs
        keys: [keys.cookieKey]
    })
)


app.use(passport.initialize());
app.use(passport.session());



//calls index routes and passes app object in
require('./routes/index')(app);

//creates a dynamic port based on heroku's runtime environment or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);