// NOT EQUIVALENT The second one will not behave
// as you'd initially expect
module.exports = function() {
  console.log('do stuff');
};

exports = function() 
  console.log('do stuff');
};
