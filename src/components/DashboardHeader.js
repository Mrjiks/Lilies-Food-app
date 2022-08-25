import React from 'react';
import profileicon from '../components/assets/profileownerimg.svg';

const DashboardHeader = () => {
	return (
		<div className="NavHeader">
			<div className="dashboardheader-text NavHeader-margin">
				<h1>Good morning, Oghenevwede!</h1>
				<p>What delicious meal are you craving today?</p>
			</div>
			<div className="dashboardheader-logo NavHeader-margin">
				<img src={profileicon} alt="profile" />
			</div>
		</div>
	);
};

export default DashboardHeader;
