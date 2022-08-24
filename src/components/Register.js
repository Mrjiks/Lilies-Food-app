import React from 'react';
import { Login } from '../components/pages/login';
import login from '../components/assets/login.svg';
import { Container } from './styles/Container.styled';

const Register = () => {
	return (
		<Container id="signin">
			<Login
				title="Welcome Back!"
				login="Login"
				image={login}
				create="Create an account"
				forgot="Forgot password"
			/>
		</Container>
	);
};

export default Register;
