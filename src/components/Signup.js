import React from 'react';
import { Login } from '../components/pages/login';
import loginImage from '../components/assets/loginImage.svg';
import { Container } from './styles/Container.styled';
const Signup = () => {
	return (
		<Container>
			<Login
				title="Welcome to Lilies!"
				login="SIGN UP"
				image={loginImage}
				create="Already have an account?"
				forgot="LOGIN"
			/>
		</Container>
	);
};

export default Signup;
