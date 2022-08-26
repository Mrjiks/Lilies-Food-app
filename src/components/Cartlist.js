import React from 'react';
import specialFoodOne from './assets/specialFoodOne.svg';

import { FaMinusCircle } from 'react-icons/fa';

const Cartlist = ({ image, itemName, desc, price, quantity }) => {
	return (
		<div className="cartlist-container">
			<div className="item-info-wrapper">
				<div className="">{/* <h3 className="item-header">Item</h3> */}</div>
				<div className="item-wrapper">
					<img src={image} alt="" className="cartlistfood" />
					<div className="">
						<h4 className="item-name">{itemName}</h4>
						<p className="item-remove-btn">
							{' '}
							<FaMinusCircle /> Remove
						</p>
					</div>
				</div>
			</div>
			{/*  */}
			<div className="">
				<div className="item-qty-header">
					{/* <h3 className="qty-title">Qty</h3> */}
				</div>
				<h3 item-qty-count>{quantity}</h3>
			</div>

			<div className="">
				<div className="item-price-header">
					{/* <h3 className="item-price-title">Price</h3> */}
				</div>
				<h3 item-qty-count>{price}</h3>
			</div>
			{/*  */}
			<div className="">
				<div className="item-subtotal-header">
					{/* <h3 className="subtotal-title">Sub-total</h3> */}
				</div>
				<h3 item-qty-count>{price * quantity}</h3>
			</div>
			{/*  */}
			<div className="">
				<div className="item-status-header">
					{/* <h3 className="status-title">Status</h3> */}
				</div>
				{/* <h3 item-qty-count>Delivered</h3> */}
			</div>
			{/*  */}
		</div>
	);
};

export default Cartlist;
