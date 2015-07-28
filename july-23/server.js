var express = require('express');
var app = express();
var mongoose = require('mongoose');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
  console.log('token: ');
  console.log(req.query.token);
  next();
})

// DB Setup
var mongoUri = process.env.MONGO_URI;
mongoose.connect(mongoUri);

// SECRET setup
process.env.secret = process.env.secret || 'changeme'

// Route setup
var apiRouter = express.Router();
['statuses', 'users'].forEach(function(route) {
    require('./routes/' + route + '-routes')(apiRouter)
});
var authRouter = express.Router();
require('./routes/auth-routes')(authRouter);

app.use('/api', require('./middlewares/verify'));
app.use('/api', apiRouter);
app.use('/auth', authRouter);

// Server startup
var port = process.env.port || 3000;
app.listen(port, function() {
  console.log('Server started on port: ' + port);
});
