'use strict'
function Person(name) {
  this.name = name;
}

Person.prototype.logName = function() {
  console.log(this.name);
}

var p = new Person('spam');
p.logName();

var nameLogger = p.logName;
nameLogger().bind(p)


