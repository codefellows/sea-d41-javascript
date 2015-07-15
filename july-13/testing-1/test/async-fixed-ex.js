var expect = require('chai').expect;

describe('a program', function() {
  it('will try and say true === false!', function(done) {
    setTimeout(function() {
      expect(true).to.eql(false);
      done();
    }, 1000);
  });
});

