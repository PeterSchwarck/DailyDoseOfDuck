import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends React.Component {
	render() {
		return (
			<div className="player-wrapper">
				<ReactPlayer
					className="react-player"
					url="https://vimeo.com/408983110"
					playing
					width="100%"
					height="100%"
					// margin-top="50px"
					// margin-bottom="50px"
				/>
			</div>
		);
	}
}

export default VideoPlayer;
