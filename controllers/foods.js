function foodsIndex(req, res) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  res.json(day.foods);
}
// ================
function foodsCreate(req, res, next) {
  console.log('REQ CURENT USER', req.currentUser);
  console.log('REQ PARAMS', req.params);
  console.log('REQ BODY', req.body);
  let day = req.currentUser.days.find(day => day.date === req.params.date);

  if(!day) {
    day = req.currentUser.days.create({ date: req.body.date });
    req.currentUser.days.push(day);
  }


  const food = day.foods.create(req.body.food);
  day.foods.push(food);

  req.currentUser.save()
    .then(() => res.json(food))
    .catch(err => {
      console.log('ERORRRRRRRR', err);
      next(err);
    });
}
// =============
function foodsUpdate(req, res, next) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  const food = day.foods.id(req.params.id);

  Object.assign(food, req.body);

  req.currentUser.save()
    .then(() => res.json(food))
    .catch(next);
}

function foodsDelete(req, res, next) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  const food = day.foods.id(req.params.id);
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
