import React from 'react';
import './App.css';
import { connectStore } from './App'


class Header extends React.Component {

	componentWillMount(){
		console.log(this.props);

	}
	render() {
		return (

			<>
				<h1>This is header</h1>
				{/* can not get the following line to acccess the params */}
				<p>{this.props.match.params.id}</p>
				<p>{this.props.context.state.message}</p>
				<p>{this.props.name}</p>

			</>
		);
	}
}

export default connectStore(Header);
