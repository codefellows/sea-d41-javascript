var expect = require('chai').expect

it("It should pass even though it's false", function() {
  setTimeout(function() {
    expect(3).to.equal(4);     
  }, 200);
});

it('will fail when it should not', function(done) {
  setTimeout(function() {
    expect(true).to.equal(true);
    done();
  }, 200);
});
