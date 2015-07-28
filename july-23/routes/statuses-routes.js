var Status = require('../models/Status');

module.exports = function(router) {
  router.get('/statuses', function(req, res) {
    Status.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).json({msg: 'internal server error'});
      } 
      res.json(data);
    }); 
  });

  router.post('/statuses', function(req, res) {
    var newStatus = new Status(req.body);
    newStatus.save(function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).json({msg: 'internal server error'});
      }
      res.json(data)
    });
  });
}
