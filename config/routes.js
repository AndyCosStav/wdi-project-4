const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const fatsecret = require('../controllers/fatsecret');
const foods = require('../controllers/foods');
const days = require('../controllers/days');
const auth = require('../controllers/auth');

router.route('/fatsecret')
  .get(fatsecret.search);

router.route('/days')
  .get(secureRoute, days.index);

router.route('/days/:date')
  .get(secureRoute, days.show);

router.route('/foods/:date')
  .get(secureRoute, foods.index)
  .post(secureRoute, foods.create);

router.route('/foods/:date/:id')
  // .get(secureRoute, foods.show)
  .put(secureRoute, foods.update)
  .delete(secureRoute, foods.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
