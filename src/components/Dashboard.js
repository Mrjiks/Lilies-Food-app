import React from 'react';
import DashboardFoodBox from './DashboardFoodBox';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import { Container } from './styles/Container.styled';

const Dashboard = () => {
	return (
		<div className="dashboard-wrapper">
			<Sidebar />
			<div>
				<DashboardHeader />
				<DashboardFoodBox />
			</div>
		</div>
	);
};

export default Dashboard;
