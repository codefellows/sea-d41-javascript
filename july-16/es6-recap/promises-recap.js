let fs = require('fs');

function readfile( (file) => {
  return new Promise( (resolve, refute) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        refute(err);
      }
      else {
        resolve(data);
      }
    });
  });
});


readfile('./.promises-recap.js.swp').then( (data) =>
    console.log(data)
);
