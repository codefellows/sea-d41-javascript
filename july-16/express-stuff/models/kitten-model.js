var mongoose = require('mongoose');

var kittenSchema =  mongoose.schema({
  name: String,
  age: Number,
  cuteness: Number
})

module.exports = mongoose.model('Kitten', kittenSchema);

