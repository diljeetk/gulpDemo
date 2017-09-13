var mongoose = require("mongoose");
var checkUser = mongoose.model('users',{
     userName:String,
	firstName:String,
lastName:String,
password:String,
mobileNumber:String,
email:String,
dob:String,
hNumber:String,
street:String,
landmark:String,
city:String,
state:String,
country:String,
idproofType:String,
idproof:String,
disclaimer:String

});

module.exports = checkUser;