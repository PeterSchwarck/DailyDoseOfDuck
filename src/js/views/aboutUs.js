import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/aboutUs.scss";

import SeniorMustache from "../../../img/seniorMustache.jpg";

export class AboutUs extends React.Component {
	render() {
		return (
			<div className="aboutUsDiv">
				<div className="row">
					<div className="col-12 col-lg-8 col-md-10 mx-auto">
						<div className="jumbotron text-center hoverable p-4 jumboContainer">
							<div className="row">
								<div className="col-md-4 offset-md-1 mx-3 my-3">
									<div className="view overlay">
										<img
											src={SeniorMustache}
											className="img-fluid"
											alt="Sample image for first version of blog listing"></img>
										<a>
											<div className="mask rgba-white-slight"></div>
										</a>
									</div>
								</div>
								<div className="col-md-7 text-md-left ml-3 mt-3">
									<a href="#!" className="green-text"></a>
									<h4 className="h4 mb-4">Bird Nerd</h4>

									<p className="font-weight-normal">
										Dedicated to all the pretty birds, and the ugly ones too. To me you&apos;re
										pretty anyway.
									</p>
									<p className="font-weight-normal bottomPart">
										This site was built with HTML, CSS, and Javascript in React framework.
										DailyDoseofDuck is hosted on an Nginx webserver created from a Raspberry Pi 4.
									</p>
									<a
										className="btn btn-success"
										href="https://pimylifeup.com/raspberry-pi-nginx/"
										target="_blank"
										rel="noopener noreferrer">
										Read more
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
