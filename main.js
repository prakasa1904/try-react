// main.js
var React = require('react');
var ReactDOM = require('react-dom');

/*ReactDOM.render(
	<h1>Hello, React</h1>,
	document.getElementById('main')
);*/

var Header = React.createClass({
	render: function(){
		return(<header style="{{backgroundColor:'gray'}}">
				<HelloMessage name="Junk" />
			</header>
		);
	}
});

var HelloMessage = React.createClass({
	render: function(){
		return (<h1>Hello {this.props.name}</h1>);
	}
});

ReactDOM.render(
	<HelloMessage name="Kikuk" />,
	document.getElementById('main')
);
