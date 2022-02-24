import NavBar from "./components/NavBar/NavBar";
import Main from "./Main"
import Blog from "./components/Blog/Blog";

import React, { useContext } from 'react';


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss"
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {

	const theme = createTheme({
		mode: 'dark',
		palette: {
			primary: {
				main: '#6638c0',
			},
			secondary: {
				main: '#8b58e4',
			},
			white: {
				main: '#fafafa'
			},
			black: {
				main: '#212121'
			}

		},
	});



	return (
		<div className="App" id="App">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<NavBar />
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
