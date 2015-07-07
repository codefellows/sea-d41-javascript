var greet = require('../greet');
var expect = require('chai').expect;

describe('stuff', function() {
  it('should work', function() {
    expect(greet('charlie')).to.equal('Hello charlie');
  });
});
