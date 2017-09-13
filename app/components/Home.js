var React=require('react');
var ReactDOM=require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var actions = require("../actions/AddNewUser");
var loginAction=require("../actions/LoginAction");
var Modal=require('react-modal');
var addCourse=require('../actions/AddNewCourse');
var RegisterUserService = require("../services/RegisterUserService");
var Home=React.createClass({
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
   render:function(){  

   var data=JSON.parse((this.props.params.id));
   console.log(data);
   var name=data.userName;
   console.log(name);

    return (
	<div >
	
	<header>
<h1  style={{color:" #7575a3"}}><center>i-Tutor</center></h1>
</header>
<nav classNameName="navbar navbar-inverse">
  <div classNameName="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        
      </button>
      <a className="navbar-brand" href="#"> <span className="glyphicon glyphicon-education"></span> </a>
	  
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#"><h4 className="tshadow" style={{color:" #7575a3"}}>welcome {data.userName}</h4></a></li>
        
		    
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/"><span className="glyphicon glyphicon-log-out"></span>SignOut</Link></li>
      </ul>
    </div>
  </div>
</nav>

	
	<div className="Row" >

	
	<br/>
	</div>
  	<div className="Row">
	
	 <div className="col-sm-4" onSelect={this.handleSelect} >
	
		<div className="well" style={{}}>
		   	  <div className="" style={{color:"blue"}}><center><b>Ready To Learn</b></center></div>
			  <br/>
			  
			   <div className=""><center><button className="hb button2" onClick={this.buttonEventClick2}>Available sessions</button></center></div>
		   <br/>
		    
			</div>
			
			
			<br/>
			<div className="well" style={{}}>
		  <div className="" style={{color:"blue"}}><center><b>Ready To Teach</b></center></div>
		  <br/>
		  
		   <div className=""><center><button className="hb button2" onClick={this.buttonEventClick1}>Add a Non-existing Course</button></center></div>
		  <br/><div className=""><center><button className="hb button2" onClick={this.buttonEventClick3}>Register my session</button></center></div>
		  <br/>
		    <br/>
		 
          
      
          </div>     
		 <br/>
        </div>
		
		<div  className="col-sm-8">
		<br/>
		 
		<table className="table"><tbody>
<tr>
<th>First Name:</th>
<td><center>{data.firstName}</center></td>
</tr>

<tr>
<th>Last Name:</th>
<td><center>{data.lastName}</center></td>
</tr>

<tr>
<th>Mobile Number:</th>
<td><center>{data.mobileNumber}</center></td>
</tr>

<tr>
<th>Date of Birth:</th>
<td><center>{data.dob}</center></td>
</tr>

<tr>
<th>Email:</th>
<td><center>{data.email}</center></td>
</tr>

<tr>
<th>Address</th>
<td><center>{data.hNumber}&nbsp;&nbsp;{data.street}&nbsp;&nbsp;{data.landmark}</center></td>
</tr>

<tr>
<th>City:</th>
<td><center>{data.city}</center></td>
</tr>

<tr>
<th>State:</th>
<td><center>{data.state}</center></td>
</tr>

<tr>
<th>Country:</th>
<td><center>{data.country}</center></td>
</tr>

<tr>
<th>Identity Proof Type:</th>
<td><center>{data.idproofType}</center></td>
</tr>

<tr>
<th>Identity Proof Number:</th>
<td><center>{data.idproof}</center></td>
</tr>
</tbody>
</table>
		
		</div>

 
	</div>

	
	
</div>
	

	)
  }
});
module.exports=Home;