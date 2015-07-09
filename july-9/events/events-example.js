var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

function sayHello() {
  console.log('hello!');
}

ee.on('someEvent', sayHello);
ee.on('otherEvent', function() {
  console.log('Inside other event');
  ee.emit('someEvent');
  // call some other functions...
});

//ee.emit('someEvent');
// Basically the same as
//sayHello();
ee.emit('otherEvent');
