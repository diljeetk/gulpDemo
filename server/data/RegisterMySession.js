var mongoose = require("mongoose");
var RegisterMySession = mongoose.Schema({
 
	courseId:String,
		duration:String,
		timings:String,
		assessment:String,
		fromDate:String,
		toDate:String,
		userName:String,
		noOfSeats:String,
		active:String
});

module.exports = mongoose.model("RegisterMySession", RegisterMySession,"availableSessions");