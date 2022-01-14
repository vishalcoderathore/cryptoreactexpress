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

if (process.env.NODE_ENV === 'production') {
  // Express serve production assets (main.js or main.css)
  app.use(express.static('client/build'));

  // Express serve index.html if the route is not recogized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

// Listen on specified Port
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
