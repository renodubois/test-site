import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo_png.png";

function Navigation(props) {
	return (
		<div className="nav-bar">
			<div className="logo">
				<Link to="/">
					<img src={logo} alt="RenoInMO's Logo" height="100" width="100" />
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/schedule">
					<span className="nav-item-text">schedule</span>
				</Link>
			</div>
			<div className="nav-item">
				<Link to="/contact">
					<span className="nav-item-text">contact</span>
				</Link>
			</div>
			<a className="social-media-icon twitch" href="https://twitch.tv/RenoInMO" target="_blank" />
			<a className="social-media-icon twitter" href="https://twitter.com/RenoInMO" target="_blank" />
		</div>
	);
}

export default Navigation;
