import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { TheDucks } from "./views/theDucks";
import { AboutUs } from "./views/aboutUs";
import injectContext from "./store/appContext";
// import { Navbar } from "./component/navbar";
// import { Footer } from "./component/footer";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/theDucks" component={TheDucks} />
						<Route path="/aboutUs" component={AboutUs} />
						{/* <Route path="/single/:theid" component={Single} /> */}
						<Route render={() => <h1>No ducks here!</h1>} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
