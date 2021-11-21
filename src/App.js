import "./index.css";
////
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { plPL } from "@mui/material/locale";
import AppContextProvider from "./context/AppContext";
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import WorldStats from "./components/WorldStats";

function App() {
	const theme = createTheme(
		{
			palette: {
				background: {
					paper: "#2f3042",
					default: "#232534",
				},
				text: {
					primary: "#fff",
				},
			},
			typography: {
				fontFamily: "Roboto",
				h1: {
					color: "#fff",
					fontSize: "3rem",
					fontWeight: 500,
				},
				h2: {
					color: "#fff",
					fontSize: "2.5rem",
					fontWeight: 500,
				},
				h3: {
					color: "#fff",
					fontSize: "1.5rem",
					fontWeight: 500,
				},
				subtitle1: {
					color: "#0177fb",
					fontSize: "1.3rem",
					fontWeight: 400,
				},
				subtitle2: {
					color: "#fff",
				},
			},
		},
		plPL,
	);

	return (
		<ThemeProvider theme={theme}>
			<AppContextProvider>
				<div className="app">
					<Menu />
					<Dashboard />
					<WorldStats />
				</div>
			</AppContextProvider>
		</ThemeProvider>
	);
}

export default App;
