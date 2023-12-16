import { useState } from 'react';
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

import "./App.scss"



function App() {

	const [mode, setMode] = useState(null);
	const { backToTop } = useBackToTop();
	const [isOpen, handleClose, handleOpen] = useModalToggle();

	return (
		<BrowserRouter>
			<MusicPlayerProvider>
				<div className="App" id="App">
					<Cursor />
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
					<CookieNotice />
					<Footer />
				</div>
			</MusicPlayerProvider>
		</BrowserRouter>
	);
};

export default App;
