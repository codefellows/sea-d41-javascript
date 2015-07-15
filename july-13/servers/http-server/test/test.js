var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

require('../server');

describe('our server', function() {
  it('should respond to a get req', function(done) {
    chai.request('localhost:3000')
      .get('/')
      .end(function(err, res) {
        console.log(res.body);
        expect(err).to.eql(null);
        expect(res.body.saying).to.eql('a bird in the hand');
        done();
      });
  });

});
