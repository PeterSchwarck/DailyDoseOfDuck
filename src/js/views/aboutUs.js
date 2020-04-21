import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/aboutUs.scss";

import SeniorMustache from "../../../img/seniorMustache.jpg";

export class AboutUs extends React.Component {
	render() {
		return (
			<div className="aboutUsDiv">
				<div className="row">
					<div className="column left">
						<img className="aboutUsPic" src={SeniorMustache}></img>
					</div>
					<div className="column right">
						<div className="jumbotron jumbotron-fluid">
							<div className="container">
								<h3 className="display-4">Bird Nerd</h3>
								<p className="lead">
									Dedicated to all the pretty birds, and the ugly ones too. To me your pretty anyway.
								</p>
								<hr className="my-4"></hr>
								<p className="aboutText">
									This site was built with HTML, CSS, and JavaScript in the React framework. The site
									is hosted by Nginx on a Raspberry Pi 4 web server.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
