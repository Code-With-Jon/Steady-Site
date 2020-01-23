import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
import { HashLink as Link } from "react-router-hash-link";

export default class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: this.props.modalVisible,
			navSelection: this.props.navSelection
		};
	}

	handleSignUpClick = () => {
		this.setState({ modalVisible: true });
		this.props.openSignUpModal();
	}

	handleLogInClick = () => {
		this.setState({ modalVisible: true });
		this.props.openLogInModal();
	}

	handleLogOutClick = () => {
		this.props.handleLogout()
	}

	render() {
		return (
			// <Router>
			<header
				style={{
					height: "10vh",
					width: "100vw",
					position: "sticky",
					top: 0,
					left: 0,
					right: 0,
					zIndex: 2
				}}
			>
				<nav
					className="header-nav"
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						height: "100%"
					}}
				>
					<div
						className="logo-container"
						style={{
							flexWrap: "nowrap",
							paddingLeft: "2%",
							height: "100%"
						}}
					>
						<a
							className="logo-wrapper"
							href="/"
							style={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<img
								src="https://developer.apple.com/swift/images/swift-og.png"
								style={{
									height: "80%",
									objectFit: "contain"
								}}
							/>
						</a>
					</div>
					<div
						className="container"
						style={{
							display: "inline-flex",
							padding: "10px",
							minWidth: "380px",
							width: "30%",
							justifyContent: "space-between",
							marginLeft: "58vw",
							marginRight: "10px"
						}}
					>
						<Link smooth className="nav-link" to="/#Home">
							Home
						</Link>
						<Link smooth className="nav-link" to="/#Features">
							Features
						</Link>
						<Link smooth className="nav-link" to="/#Screenshots">
							Screenshots
						</Link>
						<Link smooth className="nav-link" to="/#Team">
							Team
						</Link>
						<Link smooth className="nav-link" to="/#Contact" style={{ marginRight: '25px' }}>
							Contact
						</Link>
					</div>
					<div style={{ marginRight: "30px" }}>
						<Menu>
							<Dropdown text={this.props.user ? this.props.user.name : "Account"} pointing className="link item">

								<Dropdown.Menu>

									{this.props.user ?
										<Dropdown.Item onClick={() => this.handleLogOutClick()}>
											Log Out
											</Dropdown.Item>
										:
										<>
											<Dropdown.Item onClick={() => this.handleSignUpClick()}>
												Sign Up
											</Dropdown.Item>
											<Dropdown.Item onClick={() => this.handleLogInClick()}>
												Log In
											</Dropdown.Item>
										</>
									}

								</Dropdown.Menu>

							</Dropdown>
						</Menu>
					</div>
				</nav>
			</header>
			// </Router>
		);
	}
}
