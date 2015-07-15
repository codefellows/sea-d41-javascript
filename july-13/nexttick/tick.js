function main() {
  console.log('first');
  process.nextTick(blah);
}

function blah() {
  console.log('fourth');
}

function side() {
  console.log('second');
}

function other() {
  console.log('third');
}

process.nextTick(other);
main();
side();
