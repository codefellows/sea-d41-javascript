var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var kittenRoutes = express.Router();
require('./routes/kitten-routes')(kittenRoutes);
app.use('/api', kittenRoutes);

var puppy = express.Router();
require('./routes/puppy-routes')(puppyRoutes);
app.use('/api', puppyRoutes);

//Load app wide middleware
app.use(bodyParser.json());



/*

app.get('/kitten', function(req, res) {
  //res.send('hello from a kitten');  
  res.json({name: 'fluffy McKitten'});  
});

/*
app.get('/kitten/1', function(req, res) {
  //TALK TO MONGO HERE
  var kitten = {
    name: 'fluffy',
    cuteness: 3,
    age: 5,
    friends: [] 
  }
  res.json(kitten);
});
*/
app.get('/kitten/:id', function(req, res) {
  var id = req.params.id
  // use this id too lookup specific kitten
  // in database
  var kitten = {
    name: 'fluffy',
    cuteness: 3,
    age: 5,
    friends: [] 
  }
  res.json(kitten);
});

app.post('/kitten', function(req, res) {
  console.log(req.body);
  var name = req.body.name;
  var age = req.body.age;
  var cuteness = req.body.cuteness;
  var friends = req.body.friends;
  console.log(name);
  // create object of all that data
  // save it to the database
  res.json({msg: 'The kitten has been saved'})
});

app.all('*', function(req, res) {
  res.status(404)
  res.json({'msg': '404 not found'})
})
*/


app.listen(3000, function() {
  console.log('Server started');
});

