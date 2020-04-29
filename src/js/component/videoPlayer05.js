import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import Battle from "../../../img/battle.png";

export class VideoPlayer05 extends React.Component {
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
					videoId="411472804"
					onClose={() => this.setState({ isOpen: false })}
				/>
				<img className="card-img-top" src={Battle} alt="Prepare for battle" onClick={this.openModal}></img>
			</div>
		);
	}
}
