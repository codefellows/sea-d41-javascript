var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

function showToTable() {
  console.log('Welcome! Follow me to your table');
}

function showMenu() {
  console.log('Here is your menu');
}

ee.on('customerEnters', showToTable);
ee.on('customerEnters', showMenu);

ee.emit('customerEnters');

ee.setMaxListeners(20);

ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});
ee.on('customerEnters', function(){});

ee.removeListener('customerEnters', showMenu);
ee.emit('customerEnters');


