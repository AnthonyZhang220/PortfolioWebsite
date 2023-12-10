import { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Main from "./Main"
import Footer from './components/Footer/Footer';
import Blog from "./components/Blog/Blog";
import SpeedDialMenu from './components/SpeedDialMenu/SpeedDialMenu';
import Cursor from './components/Cursor';
import About from './components/About/About';

import useBackToTop from './hooks/useBackToTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useMediaQuery } from '@material-ui/core';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';




function App() {

	const [mode, setMode] = useState(null);

	const isMobile = useMediaQuery('(max-width: 834px)');


	const { backToTop } = useBackToTop()

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
			fontFamily: `"myvg", sans-serif`,
			h2: {
				fontSize: isMobile ? "2.5em" : "4em",
			},
			h3: {
				fontSize: isMobile ? "1.5em" : "3em",
			},
			caption: {
				fontSize: "1em",
			},
		}
	});


	return (
		<div className="App" id="App">
			<Cursor />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<MusicPlayerProvider>
						<NavBar mode={mode} setMode={setMode} />
						{/* <Canvas id="canvas"></Canvas> */}
						<SpeedDialMenu backToTop={backToTop} />
						<Routes>
							<Route path="/" element={<Main />}>

							</Route>
							<Route path="/about" element={<About />} />
							<Route path="/blog" element={<Blog />} />
						</Routes>
						<Footer />
					</MusicPlayerProvider>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
};

export default App;
