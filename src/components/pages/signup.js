import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignUpage = ({ title, login, image, olduser, oldUserLogin }) => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
	});

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		localStorage.setItem('user', JSON.stringify(form));

		toast.success('Thanks for Joining Us 😍');
		setInterval(() => {
			window.location = '/login';
		}, 1500);
	};

	return (
		<section className="signuppage">
			<div>
				<img src={image} alt="" className="form-imge" />
			</div>

			<div className="form-wrapper">
				<h1 className="form-title">{title}</h1>
				<form onSubmit={handleSubmit}>
					<input
						onChange={handleChange}
						id="name"
						placeholder="Your First Name"
						type="text"
						name="name"
						required
					/>

					<input
						type="email"
						name="email"
						placeholder="Your Email address"
						id="email"
						onChange={handleChange}
						required
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Your Password"
						onChange={handleChange}
						required
					/>
					<button type="submit">{login}</button>
				</form>
				<div className="form-support">
					<p>{olduser}</p>
					<Link to="/login" className="react-link">
						<p>{oldUserLogin}</p>
					</Link>
				</div>
			</div>
		</section>
	);
};
