import React from "react";
import { streamData } from "../streamData";

function UpcomingStreamBadge(props) {
	const { date, time, canceled, specialText } = props;
	const formattedTime = "@ " + time + " CST";
	// I always stream at 7pm, which is going to be the previous day in GMT - so we're advancing forward a day
	const streamDate = new Date(date);
	// const strea
	let formattedDate = streamDate.toDateString().toLowerCase();
	const streamYear = " " + streamDate.getFullYear();
	const splitDate = formattedDate.split(streamYear);
	formattedDate = splitDate[0];
	let mainClassNames = "stream-badge-main";
	if (canceled) {
		// TODO: make this change a CSS class instead
		mainClassNames = mainClassNames + " stream-badge-canceled";
	}
	const formattedDateDiv = <div className="stream-badge-date">{formattedDate}</div>;
	const formattedTimeDiv = <div className="stream-badge-time">{formattedTime}</div>;
	const badgeMainSection = (
		<div className={mainClassNames}>
			{formattedDateDiv} {formattedTimeDiv}
		</div>
	);

	let badgeFooter = null;
	if (specialText) {
		badgeFooter = <div className="stream-badge-footer">{specialText}</div>;
	}
	return (
		<div className="stream-badge">
			{badgeMainSection}
			<br />
			{badgeFooter}
		</div>
	);
}

const getBadgesToDisplay = (data, nextStreamOnly = false) => {
	const currentDate = new Date();
	// Months are zero index in JS date objects
	let currentMonth = currentDate.getMonth() + 1;
	if (currentMonth < 10) {
		currentMonth = "0" + currentMonth;
	}
	let currentDay = currentDate.getDate();
	if (currentDay < 10) {
		currentDay = "0" + currentDay;
	}
	const dateString = currentMonth + "-" + currentDay + "-" + currentDate.getFullYear();
	const nextStream = data.findIndex((val) => val.date >= dateString);
	let upperBound = nextStream + 3;
	if (nextStreamOnly) {
		upperBound = nextStream + 1;
	}
	return data.slice(nextStream, upperBound);
};

function Schedule() {
	const badgeData = getBadgesToDisplay(streamData);
	const scheduleBadges = badgeData.map((data, index) => <UpcomingStreamBadge key={index} {...data} />);
	return (
		<div className="main-content" style={{ minHeight: "65%" }}>
			{scheduleBadges}
		</div>
	);
}

export default Schedule;
