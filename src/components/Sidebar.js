import React, { useState } from 'react';
import dashboardicon from './assets/dashboardicon.png';
import { BsCartPlus } from 'react-icons/bs';
import Vector from './assets/Vector.png';
import { Link } from 'react-router-dom';
import { useGlobalContext } from 'components/NewDashBoard/context';
import { GrView } from 'react-icons/gr';
import { TbSum } from 'react-icons/tb';

import Modal from 'react-modal';
import CartModal from './CartModal';

Modal.setAppElement('#root');

const Sidebar = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const { quantity, total } = useGlobalContext();
	return (
		<div className='sideBarContainer'>
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
			<div className='sidebarModalFlex'>
				<div className='sidebar-logo  side-row'>
					<Link to='/'>
						<img
							src={Vector}
							alt='dashboard'
						/>
					</Link>
				</div>
				<div>
					<div className='dashboard-header side-row'>
						<img
							src={dashboardicon}
							alt='dashboard '
						/>

						<h4>Dashboard</h4>
					</div>

					<div className='dashboard-order side-row'>
						<BsCartPlus />
						<h4>Quantity:</h4>
						<span>{quantity}</span> <br />
					</div>
					<div className='dashboard-order side-row'>
						<TbSum />
						<h4>Sum: N{total}</h4>
					</div>
					<div className='dashboard-cart side-row'>
						<div>
							<GrView />
						</div>

						<button
							onClick={() => setModalIsOpen(true)}
							style={{
								width: '100px',
								height: 'auto',
								marginLeft: '1rem',
								marginRight: '3rem',
							}}
						>
							View your Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
