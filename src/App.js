import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import LiveBanner from "./LiveBanner";

function App() {
	const [isLive, setIsLive] = useState(false);
	useEffect(() => {
		// TODO: actually figure out whether or not I'm live currently w/ a call to Twitch API
		setIsLive(false);
	}, [isLive]);

	return (
		<Router>
			<LiveBanner isLive={isLive} />
			<Navigation />
			<Route exact path="/" component={Home} />
			<Route exact path="/schedule" component={Schedule} />
			<Route exact path="/contact" component={Contact} />
		</Router>
	);
}

export default App;
