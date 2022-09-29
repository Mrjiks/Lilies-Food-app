import React from 'react';
import CartContainer from './NewDashBoard/CartContainer';
import Navbar from './NewDashBoard/Navbar';

const CartModal = () => {
	return (
		<div className='modal'>
			<Navbar />
			<CartContainer />
		</div>
	);
};

export default CartModal;
