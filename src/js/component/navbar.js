import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		const collapsed = this.state.collapsed;
		const classOne = collapsed ? "collapse navbar-collapse" : "collapse navbar-collapse show";
		const classTwo = collapsed
			? "navbar-toggler navbar-toggler-right collapsed"
			: "navbar-toggler navbar-toggler-right";

		return (
			<div className="navbarDiv">
				<nav className="navbar sticky-top navbar navbar-dark styleElement">
					<Link className="navbar-brand" to="/">
						#DailyDoseOfDuck
					</Link>
					<button
						onClick={this.toggleNavbar}
						className={`${classTwo}`}
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className={`${classOne}`} id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li onClick={this.toggleNavbar} className="nav-item">
								<Link className="nav-link" to="/">
									Feature Duck
								</Link>
							</li>
							<li onClick={this.toggleNavbar} className="nav-item">
								<Link className="nav-link" to="/theducks">
									Show Me More Ducks
								</Link>
							</li>
							<li onClick={this.toggleNavbar} className="nav-item">
								<Link className="nav-link" to="/aboutUs">
									About Us
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

// export const Navbar = () => {
// 	return (
// 		<div classNameNameName="navbarDiv">
// 			<nav className="navbar navbar-dark bg-dark sticky-top">
// 				<a href="#" className="navbar-brand">
// 					#DailyDoseOfDuck
// 				</a>
// 				<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
// 					<span className="navbar-toggler-icon" />
// 				</button>

// 				<div className="collapse navbar-collapse" id="navbarCollapse">
// 					<div className="navbar-nav">
// 						<ul className="navbar-nav mr-auto">
// 							<li className="nav-item">
// 								<Link to="/" className="nav-link" href="#">
// 									Home
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link to="theDucks" className="nav-link" href="#">
// 									Show me more Ducks
// 								</Link>
// 							</li>
// 							<li className="nav-item">
// 								<Link to="aboutUs" className="nav-link" href="#">
// 									Bird Nerd
// 								</Link>
// 							</li>
// 						</ul>
// 						<span className="navbar-text"></span>
// 					</div>
// 					<form className="form-inline ml-auto">
// 						<input type="text" className="form-control mr-sm-2" placeholder="Search" />
// 						<button type="submit" className="btn btn-outline-light">
// 							Search
// 						</button>
// 					</form>
// 				</div>
// 			</nav>
// 		</div>
// 	);
// };
