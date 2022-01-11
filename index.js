const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

// Connect to Mongose Database
mongoose.connect(keys.dbURI, () => {
  useNewUrlParser: true;
});

//Mongoose Logs
mongoose.set('debug', true);

const app = express();

// Cookie Configuration, max age set to 30days in milli second
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Initialize Passport
app.use(passport.initialize());

// Passport use Cookies
app.use(passport.session());

// Include routing paths
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
