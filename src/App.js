import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Components/nav/nav";
import MainHeader from "./Components/main/main";
import SignUpForm from "./Components/signup/form";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			navSelection: null
		};
	}

	openSignUpModal = () => {
		this.setState({
			modalVisible: true
		});
		this.setState({ navSelection: "Sign Up" });
	};
	openLogInModal = () => {
		this.setState({
			modalVisible: true
		});
		this.setState({ navSelection: "Log In" });
	};

	closeModal = () => {
		this.setState({
			modalVisible: false
		});
	};
	render() {
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<div>
									<Nav
										openSignUpModal={this.openSignUpModal}
										openLogInModal={this.openLogInModal}
										modalVisible={this.state.modalVisible}
										navSelection={this.state.navSelection}
									/>
									<MainHeader
										closeModal={this.closeModal}
										modalVisible={this.state.modalVisible}
										navSelection={this.state.navSelection}
									/>
								</div>
							);
						}}
					/>
					<Route
						exact
						path="/SignUp"
						render={() => {
							return (
								<div>
									<Nav />
									<SignUpForm />
								</div>
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
