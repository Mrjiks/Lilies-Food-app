import styled from 'styled-components';

export const Container = styled.div`
	width: 1200px;
	/*max-width: 100%;*/
	/*padding: 0 20px;*/
	margin: 0 auto;
	scroll-behavior: smooth;
	background: rgba(0, 48, 46, 1);

	h1 {
		align-self: flex-start;
	}

	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 80vw;
		text-align: center;
		margin: 0 auto;
		overflow: hidden;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
	}
`;
