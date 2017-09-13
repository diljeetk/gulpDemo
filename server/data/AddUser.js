var mongoose = require("mongoose");
var AddUser = mongoose.Schema({
    userName:String,
	firstName:String,
lastName:String,
password:String,
mobileNumber:String,
email:String,

});

module.exports = mongoose.model("AddUser", AddUser,"users");