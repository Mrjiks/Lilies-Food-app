import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	margin: 0 auto;

	h1 {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 500;
		font-size: 64px;
		line-height: 77px;
		width: 650px;
		height: 167px;

		color: #ffffff;
	}
	p {
		width: 609px;
		height: 77px;
		left: 98px;
		top: 549px;
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 33px;
		/* or 183% */

		color: rgba(255, 255, 255, 0.74);
	}

	span {
		color: rgba(251, 221, 187, 1);
	}

	.playstores {
		margin: 0.5rem;
	}
	.logo-wrapper {
		display: flex;
		align-items: center;
		h3 {
			margin-left: 1.2rem;
			color: rgba(255, 255, 255, 1);
		}
		.logo {
			width: 57.48px;
		}
	}
`;
