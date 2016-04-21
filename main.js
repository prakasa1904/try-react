// main.js
var React = require('react');
var ReactDOM = require('react-dom');

/*ReactDOM.render(
	<h1>Hello, React</h1>,
	document.getElementById('main')
);*/

var Header = React.createClass({
	getInitialState: function(){
                return {bc: 'gray'};
        },
	handleClick: function(e){
		this.setState({bc: 'red'})
                e.preventDefault();
        },
	render: function(){
		return(<header style={{backgroundColor:this.state.bc}}>
				<HelloMessage clickHandler={this.handleClick} name={this.props.myName} />
			</header>
		);
	}
});

var HelloMessage = React.createClass({
	getInitialState: function(){
		return {nama: 'Prakasa'};
	},
	componentDidMount: function(){
		var timeoutID;
		var $this = this;
		
		timeoutID = setTimeout(function(){
			$this.setState({nama: 'Rubbick'});
			clearTimeout(timeoutID);
		}, 3000);
	},
	handleClick: function(e){
		alert('Hallo ' + this.state.nama);
		e.preventDefault();
	},
	render: function(){
		return (<h1>
			Hello {this.state.nama}
				<a href="#" onClick={this.props.clickHandler}>
					{this.state.nama}
				</a>
			</h1>
		);
	}
});

ReactDOM.render(
	<Header myName="React" />,
	document.getElementById('main')
);
