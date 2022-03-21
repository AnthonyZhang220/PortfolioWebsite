import NavBar from "./components/NavBar/NavBar";
import Main from "./Main"
import Blog from "./components/Blog/Blog";

import React, { useContext, useState, useMemo } from 'react';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss"
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';




function App() {

	const [mode, setMode] = useState(null);

	const theme = createTheme({
		palette: {
			primary: {
				light: '#845fcc',
				main: '#6638c0',
				dark: '#472786'
			},
			secondary: {
				light: '#a279e9',
				main: '#8b58e4',
				dark: '#613d9f',
			},
			white: {
				main: '#fafafa'
			},
			black: {
				main: '#212121'
			},
			mode: mode ? 'dark' : 'light'

		},
		typography: {
			"fontFamily": `"myvg", sans-serif`,
		}
	});






	return (
		<div className="App" id="App">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<NavBar mode={mode} setMode={setMode} />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/blogs" element={<Blog />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</div >
	);
};

export default App;
