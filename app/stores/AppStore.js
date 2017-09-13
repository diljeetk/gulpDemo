var dispatcher = require("../dispatcher/AppDispatcher");
var RegisterUserService = require("../services/RegisterUserService");
var cookie=require('react-cookie');
var browserHistory = require('react-router').browserHistory;


function claimStore() {
    var listeners = [];

    function onChange(listener) {
        // getSchools(listener);
        listeners.push(listener);
    }
	function addUser(payload){
		//console.log(payload.register);
		console.log(JSON.stringify(payload.register));
		RegisterUserService.addUser(payload.register).then(function(res){
			console.log("res");
			console.log(res);
		});
	}
	function checkLoginUser(payload){
		console.log("in store");
		console.log(JSON.stringify(payload.register));
		RegisterUserService.checkLoginUser(payload.register).then(function(res){
			console.log("res");
			console.log(res);
			if(res==="no user Found"){
				alert("Invalid Username or Password");
			}
			else if(res.userName!=null){
				console.log(res);
				//cookie.save('userName', res.userName, { path: '/' });
				 browserHistory.push('/myhome/'+JSON.stringify(res));
				
			}
			else{
				alert("Contact administrator"+res);
			}
		});
	}
	function retriveUserData(payload){
		
	}
	function  addNewCourse(payload){
		
		RegisterUserService.addNewCourse(payload.register).then(function(res){
			if(res!="Course allready exists"){
				console.log(res);
			var arr={
				userName:res.userName,
			}
			RegisterUserService.getUserData(arr).then(function(res){
			console.log(res);
			
			
			browserHistory.push('/myhome/'+JSON.stringify(res));
			});}
			else{
					alert("course Allready exsits");
			}
			
			
			
		});
	}
    
    // function getSchools(cb){
        // schoolService.getSchools().then(function (res) {
            // cb(res);
        // });
    // }

   /* function checkLogin(loginval) {
       // loginService.checkLogin(loginval).then(function (res) {
            // console.log(loginval);
            // triggerListeners();
        });
    }*/

    

    // function triggerListeners() {
        // getSchools(function (res) {
            // listeners.forEach(function (listener) {
                // listener(res);
            // });
        // });
    // }

    dispatcher.register(function (payload) {
		console.log(payload);
		console.log("run");
        var split = payload.type.split(":");
		console.log(split[0]);
		
        if (split[0] === "AddUser") {
			addUser(payload);
            
        }
		if (split[0] === "checkUser") {
			//addUser(payload);
			console.log("in check user");
            checkLoginUser(payload);
        }
		if (split[0] === "HomeRetriveUserDetail") {
			//addUser(payload);
			//console.log("in check user");
            retriveUserData(payload);
        }
		if (split[0] === "AddNonExistingCourse") {
			
			console.log("AddNonExistingCourse");
            addNewCourse(payload);
        }
		
    });

    return {
        onChange: onChange
    }
}

module.exports = claimStore();