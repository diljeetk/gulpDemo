var dispatcher = require("../dispatcher/AppDispatcher");

module.exports = {
    addNewUser:function(register){
		console.log("In action");
		console.log(register.firstName);
		
        dispatcher.dispatch({
           register:register,
           type:"AddUser" 
        });
    },
    
}