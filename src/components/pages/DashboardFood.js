import React from 'react';

const Dashboardfood = ({ image, title, desc, price, onClick, count }) => {
	return (
		<div className="foodbox-wrapper" style={{ margin: '2rem' }}>
			<img src={image} alt="" className="feature-image" />
			<h1 className="feature-heading">{title}</h1>
			<p className="feature-desc">{desc}</p>
			<div className="price-and-item-btn">
				<p>{price} |</p>
				<p> {count}</p>
				<h3>
					<p style={{ textDecoration: 'none' }} onClick={onClick}>
						Add to cart
					</p>
				</h3>
			</div>
		</div>
	);
};

export default Dashboardfood;
