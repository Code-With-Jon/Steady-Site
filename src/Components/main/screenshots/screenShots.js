import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

export default class ScreenShots extends React.Component {
	render() {
		return (
			<div >
				{/* <h1 style={{ color: "white" }}>ScreenShots</h1> */}
				<div id="Screenshots" style={{ backgroundColor: 'white', height: '500px', width: '100%' }}>
					<AutoplaySlider
						play={true}
						cancelOnInteraction={false} // should stop playing on user interaction
						interval={4000}
						style={{ height: '100%' }}
						bullets={false}
					>
						<div style={{ backgroundColor: 'white' }}><img style={{ height: '500px' }} src='https://i.imgur.com/5v8TLWe.jpg'></img></div>
						<div style={{ backgroundColor: 'white' }}><img style={{ height: '500px' }} src="https://i.imgur.com/oZ0UbjO.png"></img></div>
						<div style={{ backgroundColor: 'white' }}><img style={{ height: '500px' }} src="https://i.imgur.com/eavqph5.png"></img></div>
						<div style={{ backgroundColor: 'white' }}><img style={{ height: '500px' }} src="https://i.imgur.com/CLzU5wK.png"></img></div>
					</AutoplaySlider>
				</div>
			</div>
		);
	}
}

