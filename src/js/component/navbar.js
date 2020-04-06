import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div classNameNameName="navbarDiv">
			<nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
				<a href="#" className="navbar-brand">
					#DailyDoseOfDuck
				</a>
				<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarCollapse">
					<div className="navbar-nav">
						<a href="#" className="nav-item nav-link active">
							Home
						</a>
						<a href="#" className="nav-item nav-link">
							Show me the Ducks
						</a>
						<a href="#" className="nav-item nav-link">
							Bird Nerd
						</a>
					</div>
					<form className="form-inline ml-auto">
						<input type="text" className="form-control mr-sm-2" placeholder="Search" />
						<button type="submit" className="btn btn-outline-light">
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};
