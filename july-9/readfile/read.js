var fs = require('fs');

fs.readFile('./file1.txt', function(err, data) {
  console.log(data.toString('hex'));
});
