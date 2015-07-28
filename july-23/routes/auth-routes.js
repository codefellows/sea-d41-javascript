var User = require('../models/User')
var jwt = require('jsonwebtoken')

module.exports = function(router) {

 router.post('/auth', function(req, res) {
   // Find the user
   User.findOne({ name: req.body.name }, function(err,user) {
     if (err) {
       res.status(500).json({msg: 'sever err'})
     }  
     // verify a user is found
     if (!user) {
       res.json({ success: false, msg: 'Authentication failed. User not found.'})
     }
     //  verify password matches
     else if (user.checkPassword(req.body.password)) 
     //else if (user.password != req.body.password) {
       res.json({ success: false, msg: 'Authentication failed. Password does not match.'})
     }
     
     else {
       // If user and password is correct. Create a token
       var token = jwt.sign(user, process.env.secret, { expiresInMinutes: 1440 })
       res.json({
         success: true,
         msg: 'Authentication successful',
         token: token
       }) 
     }
   })
 }) 
}
