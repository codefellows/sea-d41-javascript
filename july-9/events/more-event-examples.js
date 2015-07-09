var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

ee.once('customer', function() {
  console.log('Welcome first customer! You get a free drink');
});

ee.on('walksIntoBar', function() {
  console.log('welcome customer!');
});
ee.emit('customer');
ee.emit('customer');

ee.emit('walksIntoBar');
ee.emit('walksIntoBar');

ee.removeAllListeners();

ee.emit('walksIntoBar');
