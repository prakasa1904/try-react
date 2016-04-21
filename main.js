// main.js
var React = require('react');
var ReactDOM = require('react-dom');

/*ReactDOM.render(
	<h1>Hello, React</h1>,
	document.getElementById('main')
);*/

var Header = React.createClass({
	render: function(){
		return(<header style={{backgroundColor:'gray'}}>
				<HelloMessage name={this.props.myName} />
			</header>
		);
	}
});

var HelloMessage = React.createClass({
	getInitialState: function(){
		return {nama: 'Prakasa'};
	},
	render: function(){
		return (<h1>Hello {this.state.nama}</h1>);
	}
});

ReactDOM.render(
	<Header myName="React" />,
	document.getElementById('main')
);
