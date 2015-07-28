var mongoose = require('mongoose');
var Schema = mongoose.Schema

var userSchema = Schema({
  name: String,
  password: String,
  statuses : [{ type: Schema.Types.ObjectId, ref: 'Status'}]
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', userSchema);
