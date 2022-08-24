import React from 'react';
import { StyledNav } from './styles/NavBar.styled';
const NavBar = () => {
	return (
		<StyledNav className="sticky-header">
			<a href="#" id="home">
				Home
			</a>
			<a href="#signin">Login</a>
			<button className="signup">
				<a className="signup-text" href="#signup">
					Sign Up
				</a>
			</button>
		</StyledNav>
	);
};

export default NavBar;
