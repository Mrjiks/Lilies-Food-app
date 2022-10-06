import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaGithubAlt } from 'react-icons/fa';
import apple from '../components/assets/apple.svg';
import google from '../components/assets/google.svg';
import logoTwo from '../components/assets/logoTwo.svg';
import { useGlobalContext } from 'components/NewDashBoard/context';

const Footer = () => {
	const { goToHome } = useGlobalContext();
	return (
		<section className='footer-section'>
			<div className='footer-item-wrapper'>
				<div className='footer-item'>
					<h1>Company</h1>
					<p>About Us</p>
					<p>Careers</p>
					<p>Contact Us</p>
				</div>
				<div className='footer-item'>
					<h1>Support</h1>
					<p>Help Center</p>
					<p>Safety Center</p>
				</div>
				<div className='footer-item'>
					<h1>Legal</h1>
					<p>Cookies Policy</p>
					<p>Privacy Policy</p>
					<p>Terms of Service</p>
					<p>Dispute Resolution</p>
				</div>
				<div className='downloads'>
					<h1>Install</h1>
					<img
						src={apple}
						alt=''
					/>
					<img
						src={google}
						alt=''
					/>
				</div>
			</div>
			<div className='footer-copyright'>
				<div>
					<span>
						<img
							className='footer-logo'
							src={logoTwo}
							alt=''
							onClick={goToHome}
						/>
					</span>
				</div>
				<div>
					<p>All rights reserved © Harrison E. , 2022</p>
				</div>
				<p>Designed by Jiks</p>
				<div className='socials'>
					<a href='https://twitter.com/iamjikson'>
						<FaTwitter className='fa-icons' />
					</a>
					<FaInstagram className='fa-icons' />
					<FaYoutube className='fa-icons' />
					<a href='https://github.com/Mrjiks'>
						<FaGithubAlt className='fa-icons' />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
