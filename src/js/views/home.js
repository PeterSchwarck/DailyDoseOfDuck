import React from "react";
import "../../styles/home.scss";
import FeaturedDuck from "../../../img/FeaturedDuck2.jpg";

import { VideoPlayer } from "../component/videoPlayer";

export const Home = () => (
	<div className="homeContainer">
		<div className="row">
			<div className="col-12 col-lg-8 col-md-10 mx-auto">
				<div>
					<img src={FeaturedDuck} className="featuredDuck"></img>
				</div>
				<VideoPlayer />
			</div>
		</div>
	</div>
);
