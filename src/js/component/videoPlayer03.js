import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import RollOut from "../../../img/RollOut.png";

export class VideoPlayer03 extends React.Component {
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
					videoId="408983110"
					onClose={() => this.setState({ isOpen: false })}
				/>
				<img className="card-img-top" src={RollOut} alt="Roll Out!" onClick={this.openModal}></img>
			</div>
		);
	}
}
