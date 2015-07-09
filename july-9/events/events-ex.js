var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter;
ee.on('stuff', function() {
  console.log('hello');
});

ee.emit('stuff');
