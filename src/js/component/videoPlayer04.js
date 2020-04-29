import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import Shuffle from "../../../img/shuffle.png";

export class VideoPlayer04 extends React.Component {
	constructor() {
		super();
		this.state = {
			isOpen: false
		};
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ isOpen: true });
	}

	render() {
		return (
			<div>
				<ModalVideo
					channel="vimeo"
					isOpen={this.state.isOpen}
					videoId="411472412"
					onClose={() => this.setState({ isOpen: false })}
				/>
				<img
					className="card-img-top"
					src={require("../../../img/shuffle.png")}
					alt="Shufflin"
					onClick={this.openModal}></img>
			</div>
		);
	}
}
