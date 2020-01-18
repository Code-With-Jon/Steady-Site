import React from "react";

export default class SignUpForm extends React.Component {
	render() {
		return (
			<div className="signup-form" style={{ display: "flex" }}>
				<form action="" method="POST">
					<input type="text" placeholder="name" />
					<input type="password" placeholder="password" />
					<input type="email" placeholder="email" />
					<input type="submit" value="Sign Up" />
				</form>
			</div>
		);
	}
}
