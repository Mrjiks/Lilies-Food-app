import React from 'react';

import { FaMinusCircle } from 'react-icons/fa';

const Cartlist = ({ image, itemName, desc, price, quantity }) => {
	return (
		<div className="cartlist-container">
			<div className="item-info-wrapper">
				<div className="item-wrapper">
					<img src={image} alt="" className="cartlistfood" />
					<div>
						<h4 className="item-name">{itemName}</h4>
						<p className="item-remove-btn">
							{' '}
							<FaMinusCircle /> Remove
						</p>
					</div>
				</div>
			</div>

			<div>
				<div className="item-qty-header"></div>
				<h3 className="item-qty-count">{quantity}</h3>
			</div>

			<div>
				<div className="item-price-header"></div>
				<h3 className="item-qty-count" item-qty-count>
					{price}
				</h3>
			</div>

			<div>
				<div className="item-subtotal-header"></div>
				<h3 className="item-qty-count" item-qty-count>
					{price * quantity}
				</h3>
			</div>

			<div>
				<div className="item-status-header"></div>
			</div>
		</div>
	);
};

export default Cartlist;
