import React from "react";
import Lottie from "react-lottie";
import CoupleAnimation from "./JSONFiles/coupleAnimation.json";
import { Link } from "react-router-dom";

export default class CoupleBikeAnimation extends React.Component {
	render() {
		const defaultOptions = {
			loop: true,
			autoplay: true,
			animationData: CoupleAnimation,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid slice"
			}
		};
		return (
			<div className="animation-body" style={{}}>
				<svg
					width="100%"
					height="172"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path fill="white">
						<animate
							repeatCount="indefinite"
							fill="freeze"
							attributeName="d"
							dur="10s"
							values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
              M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
              "
						/>
					</path>
				</svg>
				<div
					style={{
						background: "white",
						marginTop: "-5px",
						marginLeft: "auto",
						width: "70%"
						// borderBottom: "4px solid rebeccapurple"
					}}
				>
					<h1
						style={{
							color: "rebeccapurple",
							width: "100%",
							textAlign: "left",
							paddingLeft: "12vw"
						}}
					>
						Play Compatibility Game
					</h1>
					<Lottie
						options={defaultOptions}
						height={400}
						width={400}
						style={{ margin: "", marginLeft: "auto" }}
					/>
				</div>
			</div>
		);
	}
}
