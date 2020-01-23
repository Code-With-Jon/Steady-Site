import React from "react";
import userService from '../../utils/userService';

export default class SignUpForm extends React.Component {

	state = {
		name: '',
		email: '',
		password: '',
		passwordConf: '',
		errMessage: null
	};




	handleChange = (e) => {
		this.props.updateMessage('');
		this.setState({
			// Using ES2015 Computed Property Names
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		}
		try {
			await userService.signup(payload)
			// Let <App> know a user has signed up!
			this.props.handleSignupOrLogin();
			// Successfully signed up - show GamePage
			this.props.closeModal()
		} catch (err) {
			// Invalid user data (probably duplicate email)
			this.setState({ errMessage: err.message })
			// this.props.updateMessage(err.message);
		}
	}

	isFormInvalid() {
		return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
	}

	render() {
		return (
			<div >
				<header className="header-footer" style={{ color: 'rebeccapurple', fontSize: 'x-large' }}>Sign Up</header>
				{this.state.errMessage ? <p style={{ color: 'red' }}>{this.state.errMessage}</p> : ''}
				<form className="form-horizontal" onSubmit={this.handleSubmit} >
					<div className="form-group">
						<div className="col-sm-12">
							<input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12">
							<input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12">
							<input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12">
							<input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-12 text-center">
							<button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;

						</div>
					</div>
				</form>
			</div>
		);
	}
}
