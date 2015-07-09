'use strict';

var fs = require('fs');

fs.readFile('./exfile.txt', function(err, data) {
  console.log(data.toString('utf-8'));
});

var myFile = fs.readFileSync('./exfile.txt');
console.log(myFile);

