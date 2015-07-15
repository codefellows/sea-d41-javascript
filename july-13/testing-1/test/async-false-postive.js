var expect = require('chai').expect

it("It should pass even though it's false", function() {
  setTimeout(function() {
    expect(true).to.equal(false);     
  }, 1000);
});
