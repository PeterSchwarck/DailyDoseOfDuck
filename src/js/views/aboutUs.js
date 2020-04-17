import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

import "../../styles/aboutUs.scss";

import SeniorMustache from "../../../img/seniorMustache.jpg";

export class AboutUs extends React.Component {
	render() {
		return (
			<div className="aboutUsDiv">
				<Navbar />

				<div className="row">
					<div className="column left">
						<img src={SeniorMustache} className="pic"></img>
					</div>
					<div className="column right">
						<div className="jumbotron jumbotron-fluid">
							<div className="container">
								<h3 className="display-4">Bird Nerd</h3>
								<p className="lead">
									Dedicated to all the pretty birds, and the ugly ones too. To me your pretty anyway.
								</p>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
