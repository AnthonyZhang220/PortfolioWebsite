import React, { useContext, useState, useMemo, useEffect, useRef } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Main from "./Main"
import Blog from "./components/Blog/Blog";
import Canvas from "./components/Canvas/Canvas";
import BackToTop from "./components/BackToTop/BackToTop";


import { init } from 'ityped';
import { gsap } from "gsap/all";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss"
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';




function App() {

	const [mode, setMode] = useState(null);

	const backtotopRef = useRef();


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

	const backtotop = () => {
		console.log("clicked")
		gsap.to(window, { scrollTo: { y: 0 } });
	}


	//back to top show when scorlling down
	useEffect(() => {
		gsap.set(backtotopRef.current, { y: 100 });

		gsap.to(backtotopRef.current, {
			y: 0,
			autoAlpha: 1,
			scrollTrigger: {
				trigger: "body",
				start: "top -50%",
				end: "top -50%",
				toggleActions: "play none reverse none",
			}
		});
	})






	return (
		<div className="App" id="App">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<NavBar mode={mode} setMode={setMode} />
					{/* <Canvas id="canvas"></Canvas> */}
					<BackToTop className="backtotop" id='backtotop' ref={backtotopRef} onClick={backtotop}></BackToTop>
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
