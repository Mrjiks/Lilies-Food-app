import React from 'react';
import profileicon from '../components/assets/profileownerimg.svg';

function Greet(hours) {
	let greet;
	hours = new Date().getHours();
	if (hours < 12) greet = 'Good Morning';
	else if (hours >= 12 && hours <= 17) greet = 'Good Afternoon';
	else if (hours >= 17 && hours <= 24) greet = 'Good Evening';
	return greet;
}

const DashboardHeader = () => {
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};
	let currentTime = new Date().toLocaleString('en-US', options);
	let user = JSON.parse(localStorage.getItem('user'));

	return (
		<div className="NavHeader">
			<div className="dashboardheader-text NavHeader-margin">
				<h1>
					{Greet()}, {user.name} !
				</h1>

				<h5>{currentTime}</h5>

				<h4>What delicious meal are you craving today?</h4>
			</div>
			<div className="dashboardheader-logo NavHeader-margin">
				<img src={profileicon} alt="profile" />
			</div>
		</div>
	);
};

export default DashboardHeader;
