import NavBar from "./components/NavBar/NavBar";
import Main from "./Main"
import Blog from "./components/Blog/Blog";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss"

function App() {

	return (
		<div className="App" id="App">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/blogs" element={<Blog />} />
				</Routes>
			</BrowserRouter>
		</div >
	);
}

export default App;
