import React from 'react';
import profileicon from '../components/assets/profileownerimg.svg';

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
				<h1>Welcome, {user.name} !</h1>
				<h6>{currentTime}</h6>
				<h4>What delicious meal are you craving today?</h4>
			</div>
			<div className="dashboardheader-logo NavHeader-margin">
				<img src={profileicon} alt="profile" />
			</div>
		</div>
	);
};

export default DashboardHeader;
