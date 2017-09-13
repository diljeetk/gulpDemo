var dispatcher = require("../dispatcher/AppDispatcher");

module.exports = {
    addNewCourse:function(register){
		console.log("In Add Course action");
		console.log(register);
		
        dispatcher.dispatch({
           register:register,
           type:"AddNonExistingCourse" 
        });
    },
    
}