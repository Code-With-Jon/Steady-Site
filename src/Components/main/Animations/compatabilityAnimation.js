import React from "react";
import Lottie from "react-lottie";
import compatabilityAnimation from "./JSONFiles/steady-compatability.json";
import { Link } from "react-router-dom";

export default class CompatabilityAnimation extends React.Component {
	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: compatabilityAnimation,
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
