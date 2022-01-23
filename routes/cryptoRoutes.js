const passport = require('passport');
const axios = require('axios').default;
const keys = require('../config/keys');

var getCoins = {
  method: 'GET',
  url: 'https://' + keys.coinrankingHost + '/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0',
  },
  headers: {
    'x-rapidapi-host': keys.coinrankingHost,
    'x-rapidapi-key': keys.coinrankingKey,
  },
};

module.exports = (app) => {
  app.get('/api/getcoins', (req, res) => {
    axios
      .request(getCoins)
      .then(function (response) {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
};
