import React from 'react';

import { cartdata } from '../data.js';

import Cartlist from './Cartlist';

const Cart = () => {
	return (
		<>
			<div>
				{cartdata &&
					cartdata?.map(item => {
						return <Cartlist key={cartdata.id} {...item}></Cartlist>;
					})}
			</div>
		</>
	);
};

export default Cart;
