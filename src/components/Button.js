import React from 'react';
import { StyledButton } from './styles/Button.styled';

const Button = ({ text }) => {
	return (
		<StyledButton>
			<a href="/">
				<img src={text} alt="" className="playStores" />
			</a>
		</StyledButton>
	);
};

export default Button;
