import React from 'react';
import { StyledNav } from './styles/NavBar.styled';
import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<StyledNav className="sticky-header">
			<Link to="/">
				<a href="#" id="home">
					Home
				</a>
			</Link>
			<Link to="/login">
				<a>Login</a>
			</Link>
			<Link to="/signup">
				<button className="signup react-link-btn">
					<a className="signup-text">Sign Up</a>
				</button>
			</Link>
		</StyledNav>
	);
};

export default NavBar;
