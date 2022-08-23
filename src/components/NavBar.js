import React from 'react';
import { StyledNav } from './styles/NavBar.styled';
const NavBar = () => {
	return (
		<StyledNav className="sticky-header">
			<a href="#" id="home">
				Home
			</a>
			<a href="#">Login</a>
			<button className="signup">
				<a className="signup-text" href="#cta">
					Sign Up
				</a>
			</button>
		</StyledNav>
	);
};

export default NavBar;
