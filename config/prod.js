// production environment credentials

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  dbURI: process.env.DB_URI,
  cookieKey: process.env.COOKIE_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  coinrankingHost: process.env.COINRANKING_HOST,
  coinrankingKey: process.env.COINRANKING_KEY,
};
