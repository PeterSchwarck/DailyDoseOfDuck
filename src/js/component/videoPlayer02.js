import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import StrutYourStuffing from "../../../img/StrutYourStuffing.png";

export class VideoPlayer02 extends React.Component {
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
					videoId="410714000"
					onClose={() => this.setState({ isOpen: false })}
				/>
				<img
					className="card-img-top"
					src={StrutYourStuffing}
					alt="Strut Your Stuffing"
					onClick={this.openModal}></img>
			</div>
		);
	}
}
