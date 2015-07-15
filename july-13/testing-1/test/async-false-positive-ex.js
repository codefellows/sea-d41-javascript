var expect = require('chai').expect;

describe('some sort of program', function() {
  it('some async thing', function () {
    setTimeout(function() {
      expect(true).to.eql(false);
    }, 1000);
  });
})


