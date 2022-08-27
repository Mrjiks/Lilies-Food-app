import React from 'react';
import profileicon from '../components/assets/profileownerimg.svg';

const DashboardHeader = () => {
	let currentTime = new Date().getDay();
	let user = JSON.parse(localStorage.getItem('user'));
	return (
		<div className="NavHeader">
			<div className="dashboardheader-text NavHeader-margin">
				<h1>Welcome, {user.name} !</h1>
				<p>What delicious meal are you craving today?</p>
			</div>
			<div className="dashboardheader-logo NavHeader-margin">
				<img src={profileicon} alt="profile" />
			</div>
		</div>
	);
};

export default DashboardHeader;
