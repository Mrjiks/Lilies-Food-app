import React from 'react';
import Cart from './Cart';
import ModalTitle from './ModalTitle';
import { Container } from './styles/Container.styled';

const CartModal = () => {
	return (
		<Container>
			<div className="modal">
				<ModalTitle modalName={'Your Cart'} />
				<Cart />
				<button
					style={{
						marginRight: 'auto',
						marginLeft: 'auto',
						background: 'rgba(0, 48, 46, 1)',
						color: 'gold',
					}}
				>
					Check
				</button>
			</div>
		</Container>
	);
};

export default CartModal;
