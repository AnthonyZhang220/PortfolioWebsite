import NavBar from "./components/NavBar/NavBar";
import Home from "./Home"
import Blog from "./components/Blog/Blog";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss"

function App() {

	return (
		<BrowserRouter>
			<div className="App">
				<NavBar/>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/blogs" element={<Blog />} />
				</Routes>
			</div >
		</BrowserRouter>
	);
}

export default App;
