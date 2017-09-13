var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:7777/api/AddUser";
var resourceUrlforLogin="http://localhost:7777/api/checkLogin";
var resourceUrlForNewCourse="http://localhost:7777/api/AddNonExistingCourse";
var  resourceUrlgetAllCourses="http://localhost:7777/api/getAllCourses";
var resourceUrlgetUserData = "http://localhost:7777/api/getUserData";
var resourceUrlregisterMySession = "http://localhost:7777/api/registerMySession";
var resourceUrlgetAllSession="http://localhost:7777/api/getAllSessions";
var resourceUrlgetSession="http://localhost:7777/api/getSession";
var resourceUrlApplyForSession="http://localhost:7777/api/ApplyForSession";
module.exports = {
	applyForSession: function (loginval) {
		console.log("ApplyForSession");console.log(loginval);
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrlApplyForSession,
                data: JSON.stringify(loginval),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
	getSession: function (loginval) {
		console.log("getAllSession");console.log(loginval);
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrlgetSession,
                data: JSON.stringify(loginval),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
	getAllSession: function (loginval) {
		console.log("getAllSession");console.log(loginval);
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrlgetAllSession,
                data: JSON.stringify(loginval),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    registerMySession: function (loginval) {
		console.log("Register User Service");
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrlregisterMySession,
                data: JSON.stringify(loginval),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
	addUser: function (loginval) {
		console.log("Register User Service");
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: JSON.stringify(loginval),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
	checkLoginUser: function (checkUser) {
		console.log("Login Service");
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrlforLogin,
                data: JSON.stringify(checkUser),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
	addNewCourse: function (loginval) {
		console.log("add new course Service");
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrlForNewCourse,
                data: JSON.stringify(loginval),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
	getUserData: function (checkUser) {
		console.log("Login Service");
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrlgetUserData,
                data: JSON.stringify(checkUser),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
	getAllCourses: function (checkUser) {
		console.log("getAllCourses- Register USERSERVICE");
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrlgetAllCourses,
                data: JSON.stringify(checkUser),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    },
    // getSchools: function () {
        // var Promise = promise.Promise;
        // return new Promise(function (resolve, reject) {
            // $.ajax({
                // url: resourceUrl,
                // method: "GET",
                // dataType: "json",
                // success: resolve,
                // error: reject
            // });
        // });
    // },
    // deleteSchool: function (school) {
        // var Promise = promise.Promise;
        // return new Promise(function (resolve, reject) {
            // $.ajax({
                // url: resourceUrl + "/" + school._id,
                // method: "DELETE",
                // dataType: "json",
                // success: resolve,
                // error: reject
            // });
        // });
    // }
}