function one() {
  console.log('From function one');
}

function two() {
  console.log('From function two');
}

function myCallStackOne() {
  console.log('From my call Stack One');
  process.nextTick(one);
  myCallStackTwo();
}

function myCallStackTwo() {
  console.log('From my call Stack two');
  process.nextTick(two);
}

myCallStackOne();
console.log('here');

