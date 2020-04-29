import React, { Component } from "react";
import Snapchat from "../component/snapchat.js";

export class Footer extends React.Component {
	constructor() {
		super();
		this.state = {
			showSnapchat: false
		};
	}

	toggleSnapchatModal() {
		this.setState(prevState => ({
			showSnapchat: !this.state.showSnapchat
		}));
	}

	render() {
		return (
			<div>
				<footer className="footerBar">
					<section className="lab_social_icon_footer">
						<div className="container">
							<div className="text-center center-block">
								<a href="mailto:peterschwarck@gmail.com">
									<i className="fa fa-envelope-square fa-3x social-fb"></i>
								</a>
								<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
									<i className="fab fa-instagram fa-3x social-gp"></i>
								</a>
								<a>
									<a
										className="fab fa-snapchat-square fa-3x social-em"
										onClick={() => this.toggleSnapchatModal()}></a>
								</a>
							</div>
							<section>
								<div className="footerDiv">
									<p></p>
									Made with <i className="fa fa-heart text-danger" /> by #DailyDoseOfDuck
								</div>
							</section>
						</div>
						<div></div>
					</section>
				</footer>
				<Snapchat show={this.state.showSnapchat} onClose={() => this.setState({ showSnapchat: false })} />
			</div>
		);
	}
}
