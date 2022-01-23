const axios = require('axios').default;
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

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
  app.get('/api/getcoins', requireLogin, async (req, res) => {
    try {
      console.log(req.user);
      const allCoins = await axios.request(getCoins);
      res.send(allCoins.data);
    } catch (error) {
      return res.send({ error: error.message });
    }
  });
};
