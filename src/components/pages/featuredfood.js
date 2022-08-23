import React from 'react';

const Featuredfood = ({ image, title, desc }) => {
	return (
		<di className="feature-wrapper">
			<img src={image} alt="" className="feature-image" />
			<h1 className="feature-heading">{title}</h1>
			<p className="feature-desc">{desc}</p>
		</di>
	);
};

export default Featuredfood;
