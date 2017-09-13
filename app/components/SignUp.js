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
var SignUp=React.createClass({
	getInitialState:function(){
      return {
          
firstName:'',
lastName:'',
userName:'',
password:'',
mobileNumber:'',
email:'',



      }  
    },
	clickEvent:function(e){
		e.preventDefault();
		alert("click event");
		actions.addNewUser(this.state);
	},
	enterWord: function(e){
		 e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
	},
	render:function(){var divStyle1={width:'70%'};
		return(
		<div className="row ">
		<br/>
		<header>
                                      <h1  style={{color:" #7575a3"}}><center>i-Tutor</center></h1>
                                </header><br/>
		<div className='col-sm-3'></div>
		


 <div  className="col-sm-6" style={{color:"#7575a3",backgroundColor:"#e0e0eb",borderStyle:"outset", borderRadius:"8px"}}>

<br/>
<center>
<h4><b><u>Register</u></b></h4>
</center>
<div className="form-group pad1">
<input type='text' name='userName' ref='userName' onChange={this.enterWord} value={this.state.userName} placeholder="Enter username you wish to enter" className="form-control "/>
</div>

<div className="form-group pad1">
<input type='password' name='password' ref='password' onChange={this.enterWord} value={this.state.password} placeholder="Enter Password" className="form-control"/>

</div>

<div className="form-group pad1" >
<input type='password' name='cPassword' ref='cPassword' onChange={this.enterWord} value={this.state.cPassword} placeholder="Confirm Password" className="form-control"/>
</div>

<center><label>Personal Information:</label></center>
<div className="form-group pad1">
<input type='text' name='firstName' ref='firstName' onChange={this.enterWord} value={this.state.firstName} placeholder="Enter First Name" className="form-control"/>
</div>

<div className="form-group  pad1">
<input type='text' name='lastName' ref='lastName' onChange={this.enterWord} value={this.state.lastName} placeholder="Enter Last Name" className="form-control"/>
</div>

<div className="form-group pad1">
<input type='number' name='mobileNumber' ref='mobileNumber' onChange={this.enterWord} value={this.state.mobileNumber} placeholder="Enter your Mobile Number" className="form-control"/>
</div>

<div className="form-group pad1">
<input type='email' name='email' ref='email' onChange={this.enterWord} value={this.state.email} placeholder="Enter your Email ID" className="form-control"/>
</div>



<center>
<button  className="btn btn-primary" onClick={this.clickEvent}>Sign Up</button>
</center>
<br/>
</div>



<div className='col-sm-3'></div>

		</div>
		
		)
	}
	
});


module.exports=SignUp;