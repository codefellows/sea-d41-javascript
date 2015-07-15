var net = require('net');

var server = net.createServer(function(connection) {
  connection.on('data', function(data) {
    console.log(data.toString());
  });

  connection.on('end', function() {
    console.log('end');
  });
  connection.end();
});

server.listen(3000, function() {
  console.log('server started');
});
