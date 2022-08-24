import React from 'react';
import { SignUpage } from '../components/pages/signup';
import loginImage from '../components/assets/loginImage.svg';
import { Container } from './styles/Container.styled';
import Header from '../components/Header';
const Signup = () => {
	return (
		<>
			<Header />
			<SignUpage
				id="signup"
				title="Welcome to Lilies!"
				login="SIGN UP"
				image={loginImage}
				olduser="Already have an account?"
				oldUserLogin="Login"
			/>
		</>
	);
};

export default Signup;
