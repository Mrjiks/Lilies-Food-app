import React from 'react';
import { StyledNav } from './styles/NavBar.styled';
import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<StyledNav className="sticky-header">
			<Link to="/">
				<a href="/" id="home">
					Home
				</a>
			</Link>
			<Link to="/login">
				<a href="/login">Login</a>
			</Link>
			<Link to="/signup">
				<a href="/signup">
					<button className="signup react-link-btn">Sign Up</button>
				</a>
			</Link>
		</StyledNav>
	);
};

export default NavBar;
