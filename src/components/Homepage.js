import React from 'react';
import { Flex } from './styles/Flex.styled';
import featuredfoodtwo from './assets/featuredfoodtwo.png';
import google from './assets/google.svg';
import apple from './assets/apple.svg';
import Button from './Button';
import { Container } from '../components/styles/Container.styled.js';

/////////////////////////////////////////////////////////////////////////
import Header from '../components/Header';
import Featured from '../components/Featured';
import SpecialFeatureHeading from '../components/SpecialFeatureHeading';
import CallToAction from '../components/CallToAction';

/////////////////////////////////////////////////////////////////////////

const Home = () => {
	return (
		<>
			<Container>
				<Header />
				<Flex>
					<div className="hero-text">
						<h1 className="hero-pitch">
							Order <span>food </span>anytime,
							<br /> anywhere
						</h1>
						<p className="hero-pitch-full">
							Browse from our list of specials to place your order and have food
							<br />
							delivered to you in no time. Affordable, tasty and fast!
						</p>

						<div className="hero-buttons">
							<Button text={google} />
							<Button text={apple} />
						</div>
					</div>
					<div>
						<img src={featuredfoodtwo} alt="" className="hero-image" />
					</div>
				</Flex>

				<SpecialFeatureHeading />
				<Featured />
				<CallToAction />
			</Container>
		</>
	);
};

export default Home;
