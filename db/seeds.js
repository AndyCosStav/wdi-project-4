const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const { dbURI } = require('../config/environment');


const userData = [{
  username: 'andy',
  email: 'andy@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  days: [
    {
      date: '2017-10-25',
      foods: [{
        meal: 'Breakfast',
        item: 'Eggs',
        calories: 120,
        protein: 25,
        fat: 11,
        carbs: 8,
        qty: 4
      }],
      exercises: [{
        exercise: 'Bench Press',
        reps: 5,
        sets: 5,
        weight: 100
      }]
    }]
}];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => User.create(userData))
  .then(users => console.log(users.length + 'users created'))
  .catch(err => console.log(err))
  .finally(() => {
    mongoose.connection.close();
  });
