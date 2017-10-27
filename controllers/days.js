const User = require('../models/user');

function daysIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function daysShow(req, res) {
  const day = req.currentUser.days.find(day => day.date === req.params.date);
  if(!day) return res.notFound();
  res.json(day);
}

module.exports = {
  index: daysIndex,
  show: daysShow
};
