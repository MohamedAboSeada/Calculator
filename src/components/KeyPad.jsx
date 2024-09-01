import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { ComputationContext } from './ComputeContext';

let KeypadContainer = styled.div`
	margin-top: 20px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 25px;
	background-color: ${(props) => props.theme.backgrounds.keypad};
	padding: 20px 15px;
	border-radius: 15px;
	transition: 300ms ease;
	@media (max-width: 600px) {
		gap: 20px;
		margin-top: 15px;
		border-radius: 10px;
	}
`;

let Key = styled.button`
	background-color: ${(props) => props.theme.keys.secondary};
	box-shadow: 0 5px 0 ${(props) => props.theme.keys.secondaryShadow};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.7rem;
	border-radius: 15px;
	font-weight: 700;
	height: 55px;
	color: ${(props) => props.theme.keyColors.main};
	transition: 300ms ease;
	@media (max-width: 600px) {
		font-size: 1.7rem;
		border-radius: 5px;
		height: auto;
	}
	&:nth-child(17) {
		grid-column: 1/3;
	}

	&:nth-child(18) {
		grid-column: 3/-1;
		background-color: ${(props) => props.theme.keys.accent};
		box-shadow: 0 5px 0 ${(props) => props.theme.keys.accentShadow};
	}
	&:nth-child(4),
	&:nth-child(17) {
		background-color: ${(props) => props.theme.keys.primary};
		box-shadow: 0 5px 0 ${(props) => props.theme.keys.primaryShadow};
	}
	&:nth-child(18) {
		color: ${(props) =>
			props.theme.text.inverse || props.theme.keyColors.sp__main};
	}
	&:nth-child(4),
	&:nth-child(17) {
		color: ${(props) => props.theme.keyColors.sp__main};
	}
	&:hover {
		filter: brightness(1.2);
	}
`;

const keys = [
	7,
	8,
	9,
	'DEL',
	4,
	5,
	6,
	'+',
	1,
	2,
	3,
	'-',
	'.',
	0,
	'÷',
	'×',
	'RESET',
	'=',
];

function KeyPad() {
	let { addInput, computeResult, deleteInput, clearInput } =
		useContext(ComputationContext);

	let handleEquation = (e) => {
		if (e.target.value.match(/[0-9+\-*/.]/)) {
			addInput(e.target.value);
		} else if (e.target.value === 'RESET') {
			clearInput();
		} else if (e.target.value === 'DEL') {
			deleteInput();
		} else if (e.target.value === '=') {
			computeResult();
		}
	};

	let handleKeyValue = (value) => {
		if (value === '÷') {
			return '/';
		}
		if (value === '×') {
			return '*';
		}
		return value;
	};

	return (
		<KeypadContainer>
			{keys.map((key, index) => (
				<Key
					value={handleKeyValue(key)}
					onClick={(e) => handleEquation(e)}
					key={index}
				>
					{key}
				</Key>
			))}
		</KeypadContainer>
	);
}

export default KeyPad;
