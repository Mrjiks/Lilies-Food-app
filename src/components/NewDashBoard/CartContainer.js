import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
import '../../App.css';

const CartContainer = () => {
	const { cart, total, quantity } = useGlobalContext();
	if (cart.length === 0) {
		return (
			<section className='cart'>
				{/* cart header */}
				<header>
					<h2>Cart List</h2>
					<h4 className='empty-cart'>is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<section className='cart'>
			{/* cart header */}
			<header className='header-margin-top'>
				<h2>Cart List</h2>
			</header>

			{/* cart items */}
			<div>
				{cart.map(item => {
					return (
						<>
							<CartItem
								key={item.id}
								{...item}
							/>
							<hr />
						</>
					);
				})}
			</div>
			{/* cart footer:Total */}
			<footer>
				<div className='cart-total'>
					<h4>
						total <span>N{total}</span>
					</h4>
				</div>

				{/* Checkout */}
				<Link to='/'>
					<button className='common-btn'>Checkout</button>
				</Link>
			</footer>
		</section>
	);
};

export default CartContainer;
