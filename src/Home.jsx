import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Home.scss"

function Home() {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scroller: "body" })

    return (
        <section className="sections">
            <Intro />
            <Portfolio />
            <Project />
            <Works />
            <Contact />
        </section>
    );
}

export default Home;
