import React from "react";

export default function FeaturedBox(props) {
	return (
		<div
			style={{
				// backgroundImage: `url(${props.image})`,
				height: "100%",
				width: "100%",
				border: "2px solid silver",
				borderRadius: "1.5rem",
				padding: "2%",
				margin: "3px auto",
				flexWrap: "wrap",
				background: "white",
				boxShadow: " 0 3px 20px 0px rgba(0, 0, 0, 0.12)",
				maxWidth: "80%",
				marginLeft: "8%"
			}}
		>
			<div style={{ width: "20vw" }}>
				{props.image}

				<h4>{props.title}</h4>
				<p>{props.text}</p>
			</div>
		</div>
	);
}
