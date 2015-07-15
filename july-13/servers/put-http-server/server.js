var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-type': 'application/json'
    //'Content-type': 'text/html'
  }); 

  switch (req.url) {
    case '/':
      if (req.method === 'GET') {
        console.log('/GET');
        res.write(JSON.stringify({msg: 'hello'}))
        //res.write('<h1> HELLO WORLD</h1');
      } 

      if (req.method === 'POST') {
        console.log('/POST');
      }
      break;
    
    case '/stuff':
      if (req.method === 'GET') {
        console.log('/stuff GET');
      } 

      if (req.method === 'POST') {
        console.log('/POST STUFF');
        var body = '';
        req.on('data', function(data) {
          body += data.toString()
        })

        req.on('end', function(data) {
          body += data ? data.toString() : '';
          var parsedBody;
          try {
            parsedBody = JSON.parse(body)
          }
          catch(e) {
            console.log(e);
            res.write(JSON.stringify({msg: 'invalid json'}));
          }
          res.write(JSON.stringify({msg: 'data received: ' + parsedBody}))
          res.end()
        })
      }
      break;
  }
  res.end();
});

server.listen(3000, function() {
  console.log('server started');
});
