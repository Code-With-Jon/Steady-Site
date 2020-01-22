import React, { useState } from "react";
import FeaturedBox from "./featuredBox";
import AvaililbiltyAnimation from "../Animations/availabilityAnimation";
import CompatabilityAnimation from "../Animations/compatabilityAnimation";
import PlanDateAnimation from "../Animations/planDateAnimation";
import SecurityAnimation from "../Animations/securityAnimation";
export default class Features extends React.Component {
	render() {
		return (
			<div
				className="features-body"
				id="Features"
				style={{ backgroundColor: "#f6f6f6", paddingTop: "2px" }}
			>
				<div
					className="feature-title"
					style={{ height: "50px", width: "100%" }}
				>
					<h4 style={{ color: 'rebeccapurple', fontSize: 'x-large' }}>Features</h4>
				</div>
				<div
					style={{
						display: "flex",
						overflowX: "auto",
						overflowY: "hidden",
						flexWrap: "nowrap",
						width: "100vw"
					}}
				>
					<div style={{ display: "flex", flexDirection: "row" }}>
						{features.map((feature, idx) => {
							return (
								<FeaturedBox
									key={idx}
									title={feature.title}
									image={feature.image}
									text={feature.text}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

const features = [
	{
		title: "Availilbilty",
		image: <AvaililbiltyAnimation />,
		text: "Enter your availability"
	},
	{
		title: "Compatibility",
		image: <CompatabilityAnimation />,
		text: "Match based on compatibility"
	},
	{
		title: "Date Logistics",
		image: <PlanDateAnimation />,
		text: "We take care of the details"
	},
	{
		title: "Security",
		image: <SecurityAnimation />,
		text: "Data security is a top priority"
	}
];
