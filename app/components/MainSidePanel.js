 
 
 var MainSidePanel=React.createClass({
 
 render:function(){
 return(
 
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
          
      
          </div>     
 
 
 );
 }
 
 });
 module.exports=MainSidePanel;
 