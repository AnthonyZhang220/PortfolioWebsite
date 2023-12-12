import { useState } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Main from "./Main"
import Footer from './components/Footer/Footer';
import SpeedDialMenu from './components/SpeedDialMenu/SpeedDialMenu';
import Cursor from './components/Cursor';
import About from './components/About/About';
import useBackToTop from './hooks/useBackToTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import useModalToggle from "./hooks/useModalToggle"
import BlogDetail from './components/Blog/BlogDetail';

import "./App.scss"
import PaymentModal from './components/PaymentModal';



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
		<ThemeProvider theme={theme}>
			<MusicPlayerProvider>
				<div className="App" id="App">
					<Cursor />
					<CssBaseline />
					<BrowserRouter>
						<NavBar mode={mode} setMode={setMode} />
						{/* <Canvas id="canvas"></Canvas> */}
						<SpeedDialMenu backToTop={backToTop} handlePaymentModalOpen={handleOpen} />
						<PaymentModal isOpen={isOpen} handlePaymentModalClose={handleClose} />
						<Routes>
							<Route path="/" element={<Main />}>
							</Route>
							<Route path="/about" element={<About />} />
							<Route path="/blog/:blogId" element={<BlogDetail handlePaymentModalOpen={handleOpen} />} />
						</Routes>
						<Footer />
					</BrowserRouter>
				</div>
			</MusicPlayerProvider>
		</ThemeProvider>
	);
};

export default App;
