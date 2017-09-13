var React=require('react');
var ReactDOM=require('react-dom');
var CommonPart=require('./CommonPart');
var AddNewCourse=React.createClass({
	getInitialState:function(){
      return {
          courseName:"",
          courseDescription:"",
		  userName:""
      }  
    },
	handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
	addCourse: function(){
		console.log("Main.js"); var data=JSON.parse((this.props.params.id));
		//console.log(JSON.parse(this.state));
		var data=JSON.parse((this.props.params.id));
   
   var name=data.userName;
   this.state.userName=name;
		addCourse.addNewCourse(this.state);
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
	render(){
		  var data=JSON.parse((this.props.params.id));
   console.log(data);
   var name=data.userName;
   console.log(name)
		return(
		<div>
		
<CommonPart id={data}/>
		<div>
		<div className="form-group">
    <label >Course Name:</label>
    <input type="text" className="form-control" value={this.state.courseName} onChange={this.handleInputChange} id="courseName" name="courseName" placeholder="Enter Course Name"/>
  </div>
  <div className="form-group ">
    <label >Course Description:</label>
    <input type="text" className="form-control" onChange={this.handleInputChange} value={this.state.courseDescription} id="courseDescription" name="courseDescription" placeholder="Enter Course Description"/>
  </div>
   <button type="submit" onClick={this.addCourse}  className="btn btn-primary">Add Course</button>
		</div>
		
		</div>
		); 
	}
});
module.exports=AddNewCourse;