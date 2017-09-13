var mongoose = require("mongoose");
var SessionRegister = mongoose.Schema({
 sessionId:String,
	dateOfApplication:String,
		userName:String
});

module.exports = mongoose.model("SessionRegister", SessionRegister,"sessionRegistrations");