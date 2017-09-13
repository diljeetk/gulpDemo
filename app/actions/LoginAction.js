var dispatcher = require("../dispatcher/AppDispatcher");

module.exports = {
   checkUser:function(register){
		console.log("In Login action");
		
		
        dispatcher.dispatch({
           register:register,
           type:"checkUser" 
        });
    },
    
}