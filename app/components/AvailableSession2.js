var React =require('react');
var ReactDOM=require('react-dom');
;
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
var AvailableSession2=React.createClass({
	getInitialState:function(){
		return{
			sessionId:'',
			userName:'',
			dateOfApplication:''
		}
	},
	 buttonEventClick1:function(){
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
	submitEvent: function()
	{
		var dt=JSON.parse(this.props.params.id);
		
		this.state.userName=dt.userName;
		var dt1=JSON.parse(this.props.params.course);console.log(dt1);
		this.state.sessionId=dt1[0]._id;
		
		var date1=new Date();
		this.state.dateOfApplication=date1;
		console.log(this.state.dateOfApplication);
		RegisterUserService.applyForSession(this.state).then(function(res){
		
		alert(res);
		
		browserHistory.push('/myhome/'+JSON.stringify(dt));
		});
		
	},
	render(){var dt1=JSON.parse(this.props.params.course);
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
	<div>
		 <table>
		   
		   <tr><th>Description</th><td>{dt1[0]._id}</td></tr>
		    <tr><th>CourseID</th><td>{dt1[0].courseId}</td></tr>
			 <tr><th>Duration</th><td>{dt1[0].duration}</td></tr>
			 <tr><th>Timings</th><td>{dt1[0].timings}</td></tr>
		    <tr><th>Assessment</th><td>{dt1[0].assessment}</td></tr>
			 <tr><th>FromDate</th><td>{dt1[0].fromDate}</td></tr>
			 <tr><th>ToDate</th><td>{dt1[0].toDate}</td></tr>
		    <tr><th>Tutors Name</th><td>{dt1[0].userName}</td></tr>
			 
		   </table></div>
		   <button className='btn btn-default' onClick={this.submitEvent}>Apply For session</button>
		</div>

		</div>
		 </div>
		
		
		
		
		
		
		
		);
	}
});
module.exports=AvailableSession2;