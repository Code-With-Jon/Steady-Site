import React from "react";

export default class LoginForm extends React.Component {
	render() {
		return (
			<div className="login-form" style={{ display: "flex" }}>
				<form action="" method="POST">
					<input type="email" placeholder="email" />
					<input type="password" placeholder="password" />
					<input type="submit" value="Log In" />
				</form>
			</div>
		);
	}
}
