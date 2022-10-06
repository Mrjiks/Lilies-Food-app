import React from 'react';
import featuredfoodtwo from './assets/featuredfoodtwo.png';
import google from './assets/google.svg';
import apple from './assets/apple.svg';
import Button from './Button';

/////////////////////////////////////////////////////////////////////////
import Header from './Header';
import Featured from './Featured';
import FeaturedHeading from './FeaturedHeading';
import CallToAction from './CallToAction';
import { Container } from './styles/Container.styled';

/////////////////////////////////////////////////////////////////////////

const Home = () => {
	return (
		<Container>
			<Header />
			<div className='hero-container'>
				<div className='hero-text'>
					<h1 className='hero-pitch'>
						Order <span>food </span>anytime,
						<br /> anywhere
					</h1>
					<p className='hero-pitch-full'>
						Browse from our list of specials to place your order and have food
						<br />
						delivered to you in no time. Affordable, tasty and fast!
					</p>
					<div className='hero-buttons'>
						<Button
							text={google}
							className='google'
						/>
						<Button
							text={apple}
							className='apple'
						/>
					</div>
				</div>
				<div className='hero-image-container'>
					<img
						src={featuredfoodtwo}
						alt='Food'
						className='hero-image'
					/>
				</div>
			</div>
			<FeaturedHeading />
			<Featured />
			<CallToAction />
		</Container>
	);
};

export default Home;
