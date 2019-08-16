import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'


var Context = React.createContext();

export const Consumer = Context.Consumer

class Provider extends Component {
	state = {
		message: `It's a nice day`,
		temp: 73
	}

	render(){
		return(
			<Context.Provider value={{
				state: this.state,
				handleInputChange: (e) => {
					const {name, value} = e.target;
					this.setState({
						[name]: value
					})
				}
			}}>
				{this.props.children}
			</Context.Provider>
		)
	}
}


// higher order component is a funciton that returns a component
export function connectStore(DepenpendantComponent) {
	return class extends Component {
		constructor(props) {
            super(props);
            this.state = {
                name: "eric"
            };
        }
		render(){
			
			return(
				<Consumer>
					{context => <DepenpendantComponent context={{...context}} {...this.props} name={this.state.name} />}
				</Consumer>
			)
		}
	}
}


class App extends Component {
	render(){
		return (
			<Provider>
				 <Router>
					<>
						<Route
							exact
							path='/hello/:id'
							render={(props) =>
								<Header 
									{...props}
								/>
							}
						/>
					</>
				</Router>
			</Provider>
		  );
	}

}

export default App;
