var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

function outer() {
 console.log('I am an outer function')
}

fs.readFile('./file1.txt', function(err, data) {
  console.log(data.toString());
  fs.readFile('./file2.txt', function(err, data) {
    fs.readFile('./file3.txt', function(err, data) {
      console.log(data.toString());
    });
    console.log(data.toString());
    outer();
  });
});

// nicer! And much easier to reorder!
ee.on('file1', function() {
  fs.readFile('./file1.txt', function(err, data) {
    console.log(data.toString());
    ee.emit('file3');
  });
});

ee.on('file2', function() {
  fs.readFile('./file2.txt', function(err, data) {
    console.log(data.toString());
  });
});

ee.on('file3', function() {
  fs.readFile('./file3.txt', function(err, data) {
    console.log(data.toString());
    ee.emit('file2')
  });
});

ee.emit('file1');

