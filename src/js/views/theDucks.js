import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import Carousel from "../component/carousel.js";

import "../../styles/demo.scss";

export class TheDucks extends React.Component {
	render() {
		return (
			<div className="theDucks">
				<div>
					<Carousel />
				</div>
			</div>
		);
	}
}
