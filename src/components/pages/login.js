import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Login = ({ title, login, image, create, forgot }) => {
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const handleChange = e => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		let user = JSON.parse(localStorage.getItem('user'));

		if (
			user.email === loginData.email &&
			user.password === loginData.password
		) {
			setInterval(() => {
				window.location = '/DashboardFood';
			}, 1500);
		} else {
			alert('Wrong details');
		}
	};
	return (
		<section className="loginpage" id="signin">
			<div>
				<img src={image} alt="" />
			</div>

			<div className="form-wrapper">
				<h1 className="form-title">{title}</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Your Email address"
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						id=""
						placeholder="Your Password"
						onChange={handleChange}
					/>

					<button type="submit">{login}</button>
				</form>
				<div className="form-support">
					<Link to="/signup" className="react-link">
						<p>{create}</p>
					</Link>
					<p>{forgot}</p>
				</div>
			</div>
		</section>
	);
};
