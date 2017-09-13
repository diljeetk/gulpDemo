var mongoose = require("mongoose");
var AddUser1 = require("../data/AddUser");
var _ = require("underscore");
var checkLogin1 = require("../data/checkLoginSchema");
var NewCourse1 = require("../data/NewCourse");
var registerMySessionData = require("../data/RegisterMySession");
var SessionRegisterData = require("../data/SessionRegister");
var router = require("express").Router();
router.route("/AddUser/:id?").post(AddUser);
router.route("/checkLogin/:id?").post(checkLoginUser);
router.route("/AddNonExistingCourse/:id?").post(addNonExistingCourse);
router.route("/getUserData/:id?").post(getUserData);
router.route("/getAllCourses/:id?").post(getAllCourses);
router.route("/registerMySession/:id?").post(registerMySession);
router.route("/getAllSessions/:id?").post(getAllSessions);
router.route("/getSession/:id?").post(getSession);
router.route("/ApplyForSession/:id?").post(ApplyForSession);

function ApplyForSession(req,res){
	
	console.log(req.body);
	 registerMySessionData.find({'_id':req.body.sessionId},function(err,docs){
		 console.log(docs);
		if (err)
            res.send(err);
        else if(req.body.userName==docs[0].userName){
			res.json("You are no allowed to register for this course");
		}
		else{
			var SessionRegisterData1=new SessionRegisterData(_.extend({},req.body));
	if(req.body.userName==docs)
	SessionRegisterData1.save(function(err){
		if(err)
			res.send(err);
		else{
			res.json(SessionRegisterData1);
		}
	});
		}
            
	});
	
}


function getSession(req,res){
	
	//var chk=new checkLogin1(_.extend({}, req.body));
	console.log(" getSession");
	console.log(req.body.sessionId);
	 registerMySessionData.find({'_id':req.body.sessionId},function(err,docs){
		if (err)
            res.send(err);
        else
            res.json(docs);
	});
	
}

function getAllSessions(req,res){
	
	//var chk=new checkLogin1(_.extend({}, req.body));
	console.log(" getAllSessions");
	console.log(req.body);
	 registerMySessionData.find({courseId:req.body.courseId},function(err,docs){
		if (err)
            res.send(err);
        else
            res.json(docs);
	});
	
}

function registerMySession(req, res) {
	console.log("in  registerMySessionData controller");
	console.log(req.body);
    var  registerMySessionData1 = new  registerMySessionData(_.extend({}, req.body));
     registerMySessionData1.save(function (err) {
		console.log("in  registerMySessionData controller");
        if (err)
            res.send(err);
        else
            res.json(registerMySessionData1);
    });
}

function getAllCourses(req,res){
	//var chk=new checkLogin1(_.extend({}, req.body));
	console.log("getAllCourses");
	NewCourse1.find({},function(err,docs){
		if (err)
            res.send(err);
        else
            res.json(docs);
	});
	
}

function AddUser(req, res) {
	console.log("in add user controller");
    var AddUser2 = new AddUser1(_.extend({}, req.body));
    AddUser2.save(function (err) {
		console.log("in add user controller");
        if (err)
            res.send(err);
        else
            res.json(AddUser2);
    });
}
function addNonExistingCourse(req, res) {
	var flag=1;
	console.log("in add user controller" );
	console.log(req.body.courseName);
	NewCourse1.findOne({courseName:req.body.courseName},function(err,course){
		console.log("addNonExistingController "+err);
		console.log(course);
	if(err)
		res.json(err);
	else if(course){
		res.json("Course allready exists");
	
	}
	else{
		console.log("Nacho0");
		flag=0;
		var newCourse2 = new NewCourse1(_.extend({}, req.body));
	
    newCourse2.save(function (err) {
		console.log("in New Course controller");
        if (err)
            res.send(err);
        else
            res.json(newCourse2);
	  
	
	});
	}
    });
}

function checkLoginUser(req,res){
	//var chk=new checkLogin1(_.extend({}, req.body));
	console.log(req.body.userName);
	checkLogin1.findOne({userName:req.body.userName,password:req.body.password},function(err,user){
		if(err){
			res.json(err);
		}
		
		else if(!user){
			res.json("no user Found");
		}
		else{
			res.json(user);
		}
	});
	
}

function getUserData(req,res){
	//var chk=new checkLogin1(_.extend({}, req.body));
	console.log(req.body.userName);
	checkLogin1.findOne({userName:req.body.userName},function(err,user){
		if(err){
			res.json(err);
		}
		
		else if(!user){
			res.json("no user Found");
		}
		else{
			res.json(user);
		}
	});
	
}
// function getSchools(req, res) {
    // School.find(function (err, schools) {
        // if (err)
            // res.send(err);
        // else
            // res.json(schools);
    // });
// }
/*
function AddUser(req, res) {
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
*/

module.exports = router;