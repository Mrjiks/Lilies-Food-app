import React from 'react';

const Dashboardfood = ({ image, title, desc, price }) => {
	return (
		<div className="foodbox-wrapper">
			<img src={image} alt="" className="feature-image" />
			<h1 className="feature-heading">{title}</h1>
			<p className="feature-desc">{desc}</p>
			<div>
				<p>{price}</p>
				<h3>
					<>Add to cart</>
				</h3>
			</div>
		</div>
	);
};

export default Dashboardfood;
