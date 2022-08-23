import React from 'react';

import { StyledFeatured } from './styles/Featured.styled';
import { data } from '../data.js';
import Featuredfood from './pages/featuredfood';

const Featured = () => {
	return (
		<StyledFeatured>
			<div className="special-food-info">
				{data &&
					data?.map(item => {
						return <Featuredfood key={data.id} {...item}></Featuredfood>;
					})}
			</div>
		</StyledFeatured>
	);
};

export default Featured;
