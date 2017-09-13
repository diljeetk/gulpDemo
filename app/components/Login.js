var React=require('react');
var ReactDOM=require('react-dom');
var loginAction=require("../actions/LoginAction");
var Link = require('react-router').Link;

var Login = React.createClass({
    getInitialState:function(){
      return {
          userName:"",
          password:""
      }  
    },
    checkLogin:function(e){
        e.preventDefault();//console.log("check login");
       // actions.checkLogin(this.state);
	   loginAction.checkUser(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
		
                                <div className="row">
								<header>
                                      <h1  style={{color:" #7575a3"}}><center>i-Tutor</center></h1>
                                </header>
								<br/>
								<br/>
								
						<div className="col-sm-4">
                       </div>						
                <div  className="col-sm-4" style={{color:"#7575a3",backgroundColor:"#e0e0eb",borderStyle:"outset"}}>
                 <form  onSubmit={this.checkLogin}>
				 <br/>
				 
                <div className="form-group">
				
                    <label className="control-label" htmlFor="userName">Username:</label>
                    <input type="text" className="form-control" id="userName" name="userName" value={this.state.userName} onChange={this.handleInputChange} placeholder="Username" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />                    
                </div>
				<br/>
			
                <div className="form-group">
                    <center><button className="btn btn-primary" type="submit">Login</button></center>
                </div>
				<br/>
				<center><p>New user? <Link to="/signup">Sign up</Link>here</p></center>
				<br/>
                </form>
              </div>
												
				       <div className="col-sm-4">
                       </div>	
                  
					
           </div>
		   
		   
        )
    }
});
module.exports=Login;
