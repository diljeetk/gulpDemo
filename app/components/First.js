var React=require('react');
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
var First = React.createClass({
   render:function(){ 
   
      return (
	 

<div data-spy="scroll">

<header>
<h1  style={{color:" #7575a3"}}><center>i-Tutor</center></h1>
</header>
<nav classNameName="navbar navbar-inverse">
  <div classNameName="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#"> <span className="glyphicon glyphicon-education"></span> </a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#section1">About</a></li>
    
        <li><a href="#section2">Contact</a></li>
		    
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    </div>
  </div>
</nav>

<div id="myCarousel" className="carousel slide" data-ride="carousel" >
  
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

  
    <div className="carousel-inner" role="listbox">
      <div className="item active">
       <img src={'http://mass-plc.com/images/cms/830afb3d-70e2-4d69-8b79-64b5c0989ece_full.jpg'} alt="New York" width="1200" height="700"></img>
        <div className="carousel-caption">
          <h3>Sell $</h3>
          <p>Money Money.</p>
        </div>
      </div>

      <div className="item">
               <img src={'http://www.houseskill.com/wordpress/wp-content/uploads/2015/05/shareideas.jpg'} alt="Chicago" width="1200" height="700"></img>
        <div className="carousel-caption">
          <h3>More Sell $</h3>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>


    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
</div>

 <div className="container text-center" >
<div className="row" style={{backgroundColor:"#d1d1e0"}} id="section1">
  <marquee><h3 style={{color:"#7575a3"}}>About US</h3></marquee>
  <b>This is a platform where you can learn and you can share your knowledge.</b>
  <br/>
  </div>
  
  <div className="row" id="section2">
    <div className="col-sm-4 well">
    
      <p>Diljeet Kakkar</p>
    </div>
    <div className="col-sm-4 well">
       <p>Srirakasha</p>
    </div>
    <div className="col-sm-4 well">
       <p>Shrividya</p>
    </div>
  </div>
</div>

<footer className="container-fluid text-center">
  <p>CopyRight@i-Tutor2016</p>
</footer>



</div>
	  
	  
	  
	  

      )
   }
});

module.exports=First;