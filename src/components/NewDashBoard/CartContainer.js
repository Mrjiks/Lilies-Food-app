import React from 'react';
import CartItem from './CartItem';
import { useGlobalContext } from './context';
import '../../App.css';

const CartContainer = () => {
	const { cart, total, clearCart } = useGlobalContext();
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
			<header>
				<h2>Cart List</h2>
			</header>
			{/* cart items */}
			<div>
				{cart.map(item => {
					return (
						<CartItem
							key={item.id}
							{...item}
						/>
					);
				})}
			</div>
			{/* cart footer */}
			<footer>
				<hr />
				<hr />
				<div className='cart-total'>
					<h4>
						total <span>N{total}</span>
					</h4>
				</div>

				{/* clear cart list */}
				<button
					className=''
					// onClick={clearCart}
				>
					Continue to Checkout
				</button>
			</footer>
		</section>
	);
};

export default CartContainer;
