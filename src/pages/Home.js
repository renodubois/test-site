import React from "react";
import me from "../me.jpg";

function Home() {
	return (
		<div className="main-content">
			<div className="about-content">
				<h1>Hi there! I'm Reno, a development-focused content creator.</h1>
				<p className="about-body">
					I live in St. Louis MO, and am a full stack dev by day. I am interested in web development of all
					kinds, but I especially enjoy working with open source software.
					<br />
					<br />
					Currently, I’m helping to create a set of data analytics tools for St. Louis City election results
					(and eventually other cities), you can view the project{" "}
					<a href="https://github.com/miec-stl">here</a>.
					<br />
					<br />
					I also have 2 cats (Sunny and Korok) and a husky (Juno) that make occasional appearances on streams!
					<br />
					<br />
					Come say hello on one of our <a href="https://twitch.tv/RenoInMO">Twitch Streams</a> or talk to me
					on <a href="https://twitter.com/RenoInMO">Twitter</a>!
				</p>
			</div>
			<div className="about-image">
				<img src={me} />
			</div>
		</div>
	);
}

export default Home;
