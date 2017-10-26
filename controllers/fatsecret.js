const crypto = require('crypto');
const queryString = require('query-string');
const urlencode = require('urlencode');
const rp = require('request-promise');

function search(req, res, next) {
  const method = 'GET';
  const url = 'http://platform.fatsecret.com/rest/server.api';
  const params = {
    method: 'foods.search',
    format: 'json',
    search_expression: req.query.search,
    oauth_signature_method: 'HMAC-SHA1',
    oauth_consumer_key: process.env.FATSECRET_CLIENT_KEY,
    oauth_nonce: (new Date()).getTime().toString(32),
    oauth_timestamp: (new Date()).getTime(),
    oauth_version: '1.0'
  };

  const base = `${method}&${urlencode(url)}&${urlencode(queryString.stringify(params))}`;
  const key = `${process.env.FATSECRET_CLIENT_SECRET}&`;

  const hash = crypto.createHmac('sha1', key).update(base).digest('base64');

  Object.assign(params, { oauth_signature: hash });

  rp({
    method,
    url,
    qs: params,
    json: true
  })
    .then(response => {
      const data = response.foods.food.map(item => {
        return {
          name: item.food_name,
          per: parseFloat(item.food_description.match(/Per ([0-9.]+)/)[1]),
          calories: parseFloat(item.food_description.match(/Calories: ([0-9.]+)/)[1]),
          fat: parseFloat(item.food_description.match(/Fat: ([0-9.]+)/)[1]),
          carbs: parseFloat(item.food_description.match(/Carbs: ([0-9.]+)/)[1]),
          protein: parseFloat(item.food_description.match(/Protein: ([0-9.]+)/)[1])
        };
      });
      res.json(data);
    })
    .catch(next);
}

module.exports = { search };
