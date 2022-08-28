import styled from 'styled-components';

export const Container = styled.div`
	width: 1440px;
	max-width: 100%;

	padding: 0 20px;
	margin: 0 auto;
	scroll-behavior: smooth;
	background: rgba(0, 48, 46, 1);

	h1 {
		align-self: flex-start;
	}

	@media only screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
		width: 100%;
		margin: 0 auto;
	}
`;
