import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
	let user = JSON.parse(localStorage.getItem('user'));
	return user;
};
const ProtectedRoutes = () => {
	let userAuth = Auth();
	return (
		<div>
			userAuth?
			<Outlet />:
			<Navigate to="/signup" />;
		</div>
	);
};

export default ProtectedRoutes;
