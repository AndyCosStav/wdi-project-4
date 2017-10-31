function exercisesIndex(req, res) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  res.json(day.exercises);
}

function exercisesCreate(req, res, next) {
  let day = req.currentUser.days.find(day => day.date === req.params.date);
  if(!day) {
    day = req.currentUser.days.create({ date: req.body.date });
    req.currentUser.days.push(day);
  }

  const exercise = day.exercises.create(req.body);
  day.exercises.push(exercise);

  req.currentUser.save()
    .then(() => res.json(exercise))
    .catch(next);
}

function exercisesUpdate(req, res, next) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  const exercise = day.exercises.id(req.params.id);

  Object.assign(exercise, req.body);

  req.currentUser.save()
    .then(() => res.json(exercise))
    .catch(next);
}

function exercisesDelete(req, res, next) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  const exercise = day.exercises.id(req.params.id);
  exercise.remove();

  req.currentUser.save()
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: exercisesIndex,
  create: exercisesCreate,
  update: exercisesUpdate,
  delete: exercisesDelete
};
