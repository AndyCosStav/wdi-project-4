/* global api, describe, it, expect, afterEach */

require('../helper');
const User = require('../../../models/user');

const incorrectUser = {
  username: 'badTest',
  email: 'badTest@badTest.com',
  password: 'badTest',
  passwordConfirmation: 'bad'
};

const acceptedUser = {
  username: 'test',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

describe('POST /api/register', () => {

  afterEach(done => {
    User.collection.remove();
    done();
  });

  it('should return a 422 response', done => {
    api
      .post('/api/register/')
      .set('Accept', 'application/json')
      .send(incorrectUser)
      .expect(422, done);
  });

  it('should return a 200 response when registering with good credentials', done => {
    api
      .post('/api/register/')
      .set('Accept', 'application/json')
      .send(acceptedUser)
      .expect(200, done);
  });

  it('should return an object', done => {
    api
      .put('/api/register/')
      .set('Accept', 'application/json')
      .send(acceptedUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api
      .post('/api/register/')
      .set('Accept', 'application/json')
      .send(acceptedUser)
      .end((err, res) => {
        const userItem = res.body;
        expect(userItem.message).to.equal('Registration successful');
        done();
      });
  });

});
