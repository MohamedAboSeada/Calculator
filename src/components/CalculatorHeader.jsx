import styled from 'styled-components';
import ThemeToggler from './ThemeToggler';

const CalcHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > h1 {
		height: 70px;
		display: flex;
		font-size: 2rem;
		text-transform: lowercase;
		align-items: center;
		color: ${(props) => props.theme.text.main};
	}
`;

function Header({ theme, handleTheme }) {
	return (
		<CalcHeader>
			<h1>Calc</h1>
			<ThemeToggler theme={theme} handleTheme={handleTheme} />
		</CalcHeader>
	);
}

export default Header;
