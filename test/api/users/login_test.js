/* global api, describe, it, expect, beforeEach, afterEach */

require('../helper');
const User = require('../../../models/user');

const incorrectUser = {
  email: 'wrongMail',
  password: 'djfsdjdnefgh'
};

const acceptedUser = {
  email: 'test@test.com',
  password: 'test'
};

describe('POST /api/login', () => {

  let username = null;

  beforeEach(done => {

    User.create({
      username: 'test',
      email: 'test@test.com',
      password: 'test',
      passwordConfirmation: 'test'
    }, (err, user) => {
      username = user.username;
      done(err);
    });
  });

  afterEach(done => {
    User.collection.remove();
    done();
  });

  it('should return a 401 response', done => {
    api
      .post('/api/login/')
      .set('Accept', 'application/json')
      .send(incorrectUser)
      .expect(401, done);
  });

  it('should return a 200 response when logging in with correct credentials', done => {
    api
      .post('/api/login/')
      .set('Accept', 'application/json')
      .send(acceptedUser)
      .expect(200, done);
  });

  it('should return an object', done => {
    api
      .put('/api/login/')
      .set('Accept', 'application/json')
      .send(acceptedUser)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api
      .post('/api/login/')
      .set('Accept', 'application/json')
      .send(acceptedUser)
      .end((err, res) => {
        const userItem = res.body;
        expect(userItem.token).to.be.a('string');
        expect(userItem.message).to.equal('Welcome back ' + username);
        done();
      });
  });

});
