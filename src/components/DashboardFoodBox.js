import React from 'react';
import { dashboarddata } from '../data.js';
import DashboardFood from './pages/DashboardFood';
import { useState } from 'react';

const DashboardFoodBox = () => {
	const [count, setCounter] = useState(0);

	const handleClick = () => {
		setCounter(count + 1);
	};
	console.log(count);
	return (
		<>
			<div className="dasboardBox" key={dashboarddata.id}>
				{dashboarddata &&
					dashboarddata?.map(item => {
						return (
							<DashboardFood onClick={handleClick} {...item}></DashboardFood>
						);
					})}
			</div>
		</>
	);
};

export default DashboardFoodBox;
