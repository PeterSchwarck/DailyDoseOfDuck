import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { VideoPlayer01 } from "../component/videoPlayer01";
import { VideoPlayer02 } from "../component/videoPlayer02";
import { VideoPlayer03 } from "../component/videoPlayer03";
import { VideoPlayer04 } from "../component/videoPlayer04";
import { VideoPlayer05 } from "../component/videoPlayer05";
import { VideoPlayer06 } from "../component/videoPlayer06";
import { VideoPlayer07 } from "../component/videoPlayer07";
import { VideoPlayer08 } from "../component/videoPlayer08";
import "../../styles/demo.scss";

export class TheDucks extends React.Component {
	render() {
		return (
			<div className="theDucks">
				<div className="rowOne">
					<div className="col-12 col-lg-8 col-md-10 mx-auto">
						<div>
							<h2 className="title">Overdose on ducks</h2>
						</div>
					</div>
				</div>
				<div className="rowTwo">
					<div className="col-12 col-lg-8 col-md-10 mx-auto">
						<div className="card-deck">
							<div className="card">
								<VideoPlayer01 />
								<div className="card-body">
									<h5 className="card-title">Big Poppa</h5>
									<p className="card-text">A T-bone steak, cheese, eggs, and Welch&apos;s grape.</p>
									<p className="card-text">
										<small className="text-muted">Last updated April 23, 2020</small>
									</p>
								</div>
							</div>
							<div className="card">
								<VideoPlayer02 />
								<div className="card-body">
									<h5 className="card-title">Strut Your Stuffing</h5>
									<p className="card-text">Swagger</p>
									<p className="card-text">
										<small className="text-muted">Last updated April 23, 2020</small>
									</p>
								</div>
							</div>
							<div className="card">
								<VideoPlayer03 />
								<div className="card-body">
									<h5 className="card-title">Roll Out!</h5>
									<p className="card-text">Making an entrance</p>
									<p className="card-text">
										<small className="text-muted">Last updated April 23, 2020</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rowThree">
					<div className="col-12 col-lg-8 col-md-10 mx-auto">
						<div className="card-deck">
							<div className="card">
								<VideoPlayer04 />
								<div className="card-body">
									<h5 className="card-title">Shufflin</h5>
									<p className="card-text">Everyday I&apos;m shufflin</p>
									<p className="card-text">
										<small className="text-muted">Last updated April 29, 2020</small>
									</p>
								</div>
							</div>
							<div className="card">
								<VideoPlayer05 />
								<div className="card-body">
									<h5 className="card-title">Prepare for Battle</h5>
									<p className="card-text">What?!</p>
									<p className="card-text">
										<small className="text-muted">Last updated April 29, 2020</small>
									</p>
								</div>
							</div>
							<div className="card">
								<VideoPlayer06 />
								<div className="card-body">
									<h5 className="card-title">Duck Famous</h5>
									<p className="card-text">Ducks on the red carpet</p>
									<p className="card-text">
										<small className="text-muted">Last updated April 29, 2020</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rowFour">
					<div className="col-12 col-lg-8 col-md-10 mx-auto">
						<div className="card-deck">
							<div className="card">
								<VideoPlayer07 />
								<div className="card-body">
									<h5 className="card-title">Big Pimpin</h5>
									<p className="card-text">A whole mood</p>
									<p className="card-text">
										<small className="text-muted">Last updated April 29, 2020</small>
									</p>
								</div>
							</div>
							<div className="card">
								<VideoPlayer08 />
								<div className="card-body">
									<h5 className="card-title">Come at me bro!</h5>
									<p className="card-text">Savage AF</p>
									<p className="card-text">
										<small className="text-muted">Last updated April 29, 2020</small>
									</p>
								</div>
							</div>
							<div className="card"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
