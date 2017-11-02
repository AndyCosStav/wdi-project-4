/* global api, describe, it, expect, beforeEach, afterEach */

require('../helper');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');
const User = require('../../../models/user');

const foodData = {
  meal: 'Dinner',
  name: 'Chicken',
  calories: 300,
  protein: 40,
  fat: 4,
  carbs: 1
};

describe('POST /days/:date/foods', () => {

  let token = null;

  beforeEach(done => {
    User.create({
      username: 'food',
      email: 'food@food.com',
      password: 'test',
      passwordConfirmation: 'test',
      days: [{
        date: '2017-10-25',
        foods: []
      }]
    }, (err, user) => {
      token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });
      done(err);
    });
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  it('should return a 401 response', done => {
    api
      .post('/api/days/2017-10-25/foods')
      .set('Accept', 'application/json')
      .send({ food: foodData })
      .expect(401, done);
  });

  it('should return a 201 response with a token', done => {
    api
      .post('/api/days/2017-10-25/foods')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({ food: foodData })
      .expect(201, done);
  });

  it('should return a an object', done => {
    api
      .post('/api/days/2017-10-25/foods')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({ food: foodData })
      .expect(201)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return a an object with the correct values', done => {
    api
      .post('/api/days/2017-10-25/foods')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send({ food: foodData })
      .expect(201)
      .end((err, res) => {
        expect(res.body.meal).to.equal(foodData.meal);
        expect(res.body.name).to.equal(foodData.name);
        expect(res.body.protein).to.equal(foodData.protein);
        expect(res.body.calories).to.equal(foodData.calories);
        expect(res.body.carbs).to.equal(foodData.carbs);
        expect(res.body.fat).to.equal(foodData.fat);
        done();
      });
  });
});
