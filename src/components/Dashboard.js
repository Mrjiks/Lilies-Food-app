import React from 'react';
import DashboardFoodBox from './DashboardFoodBox';
import DashboardHeader from './DashboardHeader';
import Header from './Header';
import Sidebar from './Sidebar';
import { Container } from './styles/Container.styled';

const Dashboard = () => {
	return (
		<>
			{/* <Header /> */}
			<Container className="dashboard-wrapper hide">
				<Sidebar />
				<div>
					<DashboardHeader />
					<DashboardFoodBox />
				</div>
			</Container>
		</>
	);
};

export default Dashboard;
