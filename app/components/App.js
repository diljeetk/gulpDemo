var React =require('react');
var ReactDOM=require('react-dom');

var App=React.createClass({
	
	render:function(){
		return(
		<div>
		{this.props.children}</div>
		);
	}
});
module.exports=App;