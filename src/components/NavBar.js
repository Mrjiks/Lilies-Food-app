import React from 'react';
import { StyledNav } from './styles/NavBar.styled';
const NavBar = () => {
	return (
		<StyledNav>
			<a href="/">Home</a>
			<a href="/login">Login</a>
			<button>
				<a href="/signup">Sign Up</a>
			</button>
		</StyledNav>
	);
};

export default NavBar;
