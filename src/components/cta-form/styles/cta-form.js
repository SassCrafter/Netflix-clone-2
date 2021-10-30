import styled from 'styled-components/macro';
import Button from '../../button';

export const CtaFormGroup = styled.div`
	display: flex;
	width: 100%;
	margin: 0 auto;

	@media (max-width: 600px) {
		flex-direction: column;
	}

	input {
		height: 68px;
		background-color: #fff;
		color: var(--text-color);

		@media (max-width: 600px) {
			height: 48px;
		}

		@media (max-width: 1200px) {
			height: 58px;
		}
	}
`;

export const CtaFormSubmit = styled(Button)`
	height: 68px;
	width: 40%;
	display: block;
	margin-left: 1px;

	@media (max-width: 600px) {
		height: 48px;
		width: 100%;
		margin-top: 10px;
		margin-left: 0;
	}

	@media (max-width: 1200px) {
		height: 58px;
	}
`;