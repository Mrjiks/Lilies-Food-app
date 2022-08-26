import React from 'react';
import Cart from './Cart';
import ModalTitle from './ModalTitle';
import { Container } from './styles/Container.styled';

const Modal = () => {
	return (
		<Container>
			<div className="modal">
				<ModalTitle modalName={'Your Cart'} />
				<Cart />
			</div>
		</Container>
	);
};

export default Modal;
