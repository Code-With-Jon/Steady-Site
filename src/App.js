import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Components/nav/nav";
import MainHeader from "./Components/main/main";
import SignUpForm from "./Components/signup/form";
import userService from './utils/userService';
import tokenService from './utils/tokenService';
import * as subscriberAPI from '../src/services/subscriber-api';
import * as gameAPI from '../src/services/game-api';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { env } from './config/mail'
import TermsOfUse from "./Components/termsOfUse/termsOfUse";
import Footer from "./Components/footer/footer";


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			navSelection: null,
			user: userService.getUser(),
			subscribers: [],
			currentSub: false,
			name: undefined,
			messages: [],
			selectedAnswers: [],
		};
	}

	async componentDidMount() {
		addResponseMessage("Welcome to Steady! ... Can I have your first name please?");

		const selectedAnswers = await gameAPI.getAll();
		this.setState({ selectedAnswers });
	}

	handleAddGameAnswers = async newGameData => {
		const newGame = await gameAPI.create(newGameData)
		this.setState(state => ({
			selectedAnswers: [...state.selectedAnswers, newGame]
		}))
		// Using cb to wait for state to update before rerouting
		//RUN ALGO TO COMPARE USERS ANSWERS AGAINST OTHER USERS
	}

	handleAddSubscriber = async newSubData => {
		const newSub = await subscriberAPI.create(newSubData);
		this.setState(state => ({
			subscribers: [...state.subscribers, newSub]
		}))
		// Using cb to wait for state to update before rerouting

	}


	handleLogout = () => {
		userService.logout();
		this.setState({ user: null });
	}

	handleSignupOrLogin = () => {
		this.setState({ user: userService.getUser() });
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


	handleNewUserMessage = (newMessage) => {
		let mess = this.state.messages
		mess.push(newMessage)
		// Now send the message throught the backend API
		newMessage = newMessage.toLowerCase()
		let arr = mess[0].split(' ')
		let name = arr[arr.length - 1]
		if (name.includes('.')) {
			name = name.split('.')
			name = name.join('')
		}
		this.setState({ name })
		this.setState({ messages: mess })
		if (newMessage.includes(name)) {
			addResponseMessage(`Hi ${name}, how can I assist you?`)
		}
		else if (newMessage.includes('terms')) {
			addResponseMessage('Please check out our terms of use here: ')
		}
		else if (newMessage.includes('rape')) {
			addResponseMessage('Please contact local authorities')
		}
		else if (newMessage.includes('inappropriate')) {
			addResponseMessage('If there is another user you would like to report, please contact us using this form: http://localhost:3000/#Contact')
		}
		else if (newMessage.includes('launch')) {
			addResponseMessage('Please fill out the form above the Apple and Google store buttons to stay updated on upcoming launch and features')
		}
		else if (newMessage.includes('download the app')) {
			addResponseMessage('Please fill out the form above the Apple and Google store buttons to stay updated on upcoming launch and features')
		}
		else if (newMessage.includes('signup')) {
			addResponseMessage('Please fill out the form above the Apple and Google store buttons to stay updated on upcoming launch and features')
		}
		else if (newMessage.includes('sign up')) {
			addResponseMessage('Please fill out the form above the Apple and Google store buttons to stay updated on upcoming launch and features')
		}
		else if (newMessage.includes('help')) {
			addResponseMessage('What can we help you with?')
		}
		else if (newMessage.includes('hello')) {
			addResponseMessage('Hey there! ... What can we help you with?')
		}
		else if (newMessage.includes('hi')) {
			addResponseMessage('Hey there! ... What can we help you with?')
		}
		else if (newMessage.includes('hey')) {
			addResponseMessage('Hey there! ... What can we help you with?')
		}
		else if (newMessage.includes('thank you')) {
			addResponseMessage('My pleasure! Is there anything else I can assist you with?')
		}
		else if (newMessage.includes('thanks!')) {
			addResponseMessage('My pleasure! Is there anything else I can assist you with?')
		}
		else if (newMessage.includes('no thanks')) {
			addResponseMessage('Alright, have a great day!')
		}
		else if (newMessage.includes('goodbye')) {
			addResponseMessage('Take care!')
		}
		else if (newMessage.includes('bye')) {
			addResponseMessage('Take care!')
		}
		else if (newMessage.includes('to whom it may')) {
			addResponseMessage('What can we help you with?')
		}
		else if (newMessage.includes('info')) {
			addResponseMessage('No problem! What info would you like?')
		}
		else if (newMessage.includes('launch')) {
			addResponseMessage('Soon! Please fill out the form above the Apple and Google Store download links to stay updated.')
		}
		else if (newMessage.includes('partner')) {
			addResponseMessage('Were excited to explore all partnership oppertunities. Please reach out to datesteady@gmail.com')
		}
		else if (newMessage.includes('press')) {
			addResponseMessage('Were excited to explore all partnership oppertunities. Please reach out to datesteady@gmail.com')
		}
		else if (newMessage.includes('contact')) {
			addResponseMessage("Please click on 'contact' in the navigation menu, and fill out the contact form. We will get back to you ASAP!")
		} else {
			addResponseMessage('Were Launching Soon! Stay updated with all of our updateds by filling out the form above the Apple store, and Google store buttons.')
		}
	}


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
										handleSignupOrLogin={this.handleSignupOrLogin}
										user={this.state.user}
										handleLogout={this.handleLogout}
									/>
									<MainHeader
										closeModal={this.closeModal}
										modalVisible={this.state.modalVisible}
										navSelection={this.state.navSelection}
										handleSignupOrLogin={this.handleSignupOrLogin}
										user={this.state.user}
										handleAddSubscriber={this.handleAddSubscriber}
										currentSub={this.currentSub}
										handleAddGameAnswers={this.handleAddGameAnswers}
										env={env}
									/>
									<Widget
										handleNewUserMessage={this.handleNewUserMessage}
										title="Help Center"
										subtitle="Speaking with Tom"
									/>
								</div>
							);
						}}
					/>
					<Route
						exact
						path="/Terms"
						render={() => {
							return (
								<div>
									<Nav />
									<TermsOfUse />
									<Footer />
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
