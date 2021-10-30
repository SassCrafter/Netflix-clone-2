import styled from 'styled-components/macro';
import Button from '../../button';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.15)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg-1.jpg')}) top left / cover
    no-repeat;
`;

export const Frame = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 56px;
	height: 64px;
	padding: 50px 0;
`;

export const Logo = styled.img`
	width: 108px;
	height: 32px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		width: 167px;
		height: 45px;
	}
`;

export const ButtonLink = styled(Button)``;