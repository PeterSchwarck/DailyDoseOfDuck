import React from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import ComeAtMeBro from "../../../img/ComeAtMeBro.png";

export class VideoPlayer08 extends React.Component {
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
					videoId="413238734"
					onClose={() => this.setState({ isOpen: false })}
				/>
				<img className="card-img-top" src={ComeAtMeBro} alt="Come at me bro" onClick={this.openModal}></img>
			</div>
		);
	}
}
