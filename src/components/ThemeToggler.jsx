import styled from 'styled-components';
import { themes } from '../assets/themes';

let TooglerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.backgrounds.keypad};
	width: calc(25px * 3);
	height: 30px;
	padding: 0 5px;
	border-radius: 25px;
`;

let TooglerBtn = styled.button`
	background-color: ${(props) => props.theme.backgrounds.keypad};
	width: 20px;
	height: 20px;
	border-radius: 50%;
	position: relative;
	&::before {
		content: '${(props) => props.theme_number}';
		color: ${(props) => props.theme.text.main};
		position: absolute;
		top: -22px;
		font-weight: bold;
		left: 50%;
		transform: translateX(-50%);
		transition: 100ms ease;
	}
	&.active {
		background-color: ${(props) => props.theme.keys.accent};
	}
`;

let ThemeContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	width: fit-content;
	& > h4 {
		text-transform: uppercase;
		color: ${(props) => props.theme.text.main};
	}
`;

function ThemeToggler({ theme, handleTheme }) {
	return (
		<ThemeContainer>
			<h4>Theme</h4>
			<TooglerContainer>
				{themes.map((_, index) => (
					<TooglerBtn
						key={index}
						onClick={handleTheme}
						value={index}
						theme_number={index + 1}
						className={theme === themes[index] ? 'active' : ''}
					/>
				))}
			</TooglerContainer>
		</ThemeContainer>
	);
}
export default ThemeToggler;
export { TooglerBtn, TooglerContainer };
