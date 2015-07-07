// These two both work the same
exports.helloOne = function(name) {
  return 'Hello ' + name;
};

module.exports.helloTwo = function(name) {
  return 'Hello ' + name;
};
