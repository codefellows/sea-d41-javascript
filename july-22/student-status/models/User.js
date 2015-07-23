var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = Schema({
  name: String,
  statuses : [{ type: Schema.Types.ObjectId, ref: 'Status'}]
});

module.exports = mongoose.model('User', userSchema);
