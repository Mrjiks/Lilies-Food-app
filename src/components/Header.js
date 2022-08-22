import React from 'react';
import logo from '../components/assets/logo.svg';
import NavBar from './NavBar';
import { Flex } from './styles/Flex.styled';

const Header = () => {
	return (
		<Flex>
			<div className="logo-wrapper">
				<img src={logo} alt="" className="logo" />
				<span>
					<h3>Lilies</h3>
				</span>
			</div>
			<div>
				<NavBar />
			</div>
		</Flex>
	);
};

export default Header;
