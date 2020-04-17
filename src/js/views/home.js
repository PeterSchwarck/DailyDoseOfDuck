import React from "react";
import "../../styles/home.scss";
//import MuscovyDuck from "../../img/MuscovyDuck.jpg";
import VideoPlayer from "../component/videoPlayer.js";
import { Navbar } from "../component/navbar";
import { Footer } from "../component/footer";

export const Home = () => (
	<div className="homeContainer">
		<Navbar />
		<VideoPlayer />
		<Footer />
	</div>
);
