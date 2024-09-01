import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { themes } from './assets/themes';
import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';

import { ComputationProvider } from './components/ComputeContext';

import Header from './components/CalculatorHeader';
import Screen from './components/Screen';
import KeyPad from './components/KeyPad';

const GlobalStyle = createGlobalStyle`
	body{
		font-family: "League Spartan", sans-serif;
		background-color: ${(props) => props.theme.backgrounds.main};
	}
	*{
		margin: 0;
		box-sizing: border-box;
	}
	button{
		border: none;
		outline: none;
		cursor: pointer;
		font-family: inherit;
	}
`;
const AppContainer = styled.section`
	padding-inline: 15px;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (max-width: 600px) {
		width: 100%;
		padding: 15px;
		height: 100vh;
		grid-template-rows: 70px 300px 1fr;
	}

	@media (min-width: 601px) {
		width: 550px;
	}
`;
function App() {
	let [theme, setTheme] = useState(themes[0]);

	let handleTheme = (e) => {
		setTheme(themes[e.target.value]);
	};

	return (
		<>
			<ComputationProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<AppContainer>
						<Header theme={theme} handleTheme={handleTheme} />
						<Screen />
						<KeyPad />
					</AppContainer>
				</ThemeProvider>
			</ComputationProvider>
		</>
	);
}

export default App;
