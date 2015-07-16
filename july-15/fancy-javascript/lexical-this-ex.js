function Person(name) {
  this.name = name
  this.logName = function() {
    (function() {
      console.log(this.name)
    }());
    console.log(this.name);
    setTimeout(function() {
      console.log(this.name)
    }.bind(this), 100);
    /*
    setTimeout(function() {
      console.log(this.name)
    }.bind(this), 100);
    */
  }
  
}

var p = new Person('peter')
p.logName()
