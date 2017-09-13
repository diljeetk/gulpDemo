var React=require('react');
var ReactDOM=require('react-dom');
var store=require("./stores/AppStore.js");
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var browserHistory = require('react-router').browserHistory;
var IndexRoute=require('react-router').IndexRoute;
var actions = require("./actions/AddNewUser");
var loginAction=require("./actions/LoginAction");
var Modal=require('react-modal');
var addCourse=require('./actions/AddNewCourse');
var RegisterUserService = require("./services/RegisterUserService");
var  Login=require('./components/Login');
var Home =require('./components/Home');
var App=require('./components/App.js');

var SignUp=require('./components/SignUp');
var First=require('./components/First');
var AddNewCourse=require('./components/AddNewCourse');
var AvailableSession=require('./components/AvailableSession');
var AvailableSession1=require('./components/AvailableSession1');
var AvailableSession2=require('./components/AvailableSession2');





var RegisterSession =React.createClass({
	
	getInitialState: function(){
		
		return {
			
		courseId:'',
		duration:'',
		timings:'',
		assessment:'',
		fromDate:'',
		toDate:'',
		username:'',
		noOfSeats:'',
active:'y'		
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
	
	addSession:function(){
		var data=JSON.parse(this.props.params.id);
		this.state.userName=data.userName;
		
		RegisterUserService.registerMySession(this.state).then(function(res){
			
			console.log(res);
			

		});
		var dt=JSON.parse(this.props.params.id);
			browserHistory.push('/myhome/'+JSON.stringify(dt));
		alert('data saved');
		
	},
	
	 handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
	 
    },
	render:function(){
		var dt=JSON.parse(this.props.params.data);
		// console.log(dataUsers);
		
		return(
		<div className="l1">
			<div className="form-group">
		<select className="form-control" name='courseId' id='courseId' value={this.state.courseId} onChange={this.handleInputChange} >
		<option value=''>Select Course...</option>
		{
			
			dt.map(function(arr){
				return (
				<option value={arr._id}>{arr.courseName}</option>
				);
			})
		}
		</select></div>
		<div className="form-group">
    <label>Course Duration:</label>
    <input type="text" className="form-control" value={this.state.duration} onChange={this.handleInputChange} name='duration' id="duration" placeholder="Enter Course duration in days"/>
  </div>
  <div className="form-group">
    <label>Course Timings:</label>
    <input type="text" className="form-control"  value={this.state.timings} onChange={this.handleInputChange} id="timings" name='timings' placeholder="Enter Course timings(hh:mm - hh:mm 24Hr format)"/>
  </div>
  <div className="form-group">
    <label>Assessment:</label>
    <select className="form-control" name='assessment' id='assessment' value={this.state.assessment} onChange={this.handleInputChange}>
	<option value="Yes">Yes</option>
	<option value="No">No</option>
	</select>
  </div>
   <div className="form-group">
    <label>FromDate:</label>
    <input type="date" className="form-control" name='fromDate' id='fromDate' value={this.state.fromDate} onChange={this.handleInputChange} />
  </div>
   <div className="form-group">
    <label>ToDate:</label>
    <input type="date" className="form-control" name='toDate' id='toDate' value={this.state.toDate} onChange={this.handleInputChange} />
  </div>
   <div className="form-group">
    <label>NoOfSeats:</label>
    <input type="number" className="form-control" name='noOfSeats' id='noOfSeats' value={this.state.noOfSeats} onChange={this.handleInputChange} />
  </div>
  
  <input type='button' className='btn btn-default' onClick={this.addSession} value="Add session"/>
  
		
		
		</div>
		);
	}
});


ReactDOM.render((<Router history={browserHistory}>
 <Route path="/" component={App}>
                                  
								  
								 
					 <IndexRoute component={First}/>
		 
								 
					<Route path = "/Login" component = {Login}/>
								  
                <Route path = "/myhome/:id" component = {Home}>
				
				</Route>
				
                 <Route path = "/addNewCourse/:id" component = {AddNewCourse}/>
				 <Route path = "/AvalibleSession/:id/:all" component = {AvailableSession}/>
				 <Route path = "/AvailableSession1/:id/:course" component = {AvailableSession1}/>
				  <Route path = "/AvailableSession2/:id/:course" component = {AvailableSession2}/>
				 <Route path = "/RegisterSession/:id/:data" component = {RegisterSession}/>
                                 <Route path = "/signup" component = {SignUp}/>
													 </Route>	 
      </Router>
                                  ), document.getElementById("container"));    


