const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const fatsecret = require('../controllers/fatsecret');
const foods = require('../controllers/foods');
const exercises = require('../controllers/exercises');
const days = require('../controllers/days');
const auth = require('../controllers/auth');
const users = require('../controllers/users');



router.route('/fatsecret')
  .get(fatsecret.search);

router.route('/days')
  .get(secureRoute, days.index);

router.route('/days/new')
  .put(secureRoute, users.update);

router.route('/days/:date')
  .get(secureRoute, days.show);

router.route('/days/:date/foods')
  .get(secureRoute,foods.index)
  .post(secureRoute,foods.create);

router.route('/days/:date/foods/:id')
  // .get(secureRoute, foods.show)
  .put(secureRoute, foods.update)
  .delete(secureRoute, foods.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);


router.route('/days/:date/exercises')
  .get(secureRoute, exercises.index)
  .post(secureRoute, exercises.create);

router.route('/days/:date/exercise/:id')
  .put(secureRoute, exercises.update)
  .delete(secureRoute, exercises.delete);

router.all('/*', (req, res) => res.notFound());



module.exports = router;
