var http = require('http');

var server = http.createServer(function(req, res) {

  console.log(req.headers)
  res.writeHeader(200, {
    'Content-type': 'application/json'
    //'Content-type': 'text/html'
    
  });

  res.write(JSON.stringify({saying: 'a bird in the hand'}));
  //res.write("<h1> Welcome to my site from the 90\'s!</h1>");
  //res.write('<p>I like Nintendo 64</p>');
  res.end();

});

server.listen(3000, function() {
  console.log('server started');
});
