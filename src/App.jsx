import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import SpeedDialMenu from './components/SpeedDialMenu/SpeedDialMenu';
import Cursor from './components/Cursor';
import About from './components/About/About';
import useBackToTop from './hooks/useBackToTop';

import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import useModalToggle from "./hooks/useModalToggle"

import Main from "./Main"
import Contact from './components/Contact/Contact';
import Skill from './components/Skill/Skill';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/Blog/BlogDetail';
import PaymentModal from './components/PaymentModal';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import "./App.scss"



function App() {

	const [mode, setMode] = useState(null);
	const isMobile = useMediaQuery('(max-width: 834px)');
	const { backToTop } = useBackToTop();
	const { isOpen, handleClose, handleOpen } = useModalToggle();

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
			fontFamily: `"Roboto", sans-serif`,
			h2: {
				fontSize: isMobile ? "3rem" : "4rem",
			},
			h3: {
				fontSize: isMobile ? "2rem" : "3rem",
			},
			caption: {
				fontSize: "1rem",
			},
		}
	});

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<MusicPlayerProvider>
					<div className="App" id="App">
						<Cursor />
						<CssBaseline />
						<NavBar mode={mode} setMode={setMode} />
						{/* <Canvas id="canvas"></Canvas> */}
						<SpeedDialMenu backToTop={backToTop} handlePaymentModalOpen={handleOpen} />
						<PaymentModal isOpen={isOpen} handlePaymentModalClose={handleClose} />
						<Routes>
							<Route path="/" element={<Main />}>
							</Route>
							<Route
								path="/about"
								element={
									<>
										<About /><Skill />
									</>
								} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/blog/:blogId" element={<BlogDetail handlePaymentModalOpen={handleOpen} />} />
						</Routes>
						<Footer />
					</div>
				</MusicPlayerProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
