var http = require('http');

var server = http.createServer(function(req, res) {

});

server.listen(3000, function() {
  console.log('server started');
});
