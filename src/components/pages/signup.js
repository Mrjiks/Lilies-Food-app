import React from 'react';
import { Link } from 'react-router-dom';

export const SignUpage = ({ title, login, image, olduser, oldUserLogin }) => {
	return (
		<section className="signuppage">
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
					<p>{olduser}</p>
					<Link to="/login" className="react-link">
						<p>{oldUserLogin}</p>
					</Link>
				</div>
			</div>
		</section>
	);
};
