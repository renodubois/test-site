import React from "react";

function LiveBanner(props) {
	if (props.isLive) {
		return (
			<div className="live-banner">
				<a href="https://twitch.tv/RenoInMO" target="_blank">
					<div>Reno is live right now on Twitch!</div>
				</a>
			</div>
		);
	}
	return null;
}

export default LiveBanner;
