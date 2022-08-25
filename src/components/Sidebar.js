import React from 'react';
import ordericon from './assets/ordericon.png';
import dashboardicon from './assets/dashboardicon.png';
import profileicon from './assets/profileicon.svg';
import carticon from './assets/carticon.png';
import Vector from './assets/Vector.png';

const Sidebar = () => {
	return (
		<div className="sidebarcontainer">
			<div className="sidebar-logo  side-row">
				<img src={Vector} alt="dashboard" />
			</div>
			<div>
				<div className="dashboard-header side-row">
					<img src={dashboardicon} alt="dashboard " />

					<h4>Dashboard</h4>
				</div>

				<div className="dashboard-profile side-row">
					<span>
						<img src={profileicon} alt="profile" />
					</span>
					<h4>Your Profile</h4>
				</div>

				<div className="dashboard-order side-row">
					<img src={ordericon} alt="order" />
					<h4>Orders</h4>
					<span>6</span>
				</div>

				<div className="dashboard-cart side-row">
					<div>
						<img src={carticon} alt="cart" />
					</div>
					<h4>Your cart </h4>
					<span>6</span>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
