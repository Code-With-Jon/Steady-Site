import React from "react";
import { Row, Col, Container } from "react-reflex-grid";

export default class StayUpdatedForm extends React.Component {
	render() {
		return (
			<div style={{ width: "70%", marginLeft: "15%" }}>
				<div className="form-container">
					<p style={{ color: "white" }}>
						Fill Out Form To Stay Updated On Steady
					</p>
					<form className="sub-form">
						<div className="input-layout">
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Enter Name"
								className="form-input"
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter Email"
								className="form-input"
							/>
							<input
								type="submit"
								value="Submit"
								id="submit"
								value="Subscribe"
								className="sub-btn"
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
