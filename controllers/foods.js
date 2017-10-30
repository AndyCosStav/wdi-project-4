function foodsIndex(req, res) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  res.json(day.foodsEaten);
}

function foodsCreate(req, res, next) {
  console.log('REQ CURENT USER', req.currentUser);
  console.log('REQ PARAMS', req.params);
  let day = req.currentUser.days.find(day => day.date === req.params.date);

  if(!day) {
    day = req.currentUser.days.create({ date: req.body.date });
    req.currentUser.days.push(day);
  }

  const food = day.foodsEaten.create(req.body.foods);
  day.foodsEaten.push(food);

  req.currentUser.save()
    .then(() => res.json(food))
    .catch(err => {
      console.log('ERORRRRRRRR', err); next();
    });
}

function foodsUpdate(req, res, next) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  const food = day.foodsEaten.id(req.params.id);

  Object.assign(food, req.body);

  req.currentUser.save()
    .then(() => res.json(food))
    .catch(next);
}

function foodsDelete(req, res, next) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  const food = day.foodsEaten.id(req.params.id);
  food.remove();

  req.currentUser.save()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: foodsIndex,
  create: foodsCreate,
  update: foodsUpdate,
  delete: foodsDelete
};
