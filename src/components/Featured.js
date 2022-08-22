import React from 'react';
import { Flex } from './styles/Flex.styled';
import { StyledFeatured } from './styles/Featured.styled';
const Featured = () => {
	return (
		<StyledFeatured className="special-meal">
			<h2>Special Meals of the day!</h2>
			<p>
				Check our sepecials of the day and get discounts on all our meals and
				swift delivery to what ever location within Ilorin.
			</p>
		</StyledFeatured>
	);
};

export default Featured;
