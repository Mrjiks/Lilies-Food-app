import styled from 'styled-components';
export const StyledNav = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	a {
		text-decoration: none;
		color: rgba(251, 221, 187, 1);
		padding: 10px;
	}
	a:hover {
		text-decoration: underline;
		filter: drop-shadow(0 0 0.4em #e2b887);
	}
	.signup {
		height: 30px;
		color: rgba(0, 48, 46, 1);
		border-radius: 0.438rem;
		background: #e2b887;
		margin-left: 2rem;
		width: 100px;
		/* margin: 0 auto; */
	}
	.signup:hover {
		cursor: pointer;
	}
	.signup-text {
		color: rgba(0, 48, 46, 1);
	}

	@media only screen and (max-width: 768px) {
		.signup {
			height: 30px;
			color: rgba(0, 48, 46, 1);
			border-radius: 0.438rem;
			background: #e2b887;
			margin-right: 2rem;
			width: 90px;
			margin: 0 auto;
		}
	}
`;
