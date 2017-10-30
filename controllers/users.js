const User = require('../models/user');

function usersUpdate(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      user = Object.assign(user, req.body);
      return user.save();
    })
    .catch(next);
}

module.exports = {
  update: usersUpdate
};
