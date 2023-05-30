import { useState, useEffect, useRef } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Main from "./Main"
import Blog from "./components/Blog/Blog";
import BackToTop from "./components/BackToTop/BackToTop";



import { gsap } from "gsap/all";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useMediaQuery } from '@material-ui/core';




function App() {

	const [mode, setMode] = useState(null);

	const backtotopRef = useRef();
	const cursorRef = useRef()
	const isMobile = useMediaQuery('(max-width: 834px)');


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

		//custom cursor
		let mouseX = 0, mouseY = 0;
		let buttons = Array.from(document.getElementsByTagName("button"));
		let links = Array.from(document.getElementsByTagName("a"));
		let h1s = Array.from(document.getElementsByTagName("h1"));
		let images = Array.from(document.getElementsByTagName("img"));

		console.log(buttons)

		gsap.to({}, 0.016, {
			repeat: -1,

			onRepeat: function () {
				gsap.set(cursorRef.current, {
					css: {
						left: mouseX,
						top: mouseY
					}
				})
			}
		})

		window.addEventListener("mousemove", function (e) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		})

		buttons.forEach(button => {
			button.addEventListener("mouseleave", () => {
				cursorRef.current.classList.remove("grow");
			})
			button.addEventListener("mousemove", () => {
				cursorRef.current.classList.add("grow");
			})
		})

		links.forEach(link => {
			link.addEventListener("mouseleave", () => {
				cursorRef.current.classList.remove("grow");
			})
			link.addEventListener("mousemove", () => {
				cursorRef.current.classList.add("grow");
			})
		})
		h1s.forEach(h1 => {
			h1.addEventListener("mouseleave", () => {
				cursorRef.current.classList.remove("growtext");
			})
			h1.addEventListener("mousemove", () => {
				cursorRef.current.classList.add("growtext");
			})
		})
		images.forEach(img => {
			img.addEventListener("mouseleave", () => {
				cursorRef.current.classList.remove("growimg");
			})
			img.addEventListener("mousemove", () => {
				cursorRef.current.classList.add("growimg");
			})
		})

	}, [])

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
						<Route path="/blog" element={<Blog />} />
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
			<div className="cursor" ref={cursorRef} id="cursor"></div>
		</div>
	);
};

export default App;
