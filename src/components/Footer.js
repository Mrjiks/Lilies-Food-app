import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import apple from '../components/assets/apple.svg';
import google from '../components/assets/google.svg';
import logoTwo from '../components/assets/logoTwo.svg';

const Footer = () => {
	return (
		<section className="footer-section">
			<div className="footer-item-wrapper">
				<div className="footer-item">
					<h1>Company</h1>
					<p>About Us</p>
					<p>Careers</p>
					<p>Contact Us</p>
				</div>
				<div className="footer-item">
					<h1>Support</h1>
					<p>Help Center</p>
					<p>Safty Center</p>
				</div>
				<div className="footer-item">
					<h1>Legal</h1>
					<p>Cookies Policy</p>
					<p>Privacy Policy</p>
					<p>Terms of Service</p>
					<p>Dispute Resolution</p>
				</div>
				<div className="downloads">
					<h1>Install</h1>
					<img src={apple} alt="" />
					<img src={google} alt="" />
				</div>
			</div>
			<div className="footer-copyright">
				<div>
					<a href="#home">
						<img className="footer-logo" src={logoTwo} alt="" />
					</a>
				</div>
				<div>
					<p>© 2022 Lilies Food.</p>
				</div>
				<p>Designed by Jiks</p>
				<div className="socials">
					<FaTwitter className="fa-icons" />
					<FaInstagram className="fa-icons" />
					<FaYoutube className="fa-icons" />
				</div>
			</div>
		</section>
	);
};

export default Footer;
