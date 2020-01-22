import React from "react";
import { Row, Col, Container } from "react-reflex-grid";

export default class StayUpdatedForm extends React.Component {

	state = {
		invalidForm: true,
		formData: {
			name: '',
			email: ''
		},
		currentSub: this.props.currentSub
	};


	formRef = React.createRef();

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ currentSub: true })
		this.props.handleAddSubscriber(this.state.formData);
	};

	handleChange = e => {
		const formData = { ...this.state.formData, [e.target.name]: e.target.value };
		this.setState({
			formData,
			invalidForm: !this.formRef.current.checkValidity()
		});
	};



	render() {


		return (
			<div style={{ width: "58%", marginLeft: "19%" }}>
				<div className="form-container">
					<p style={{ color: "white" }}>
						{this.state.currentSub ? "You've Subscribed" :
							'Fill Out Form To Stay Updated On Steady'
						}
					</p>
					<form className="sub-form" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
						<div className="input-layout">
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Enter Name"
								className="form-input"
								value={this.state.formData.name}
								onChange={this.handleChange}
								required
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter Email"
								className="form-input"
								value={this.state.formData.email}
								onChange={this.handleChange}
								required
							/>
							<input
								value="Submit"
								id="submit"
								value="Subscribe"
								className="sub-btn"
								type="submit"
								disabled={this.state.invalidForm}
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
