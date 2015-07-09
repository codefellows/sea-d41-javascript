var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

var MyEmitter = function() {};
inherits(MyEmitter, EventEmitter);

var ee = new MyEmitter();

ee.on('event', function() {
  console.log('hello');
});

ee.emit('event');
