setTimeout(function() {
  
}, 10);

setTimeout( () => {

}, 10);

var adder = function(x, y) {
  return x + y;
}.bind(this);

var adderArrow = (x, y) => {
  return x + y;
};
