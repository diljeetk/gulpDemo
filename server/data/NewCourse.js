var mongoose = require("mongoose");
var NewCourse = mongoose.Schema({
    courseName:String,
	courseDescription:String,
	userName:String,
});

module.exports = mongoose.model("NewCourse", NewCourse,"courses");