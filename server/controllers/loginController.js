var mongoose = require("mongoose");
var login = require("../data/login");
var _ = require("underscore");

var router = require("express").Router();
router.route("/login/:id?").post(checkLogin);

// function getSchools(req, res) {
    // School.find(function (err, schools) {
        // if (err)
            // res.send(err);
        // else
            // res.json(schools);
    // });
// }

function checkLogin(req, res) {
    // var loginval = new Login(_.extend({}, req.body));
	login.findOne({
    username: req.body.username,
	password: req.body.password
	
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        // var token = jwt.sign(user, app.get('superSecret'), {
          // expiresInMinutes: 1440 // expires in 24 hours
        // });

        // return the information including token as JSON
        res.json({
          success: true,
          message: 'User Authenticated!',
          token: token
        });
      }   

    }

  });
    // login.save(function (err) {
        // if (err)
            // res.send(err);
        // else
            // res.json(school);
    // });
}

// function deleteSchool(req, res) {
    // var id = req.params.id;
    // School.remove({ _id: id }, function (err, removed) {
        // if (err)
            // res.send(err)
        // else
            // res.json(removed);
    // });
// }

module.exports = router;