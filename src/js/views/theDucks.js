import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class TheDucks extends React.Component {
	render() {
		return (
			<div className="theDucks">
				<div className="rowOne">
					<div className="col-12 col-lg-8 col-md-10 mx-auto">
						<div>
							<h1>The ducks go here</h1>
						</div>
					</div>
				</div>
				<div className="rowTwo">
					<div className="col-12 col-lg-8 col-md-10 mx-auto">
						<div className="card-deck">
							<div className="card">
								<img className="card-img-top" src="..." alt="Card image cap"></img>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
							<div className="card">
								<img className="card-img-top" src="..." alt="Card image cap"></img>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This card has supporting text below as a natural lead-in to additional content.
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
								`
							</div>
							<div className="card">
								<img className="card-img-top" src="..." alt="Card image cap"></img>
								<div className="card-body">
									<h5 className="card-title">Card title</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This card has even longer content than the first to show
										that equal height action.
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
