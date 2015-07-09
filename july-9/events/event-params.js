var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

ee.on('event', function(name) {
  console.log('hello '+ name);
});

ee.emit('event', 'john');
