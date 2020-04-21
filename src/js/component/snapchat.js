import PropTypes from "prop-types";
import React from "react";
import SnapchatImage from "../../../img/snap.jpg";

class Snapchat extends React.Component {
	render() {
		return (
			<div className="snapchatModal">
				<div
					className={"modal fade " + (this.props.show ? "show" : "")}
					id="exampleModal"
					role="dialog"
					style={{ display: this.props.show ? "block" : "", background: "rgba(0,0,0,0.5)" }}>
					<div className="modal-dialog" role="document">
						{this.props.show ? (
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">
										Connect on Snapchat
									</h5>
									<button
										onClick={() => this.props.onClose()}
										type="button"
										className="closeDonate"
										data-dismiss="modal"
										aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body">Subcribe to get your #DailyDoseOfDuck </div>
								<div className="qrCode">
									<img src={SnapchatImage} alt="Connect on Snapchat" height="" width=""></img>
								</div>
								<div className="modal-footer">
									<button
										onClick={() => this.props.onClose()}
										type="button"
										className="btn btn-secondary"
										data-dismiss="modal">
										Close
									</button>
								</div>
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Snapchat;

Snapchat.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool
};
