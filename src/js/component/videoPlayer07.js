import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import BigPimpin from "../../../img/BigPimpin.png";

export class VideoPlayer07 extends React.Component {
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
					videoId="413235738"
					onClose={() => this.setState({ isOpen: false })}
				/>
				<img className="card-img-top" src={BigPimpin} alt="Big Pimpin" onClick={this.openModal}></img>
			</div>
		);
	}
}
