expect = require('chai').expect;
greet = require('../async-greet');

describe('async-greet.js', function() {
  it('should return a string', function(done) {
    greet('John', function(err, data) {
      expect(err).to.eql(null);
      expect(data).to.eql('hello John');
      done()
    });
  })
});
