let fs = require('fs');

console.log('one');
var p = new Promise((resolve, reject) => {
  fs.readFile('./promises.js', (err, data) => {
    console.log('three');
    err ? reject() : resolve(data.toString());
  });
});

console.log('two');

p.then((data) => {
  console.log('four');
  console.log('The running code: ');
  //console.log(data);
}).catch( () => {
  console.log('ERROR');
});

