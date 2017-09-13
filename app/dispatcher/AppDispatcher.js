var Guid = require("guid");

var listeners = {};

function dispatch(payload) {
	console.log("In dispatch");
    for (var id in listeners) {
        listeners[id](payload);
    }
}

function register(cb) {console.log("In register");
	console.log(cb);
    var id = Guid.create();
    listeners[id] = cb;
}

module.exports = {
    register: register,
    dispatch: dispatch
}