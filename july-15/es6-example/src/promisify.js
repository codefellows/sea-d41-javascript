let fs = require('fs');

function readFile(file) { 
  return new Promise((resolve, refute) => {
    fs.readFile(file, (err, data) => {
      return err ? refute(err) : resolve(data);
    })
  });
}

readFile('./promisify.js').then( (data) => {
    console.log(data.toString());
})

let myFilePrintout = readfile('./block-scope.js');

myFilePrintout.then( (data) => {
    console.log(data.toString());
})


/*
readFile('./promisify.js').then( (data) =>
    console.log(data);
).catch( (err) =>
  console.log('err', err);
);
*/
