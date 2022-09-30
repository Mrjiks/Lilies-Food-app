import React from 'react';
import DashboardFood from './CartListItems';
import { useGlobalContext } from './NewDashBoard/context';
import '../App.css';

const DashboardFoodBox = () => {
	const { id, cart, increaseItem } = useGlobalContext();

	return (
		<div className='dashboardBox'>
			{cart &&
				cart?.map(item => {
					return (
						<DashboardFood
							onClick={() => increaseItem(id)}
							{...item}
							key={item.id}
						></DashboardFood>
					);
				})}
		</div>
	);
};

export default DashboardFoodBox;
