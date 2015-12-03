var assert = require('assert');
var request = require('supertest');

describe('Service', function() {
  var app;

  before(function() {
    app = require('./app');
  });

  it('should respond to request', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        done();
      });
  });

  it('should return json message', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        assert.equal(res.body.hello, 'world');
        done();
      });
  });
});
