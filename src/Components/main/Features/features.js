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
				style={{ backgroundColor: "white", paddingTop: "2px" }}
			>
				<div
					className="feature-title"
					style={{ height: "50px", width: "100%" }}
				>
					<h4>Features</h4>
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
		text: "This is Text"
	},
	{
		title: "Compatibility",
		image: <CompatabilityAnimation />,
		text: "This is Text"
	},
	{
		title: "Date Logistics",
		image: <PlanDateAnimation />,
		text: "This is Text"
	},
	{
		title: "Security",
		image: <SecurityAnimation />,
		text: "This is Text"
	}
];
