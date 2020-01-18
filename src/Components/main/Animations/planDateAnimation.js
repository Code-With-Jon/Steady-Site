import React from "react";
import Lottie from "react-lottie";
import planDateAnimation from "./JSONFiles/steady-planning-logistics.json";
import { Link } from "react-router-dom";

export default class PlanDateAnimation extends React.Component {
	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: planDateAnimation,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice"
			}
		};
		return (
			<div className="animation-body" style={{}}>
				<div style={{}}>
					<Lottie
						options={defaultOptions}
						height={300}
						width={"100%"}
						style={{}}
					/>
				</div>
			</div>
		);
	}
}
