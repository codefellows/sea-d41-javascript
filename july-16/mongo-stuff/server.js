var mongoose = require('mongoose');
var express = require('express');
var app = express();
//var bodyparser = require('body-parser');

//app.use(bodyparser.json());

var notesRoutes = express.Router();

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost');

app.use('/api', notesRoutes);

app.listen(process.env.PORT || 3000, function() {
  console.log('server running');
});
