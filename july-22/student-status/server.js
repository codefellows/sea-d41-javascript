var express = require('express');
var app = express();
var mongoose = require('mongoose');

// DB Setup
var mongoUri = process.env.MONGO_URI
mongoose.connect(mongoUri);

// Route setup
var apiRouter = express.Router();
['statuses', 'users'].forEach(function(route) {
    require('./routes/' + route + '-routes')(apiRouter)
});
app.use('/', apiRouter);

// Server startup
var port = process.env.port || 3000;
app.listen(port, function() {
  console.log('Server started on port: ' + port);
});
