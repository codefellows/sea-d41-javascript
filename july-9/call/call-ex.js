function printFirst() {
  console.log(this[0]);
}

var myArray = [0, 1, 2];
printFirst.call(myArray);
printFirst.call('my string');
printFirst.call(3242);

function printFirstAndOther(other) {
  console.log(this[0] + other);
}

printFirstAndOther.call(myArray, 'hello');
