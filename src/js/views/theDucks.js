import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

import "../../styles/demo.scss";

export class TheDucks extends React.Component {
	render() {
		return (
			<div className="theDucks">
				<Navbar />
				<div>
					<h1>The ducks go here</h1>
				</div>
				<Footer />
			</div>
		);
	}
}
