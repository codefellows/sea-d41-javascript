var mongoose = require('mongoose');

var statusSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
  content: Boolean,
  why: String
});

var statusModel = mongoose.model('Status', statusSchema);

module.exports = statusModel;
