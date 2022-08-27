import React from 'react';
import { SignUpage } from '../components/pages/signup';
import signupimage from '../components/assets/signupimage.png';
import Header from '../components/Header';
const Signup = () => {
	return (
		<>
			<Header />
			<SignUpage
				id="signup"
				title="Welcome to Lilies!"
				login="SIGN UP"
				image={signupimage}
				olduser="Already have an account?"
				oldUserLogin="Login"
			/>
		</>
	);
};

export default Signup;
