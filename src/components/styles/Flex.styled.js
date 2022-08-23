import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	margin: 0 auto;

	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 4rem;
		line-height: 4.813rem;
		color: #ffffff;
	}
	p {
		font-style: normal;
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 2.063rem;
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
			width: 3.593rem;
		}
	}
`;
