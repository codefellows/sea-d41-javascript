var bodyParser = require('body-parser');
var Kitten = require('../models/kitten-model.js');

module.exports = function(router) {

  router.get('/kittens', function(req, res) {
    Kitten.find({}, function(err, data) {
      if (err) {
        res.status(400);
        res.json({msg: 'err'});
      }
      res.json(data);
    });
  });

  router.get('/kitten/:id', function(req, res) {
    Kitten.find({id: req.body.id}, function(err, data) {
      if (err) {
        res.status(400);
        res.json({msg: 'err'});
      }
      res.json(data);
    });
    //res.json({name: 'fluffy', age: 'too old'});
  });

  router.post('/kitten', function(req, res) {
    var kitten = new Kitten(req.body);
    kitten.save(function(err) {
      if (err) {
        res.status(400
        res.json({msg: 'failed to save. Invalid'})
      }
      else {
        res.json({msg: 'Kitten saved! ... meow'});
      }
    })
  }

  /*
  router.put('/kitten/:id',

  router.delete('/kitten/:id',
  */

};
