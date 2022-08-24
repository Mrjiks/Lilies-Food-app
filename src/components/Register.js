import React from 'react';
import { Login } from '../components/pages/login';
import login from '../components/assets/login.svg';
import { Container } from './styles/Container.styled';
import Header from '../components/Header';

const Register = () => {
	return (
		<>
			<Header />
			<Login
				title="Welcome Back!"
				login="LOGIN"
				image={login}
				create="Create an account"
				forgot="Forgot password"
			/>
		</>
	);
};

export default Register;
