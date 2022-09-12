import React from 'react';
import logoTwo from '../components/assets/logoTwo.svg';
import NavBar from './NavBar';
import { Flex } from './styles/Flex.styled';

const Header = () => {
	return (
		<Flex className="flex-mobile">
			<div className="logo-wrapper">
				<a href="/">
					<img src={logoTwo} alt="" className="logo" />
				</a>
			</div>
			<div className='sticky-header'>
				<NavBar />
			</div>
		</Flex>
	);
};

export default Header;
