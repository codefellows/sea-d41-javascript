var expect = require('chai').expect;

describe('a program', function() {
  it('an async call numbers', function(done) {
    setTimeout(function() {
      expect(3).to.eql(4);
    },1000);
  });

  it('another async call booleans', function(done) {
    setTimeout(function() {
      expect(true).to.eql(true);
      done();
    },1000);
  });

});


