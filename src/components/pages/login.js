import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
			user.password === loginData.password &&
			user.email !== ''
		) {
			setInterval(() => {
				window.location = '/DashboardFood';
			}, 1000);
			toast.success('Logged in Successfully', {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 1000,
			});
		} else {
			toast.error('Wrong email or password!', {
				position: toast.POSITION.TOP_CENTER,
			});
		}
	};
	return (
		<section className="loginPage" id="signin">
			<div>
				<img src={image} alt="" className="form-imge" />
			</div>

			<div className="form-wrapper">
				<h1 className="form-title">{title}</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Your Email address"
						onChange={handleChange}
						required
						className="login-form-desk"
						autoFocus
					/>
					<input
						type="password"
						name="password"
						id=""
						placeholder="Your Password"
						onChange={handleChange}
						required
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
