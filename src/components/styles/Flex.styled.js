import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	.logo-wrapper {
		display: flex;
		h3 {
			margin-left: 1.2rem;
			color: rgba(255, 255, 255, 1);
		}
		.logo {
			width: 10.608rem;
			height: 4.188rem;
		}
		.logo:hover {
			filter: drop-shadow(0 0 0.3em #fbddbb);
		}
	}

	@media only screen and (max-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
		.logo-wrapper {
			display: none;
			h3 {
				margin-left: 1.2rem;
				color: rgba(255, 255, 255, 1);
			}
			.logo {
				width: 5rem;
				height: 4.188rem;
			}
			.logo:hover {
				filter: drop-shadow(0 0 0.3em #fbddbb);
			}
		}
	}
`;
