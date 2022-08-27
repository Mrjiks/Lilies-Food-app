import styled from 'styled-components';
export const StyledNav = styled.nav`
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
	}
	.signup:hover {
		cursor: pointer;
	}
	.signup-text {
		color: rgba(0, 48, 46, 1);
	}
`;
