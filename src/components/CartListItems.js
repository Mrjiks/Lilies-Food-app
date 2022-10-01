import { useGlobalContext } from 'components/NewDashBoard/context';
import React from 'react';
import { HiPlus } from 'react-icons/hi';

const Dashboardfood = ({ id, img, title, desc, price }) => {
	const { increaseItem } = useGlobalContext();
	return (
		<div
			className='foodbox-wrapper'
			style={{ margin: '2rem' }}
		>
			<img
				src={img}
				alt=''
				className='feature-image'
			/>
			<h1 className='feature-heading'>{title}</h1>
			<p className='feature-desc'>{desc}</p>
			<div className='price-and-item-btn'>
				<p style={{ color: '#00eddf', fontWeight: 'bold' }}>N{price} </p>

				<h3>
					<p
						style={{ color: '#e1b078', cursor: 'pointer' }}
						onClick={() => increaseItem(id)}
					>
						<HiPlus
							style={{
								color: '#00302e',
								width: '1.5rem',
								height: '1.5rem',
								marginBottom: '-0.3rem',
								cursor: 'pointer',
							}}
							onClick={() => increaseItem(id)}
						/>
						Add to cart
					</p>
				</h3>
			</div>
		</div>
	);
};

export default Dashboardfood;
