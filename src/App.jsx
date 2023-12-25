import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import SpeedDialMenu from './components/SpeedDialMenu/SpeedDialMenu';
import Cursor from './components/Cursor';
import About from './components/About/About';
import useBackToTop from './hooks/useBackToTop';

import useModalToggle from "./hooks/useModalToggle"
import Main from "./Main"
import Contact from './components/Contact/Contact';
import Skill from './components/Skill/Skill';
import Blog from './components/Blog/Blog';
import BlogDetail from './components/Blog/BlogDetail';
import PaymentModal from './components/PaymentModal';
import CookieNotice from './CookieNotice';
import {
	CssBaseline, ThemeProvider,
} from '@mui/material';
import "./App.scss"
import useColorMode from "./hooks/useColorMode";


function App() {

	const { backToTop } = useBackToTop();
	const [isOpen, handleOpen, handleClose] = useModalToggle();
	const [toggleColorMode, theme, mode] = useColorMode();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<MusicPlayerProvider>
					<div className="App" id="App">
						<Cursor mode={mode} />
						<NavBar mode={mode} />
						{/* <Canvas id="canvas"></Canvas> */}
						<SpeedDialMenu backToTop={backToTop} handlePaymentModalOpen={handleOpen} toggleColorMode={toggleColorMode} mode={mode} />
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
						<CookieNotice />
						<Footer />
					</div>
				</MusicPlayerProvider>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
