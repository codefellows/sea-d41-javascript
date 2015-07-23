var User = require('../models/User');
var Status = require('../models/Status');
var bodyParser = require('body-parser');

module.exports = function(router) {
  router.use(bodyParser.json());

  // /users route is 'normalized'
  // This is because normalizing a collection
  // is fairly expensive
  router.route('/users')
    .get(function(req, res) {
      User.find({}, function(err, data) {
        console.log('/users hit')
        if (err) {
          res.status(500).json({msg: 'server error'});
        }
        res.json(data)
      });
    })
    .post(function(req, res) {
      var user = new User(req.body);
      user.save(function(err, data) {
        if (err) {
          res.status(500).json({msg: 'server error'});
        }
        res.json(data)
      })
    });

  // Individual user is denormalized. The performance
  // hit for denormalizing one user is small, and often
  // simplifies queries
  router.route('/users/:id')
    .get(function(req, res) {
      User.findById(req.params.id)
        .populate('statuses')
        .exec(function(err, doc) {
        res.json(doc);
      })
    })
    .delete(function(req, res) {
      User.findByIdAndRemove(req.params.id, function(err, data) {
        if (err) {
          res.status(500).json({msg: 'server error'});
        } 
        res.json(data);
      })
    })
      /*
      User.findById(req.params.id)
        .populate(statuses)
        .exec(function(err, doc) {
          if (err) {
            res.status(500).json({msg: 'server error'});
          }
          res.json(doc);
        });
    });
    */

  router.route('/users/:id/statuses')
    .get(function(req, res) {
      User.findById(req.params.id)
        .populate('statuses')
        .exec(function (err, user) {
          if (err) {
            res.status(500).json({msg: 'server error'});
          }
          res.json(user.statuses);
        });
    })

    .post(function(req, res) {
      User.findById(req.params.id, function(err, doc) {
        console.log(doc._id);
        var newStatus = new Status({
          user: doc._id,
          content: req.body.content,
          why: req.body.why
        });
        newStatus.save(function(err, statusDoc) {
          if (err) {
            res.status(500).json({msg: 'server error'});
          } 
          User.update({_id: doc}, { $push: {statuses: statusDoc} }, function(err, data) {
            res.json(statusDoc);
          });
        });
      })
    })
};
