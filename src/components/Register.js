import React from 'react';
import { Login } from '../components/pages/login';
import loginimage from '../components/assets/loginimage.png';
import Header from '../components/Header';

const Register = () => {
	return (
		<>
			<Header />
			<Login
				title="Welcome Back!"
				login="LOGIN"
				image={loginimage}
				create="Create an account"
				forgot="Forgot password"
			/>
		</>
	);
};

export default Register;
