import "./App.scss"
import NavBar from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="sections">
				<Intro />
				<Portfolio />
				<Project />
				<Works />
				<Contact/>
			</div>
		</div>
	);
}

export default App;
