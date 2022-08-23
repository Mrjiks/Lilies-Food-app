import styled from 'styled-components';

export const StyledFeatured = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	.special-food-heading {
		margin-top: 11.25rem;
	}

	.special-food-info {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		gap: 10rem;
		justify-content: center;
		text-align: center;
		margin-top: 2rem;
	}
`;
