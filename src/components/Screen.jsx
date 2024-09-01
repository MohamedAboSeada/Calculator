import React, { useContext } from 'react';
import styled from 'styled-components';
import { ComputationContext } from './ComputeContext';

let ScreenContainer = styled.section`
	background-color: ${(props) => props.theme.backgrounds.screen};
	max-width: 100%;
	height: 150px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	padding-inline: 30px;
	justify-content: flex-end;
	transition: 300ms ease;

	& > .result {
		color: ${(props) => props.theme.text.main};
		font-size: 3rem;
		font-weight: 700;
	}
	
	@media (max-width: 600px) {
		height: 300px;
	}
`;

function Screen() {
	let { result, currentInput } = useContext(ComputationContext);

	return (
		<ScreenContainer>
			<div className='result'>{result || currentInput}</div>
		</ScreenContainer>
	);
}

export default Screen;
