import React from 'react';
import logoTwo from '../components/assets/logoTwo.svg';
import NavBar from './NavBar';
import { Flex } from './styles/Flex.styled';

const Header = () => {
	return (
		<Flex className="flex-mobile">
			<div className="logo-wrapper sticky-header">
				<a href="/">
					<img src={logoTwo} alt="" className="logo" />
				</a>
			</div>
			<div>
				<NavBar />
			</div>
		</Flex>
	);
};

export default Header;
