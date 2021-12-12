import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
// import Canvas from "./components/Canvas/Canvas"
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { BrowserRouter as Route } from "react-router-dom";

import "./App.scss"

function App() {

	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.defaults({ scroller: ".sections" })

	return (

		<div className="App">
			<NavBar />
			<section className="sections">
				<Route exact path="/">
					<Intro />
					<Portfolio />
					<Project />
					<Works />
					<Contact />
				</Route>
			</section>
			<Route exact path="/blogs">
				<Blog />
			</Route>
		</div>
	);
}

export default App;
