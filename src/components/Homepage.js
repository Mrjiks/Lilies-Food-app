import React from 'react';
import { Flex } from './styles/Flex.styled';
import heroimage from './assets/heroimage.svg';
import google from './assets/google.svg';
import apple from './assets/apple.svg';
const Home = () => {
	return (
		<Flex>
			<div className="hero-text">
				<h1>
					Order <span>food </span>anytime,
					<br /> anywhere
				</h1>
				<p>
					Browse from our list of specials to place your order and have food{' '}
					<br />
					delivered to you in no time. Affordable, tasty and fast!
				</p>

				<a href="">
					<img src={google} alt="" className="playstores" />
					<img src={apple} alt="" className="playstores" />
				</a>
			</div>
			<div>
				<img src={heroimage} alt="" className="hero-image" />
			</div>
		</Flex>
	);
};

export default Home;
