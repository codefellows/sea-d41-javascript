var greet = module.exports = function(name, callback) {
  setTimeout(function() {
    callback(null, 'hello ' + name);
  }, 100);
};

greet('johnny', function(err, data) {
  if (err) throw err;
  console.log(data);
});
