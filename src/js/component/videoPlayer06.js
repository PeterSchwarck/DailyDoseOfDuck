import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import DuckFamous from "../../../img/duckFamous.png";

export class VideoPlayer06 extends React.Component {
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
					videoId="411473425"
					onClose={() => this.setState({ isOpen: false })}
				/>
				<img className="card-img-top" src={DuckFamous} alt="Duck famous" onClick={this.openModal}></img>
			</div>
		);
	}
}
