import React from 'react';
import { StyledNav } from './styles/NavBar.styled';
import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<StyledNav className="sticky-header">
			<Link to="/" id="home">
				Home
			</Link>
			<Link to="/login">Login</Link>
			<Link to="/signup">
				<button className="signup react-link-btn">Sign Up</button>
			</Link>
		</StyledNav>
	);
};

export default NavBar;
