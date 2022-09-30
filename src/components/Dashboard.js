import React from 'react';
import DashboardFoodBox from './CartList';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import { Container } from './styles/Container.styled';

const Dashboard = () => {
	return (
		<Container className='dashboard-wrapper hide relDisplay'>
			<Sidebar />
			<div>
				<DashboardHeader />
				<DashboardFoodBox />
			</div>
		</Container>
	);
};

export default Dashboard;
