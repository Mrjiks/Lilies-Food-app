import React from 'react';

import { StyledFeatured } from './styles/Featured.styled';
import { dashboarddata } from '../data.js';
import DashboardFood from './pages/DashboardFood';

const DashboardFoodBox = () => {
	return (
		<>
			<div className="dasboardBox">
				{dashboarddata &&
					dashboarddata?.map(item => {
						return (
							<DashboardFood key={dashboarddata.id} {...item}></DashboardFood>
						);
					})}
			</div>
		</>
	);
};

export default DashboardFoodBox;
