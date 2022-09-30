import { Container } from 'components/styles/Container.styled';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<Container>
			<span style={{ color: 'red', marginTop: '4rem' }}>404</span>
			<p style={{ color: 'white' }}>Oops, page not found</p>
			<Link
				to='/'
				style={{ color: 'white' }}
			>
				<button className='common-btn'> &larr; Back to Home</button>
			</Link>
		</Container>
	);
};

export default ErrorPage;
