
var AvalibleSession=React.createClass({
	
	getInitialState:function(){
      return {
          courses:[],
         
		  
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
	 RegisterUserService.getAllSession({'courseId':e.target.value}).then(this.setValuesNow);
    },
	
	setValuesNow:function(res){
		
		 this.state.courses=res;
		 console.log(this.state.courses);
		var data=JSON.parse(this.props.params.id);
		 // ReactDOM.render(<AvailableSession1 course={data}/>,document.getElementById('xxx111'));
	browserHistory.push('/AvailableSession1/'+JSON.stringify(data)+'/'+JSON.stringify(this.state.courses));

	 },
     
	render(){var dt=JSON.parse(this.props.params.all);
	
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
		

		</div>
		 </div>
		
		
		
		
		
		);
		
	}
});
module.exports=AvalibleSession;