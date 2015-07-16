function accumulator(x) {
  var z = 7;
  return function(y) {
    return x + y + z + q;
  }
  var q = 10;
}

var add4 = accumulator(4);
console.log(add4(8));

