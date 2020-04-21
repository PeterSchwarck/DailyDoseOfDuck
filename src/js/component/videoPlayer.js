import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";

export class VideoPlayer extends React.Component {
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
				<button className="buttonClass" onClick={this.openModal}>
					Click Here
				</button>
			</div>
		);
	}
}
