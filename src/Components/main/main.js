import React from "react";
import { Row, Col, Container } from "react-reflex-grid";
import StayUpdated from "./StayUpdated";
import CoupleBikeAnimation from "./Animations/coupleAnimation";
import Modal from "react-awesome-modal";
import SignUpForm from "../signup/form";
import LogInForm from "../login/loginForm";
import Features from "./Features/features";
import ScreenShots from "./screenshots/screenShots";

export default class MainHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navSelection: this.props.navSelection
		};
	}

	render() {
		return (
			<>
				{/* Modal */}
				<section>
					{/* <h1>Sign Up</h1>
                <input type="button" value="Open" onClick={() => this.openModal()} /> */}
					<Modal
						visible={this.props.modalVisible}
						width="400"
						height="300"
						effect="fadeInUp"
						onClickAway={() => this.props.closeModal()}
					>
						<div>
							{this.props.navSelection === "Sign Up" ? (
								<SignUpForm />
							) : (
								<LogInForm />
							)}

							<button onClick={() => this.props.closeModal()}>Close</button>
						</div>
					</Modal>
				</section>

				<Row align="center">
					<Col size={8}>
						<h1 style={{ color: "white" }}>Stop Swiping. Get Serious</h1>
						<StayUpdated />
						{/* Apple Store Logo */}
						<a href="/">
							<img
								style={{
									paddingTop: "20px",
									marginRight: "5%",
									height: "5%",
									width: "25%"
								}}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Available_on_the_App_Store_%28black%29.png/640px-Available_on_the_App_Store_%28black%29.png"
							></img>
						</a>
						{/* Google Store Logo */}
						<a href="/">
							<img
								style={{
									paddingTop: "20px",
									marginTop: "5px",
									height: "5%",
									width: "25%"
								}}
								src="https://www.arthalogistics.com/wp-content/uploads/2018/08/adnroid.png"
							></img>
						</a>
					</Col>
					<Col size={4}>
						<img
							src="../../../assets/PicApp.png"
							// style={{ marginLeft: "10%" }}
						></img>
					</Col>
				</Row>
				<div
					style={{
						marginTop: "5%",
						display: "flex",
						justifyContent: "flex-end"
					}}
				></div>

				<CoupleBikeAnimation />
				<Features />
				<ScreenShots />
			</>
		);
	}
}
