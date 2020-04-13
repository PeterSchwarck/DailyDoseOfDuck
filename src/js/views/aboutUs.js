import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/aboutUs.scss";

import SeniorMustache from "../../../img/seniorMustache.jpg";

export class AboutUs extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="column left">
					<img src={SeniorMustache} className="pic"></img>
				</div>
				<div className="column right">
					<h3>Bird Nerd</h3>
					<p>Dedicated to all the pretty birds, and the ugly ones too. To me your pretty anyway.</p>
				</div>
			</div>
		);
	}
}
