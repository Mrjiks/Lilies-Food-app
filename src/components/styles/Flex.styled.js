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

	span {
		color: rgba(251, 221, 187, 1);
	}

	.playstores {
		margin: 0.5rem;
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

		.hero-image {
			margin-top: 3rem;
			height: auto;
			width: auto;
			text-align: center;
		}

		/*-----------HERO SECTION-----  */
		.hero-text {
			display: flex;
			flex-direction: column;
			justify-content: center;

			width: 100vw;
			height: auto;
			margin-top: 3rem;
		}

		.hero-pitch {
			margin-bottom: 2.5rem;
			text-align: center;
			font-weight: 700;
			font-size: 30px;
			line-height: 180%;
			margin-right: 3rem;
		}

		.hero-pitch-full {
			text-align: center;
			margin-right: 3rem;
		}
		.hero-buttons {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 5rem;
			margin-left: 5rem;
			img {
				width: 100px;
				text-align: end;
				margin-right: 3rem;
			}
		}
	}
`;
