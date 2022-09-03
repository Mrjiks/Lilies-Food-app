import React from 'react';
import { StyledNav } from './styles/NavBar.styled';
import { Link } from 'react-router-dom';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
const NavBar = () => {
	return (
		<StyledNav className="sticky-header">
			<Link to="/" id="home">
				Home
			</Link>
			<Tippy
				content={
					<span style={{ color: ' #FBDDBB' }}>Login to view Dashboard</span>
				}
				arrow={false}
			>
				<Link to="/login">Login</Link>
			</Tippy>
			<Link to="/signup">
				<button className="signup react-link-btn">Sign Up</button>
			</Link>
		</StyledNav>
	);
};

export default NavBar;
