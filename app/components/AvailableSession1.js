var React =require('react');
var ReactDOM=require('react-dom');

var store=require("../stores/AppStore.js");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var IndexRoute=require('react-router').IndexRoute;
var actions = require("../actions/AddNewUser");
var loginAction=require("../actions/LoginAction");
var Modal=require('react-modal');
var addCourse=require('../actions/AddNewCourse');
var RegisterUserService = require("../services/RegisterUserService");
var AvailableSession1 =React.createClass({
	getInitialState: function(){
		return{
			sessionId:'',
			obj:{},
		}
	}, buttonEventClick1:function(){
	 console.log("buttonEventClick");
	 var data=JSON.parse((this.props.params.id));
	  browserHistory.push('/addNewCourse/'+JSON.stringify(data));
	 },
	  buttonEventClick2:function(){
	 console.log("buttonEventClick2");
	  var data=JSON.parse((this.props.params.id));
	  RegisterUserService.getAllCourses().then(function(res){
		 // console.log(res);
		   browserHistory.push('/AvalibleSession/'+JSON.stringify(data)+'/'+JSON.stringify(res));
	  });
	
	 },
	 buttonEventClick3:function(){
	 console.log("register my session");
	  var data=JSON.parse((this.props.params.id));
	  RegisterUserService.getAllCourses().then(function(res){
			console.log(res);
			browserHistory.push('/RegisterSession/'+JSON.stringify(data)+'/'+JSON.stringify(res));
		});
	 
	 },
	 handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
	 
	  RegisterUserService.getSession({'sessionId':e.target.value}).then(this.setCallBackFunc);
	   },
	   setCallBackFunc:function(res){
		   console.log(res);
		   var userdata=JSON.parse(this.props.params.id);
		  this.state.obj=res;
		 
		    alert(this.state.obj);
		   browserHistory.push('/AvailableSession2/'+JSON.stringify(userdata)+'/'+JSON.stringify(this.state.obj));
	   },
	render(){
		var dt1=JSON.parse(this.props.params.course);
		return(
		<div className="Row">
		<br/>
		<br/>
	
	 <div className="col-sm-2 col-md-3 col-lg-3 abc" onSelect={this.handleSelect} >
	
		
			
			
		<div className="abc" style={{backgroundColor:"#333333"}}>
          <div className="border btn"><Link to="">Profile</Link></div>
		  <br/>
          <div className="border btn"><Link to="">Account</Link></div>
		   
		 </div>
			<br/>
			
			
			
			
			<div className="abc" style={{backgroundColor:"#333333"}}>
		   	  <div className="" style={{color:"white"}}><center><u>Ready To Learn</u></center></div>
			  
			   <div className="bb"><center><button onClick={this.buttonEventClick2}>Available sessions</button></center></div>
		   <br/>
		    
			</div>
			
			
			<br/>
			<div className="abc" style={{backgroundColor:"#333333"}}>
		  <div className="" style={{color:"white"}}><center><u>Ready To Teach</u></center></div>
		   <div className="bb"><center><button  onClick={this.buttonEventClick1}>Add a Non-existing Course</button></center></div>
		  <br/><div className="bb"><center><button  onClick={this.buttonEventClick3}>Register my session</button></center></div>
		  <br/>
		    <br/>
		 
         
      
          </div>     
		 <br/>
        </div>
		
		<div  className="col-sm-10 col-md-9 col-lg-9">
		<br/>
		<div>
	<div className="form-group">
	<label>Session is avalaible on:</label>
		<select className="form-control" name='sessionId' id='sessionId' value={this.state.sessionId} onChange={this.handleInputChange}  >
		<option value=''>Select sessions..</option>
		{
			
			dt1.map(function(arr){
				return (
				<option value={arr._id}>{arr.fromDate}  to {arr.toDate}</option>
				);
			})
		}
		</select></div>
		</div>

		</div>
		 </div>
		
		
		
		
		
		
		
		
		
		
		
		);
	}
});
module.exports=AvailableSession1;