var expect = require('chai').expect
var greet = require('../greet');

describe('greet program', function() {
  it('should return hi class when passed class', function() {
    expect(greet('class')).to.eql('hello class');
  });
});
