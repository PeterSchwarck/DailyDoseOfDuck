import PropTypes from "prop-types";
import React from "react";
import { withRouter } from "react-router-dom";
import SnapImage from "../../../img/snap.jpg";

class Snapchat extends React.Component {
	render() {
		return (
			<div
				className="modal"
				tabIndex="-1"
				role="dialog"
				style={{ display: this.props.show ? "inline-block" : "none" }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Connect on Snapchat</h5>
							{this.props.onClose ? (
								<button
									onClick={() => this.props.onClose()}
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							) : (
								""
							)}
						</div>
						<div className="modal-body">
							<p>Follow us on Snapchat to get your daily dose.</p>
							<img src={SnapImage} className="snapPic"></img>
						</div>

						<div className="modal-footer">
							{this.props.onClose ? (
								<button onClick={() => this.props.onClose()} type="button" className="btn btn-primary">
									OK
								</button>
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Snapchat.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};

export default Snapchat;
