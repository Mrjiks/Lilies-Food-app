import React from 'react';
import logoTwo from '../components/assets/logoTwo.svg';
import NavBar from './NavBar';
import { Flex } from './styles/Flex.styled';

const Header = () => {
	return (
		<Flex>
			<div className="logo-wrapper sticky-header">
				<img src={logoTwo} alt="" className="logo" />
			</div>
			<div>
				<NavBar />
			</div>
		</Flex>
	);
};

export default Header;
