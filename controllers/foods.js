function foodsIndex(req, res) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  res.json(day.foodEaten);
}

function foodsCreate(req, res, next) {
  let day = req.currentUser.days.find(day => day.date === req.params.date);

  if(!day) {
    day = req.currentUser.days.create({ date: req.body.date });
    req.currentUser.days.push(day);
  }

  const food = day.foodEaten.create(req.body);
  day.foodEaten.push(food);

  req.currentUser.save()
    .then(() => res.json(food))
    .catch(next);
}

function foodsUpdate(req, res, next) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  const food = day.foodEaten.id(req.params.id);

  Object.assign(food, req.body);

  req.currentUser.save()
    .then(() => res.json(food))
    .catch(next);
}

function foodsDelete(req, res, next) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  const food = day.foodEaten.id(req.params.id);
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
