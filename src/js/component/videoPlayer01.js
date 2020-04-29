import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import BigPoppa from "../../../img/BigPoppa.png";

export class VideoPlayer01 extends React.Component {
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
					videoId="410713787"
					onClose={() => this.setState({ isOpen: false })}
				/>
				<img className="card-img-top" src={BigPoppa} alt="Big Poppa" onClick={this.openModal}></img>
			</div>
		);
	}
}
