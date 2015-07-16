function add(x, y) {
  return x + y;
}

var p = console.log;

/*
p(add(4, 10));
p(add(4, 20));
p(add(4, 5));
*/

var add4 = add.bind(null, 4);

p(add4(10));
p(add4(20));
p(add4(5));

function times(x, y, z) {
  return x * y * z;
}

var binded = times.bind(null, 4, 2);

p(binded(5));






