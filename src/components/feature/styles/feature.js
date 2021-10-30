import styled from 'styled-components';

export const Container = styled.div`
	color: white;
	margin: 0 auto;
	text-align: center;
	padding: 115px 45px 165px;
	border-bottom: 8px solid #222;
	width: 100%;
	
`;

export const Title = styled.h1`
	font-size: 70px;
	font-weight: 600;
	max-width: 840px;
	margin: 0 auto;
	margin-bottom: 20px;


	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const SubTitle = styled.h2`
	font-size: 30px;
	margin-bottom: 30px;
`;