let fs = require('fs')

/*
function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  })
}

function

timeout(1000).then(() => {
  console.log(4);
});
*/

var p2 = new Promise((resolve, reject) => {
  fs.readFile('./textss.txt', (err, data) => {
    if (err) {
      reject(err)
    } 
    else {
      resolve(data.toString());
    }
  });
});

p2.then((data) =>
  console.log(data)
).catch((err) =>
  console.log('error') 
  console.log(err)
);

