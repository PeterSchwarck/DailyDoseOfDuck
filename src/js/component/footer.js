import React, { Component } from "react";

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footerBar">
				<section className="lab_social_icon_footer">
					<div className="container">
						<div className="text-center center-block">
							<a href="mailto:#">
								<i className="fa fa-envelope-square fa-3x social-fb"></i>
							</a>
							<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-instagram fa-3x social-gp"></i>
							</a>
							<a href="https://www.snapchat.com//" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-snapchat-square fa-3x social-em"></i>
							</a>
						</div>
						<section>
							<div className="footerDiv">
								<p></p>
								Made with <i className="fa fa-heart text-danger" /> by #DailyDoseOfDuck
							</div>
						</section>
					</div>
				</section>
			</footer>
		);
	}
}
