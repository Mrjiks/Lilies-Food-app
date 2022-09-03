import React from 'react';
import { dashboarddata } from '../data.js';
import DashboardFood from './pages/DashboardFood';
import { useState } from 'react';

const DashboardFoodBox = () => {
	const [count, setCounter] = useState(0);

	const handleClick = e => {
		console.dir(e);
		setCounter(prevCount => prevCount + 1);
		console.log(count);
	};
	return (
		<>
			<div className="dasboardBox">
				{dashboarddata &&
					dashboarddata?.map(item => {
						return (
							<DashboardFood
								onClick={handleClick}
								{...item}
								key={item.id}
							></DashboardFood>
						);
					})}
			</div>
		</>
	);
};

export default DashboardFoodBox;
