var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

function findTable() {
  console.log("welcome" + name + "! Let me show you to your table");
}

function showMenu() {
  console.log("Here is your menu")
}

ee.on('enter', findTable);
ee.on('enter', showMenu);

ee.emit('enter');

console.log(ee.listeners('enter'));
