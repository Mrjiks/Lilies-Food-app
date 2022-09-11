import React, { useState } from 'react';
import ordericon from './assets/ordericon.png';
import dashboardicon from './assets/dashboardicon.png';
import profileicon from './assets/profileicon.svg';
import carticon from './assets/carticon.png';
import Vector from './assets/Vector.png';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';
import CartModal from './CartModal';

Modal.setAppElement('#root');

const Sidebar = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	return (
		<div className="sideBarContainer">
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				style={{
					overlay: { background: 'grey' },
				}}
			>
				<span onClick={() => setModalIsOpen(false)}>Close X</span>
				<CartModal />
			</Modal>
			<div className="sidebarModalFlex">
				<div className="sidebar-logo  side-row">
					<Link to="/">
						<img src={Vector} alt="dashboard" />
					</Link>
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

						<button
							onClick={() => setModalIsOpen(true)}
							style={{
								width: '90px',
								height: '20px',
								marginLeft: '1rem',
								marginRight: '3rem',
							}}
						>
							Your cart{' '}
						</button>

						<span>6</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
