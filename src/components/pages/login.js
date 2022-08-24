import React from 'react';
import { Link } from 'react-router-dom';

export const Login = ({ title, login, image, create, forgot }) => {
	return (
		<section className="loginpage" id="signin">
			<div>
				<img src={image} alt="" />
			</div>

			<div className="form-wrapper">
				<h1 className="form-title">{title}</h1>
				<form action="">
					<input
						type="text"
						placeholder="Your First Name"
						name="name"
						value=""
					/>
					<input type="email" name="email" placeholder="Your Email address" />
					<input
						type="password"
						name="password"
						id=""
						placeholder="Your Password"
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
