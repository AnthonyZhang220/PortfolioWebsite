import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import "./Main.scss"
import "./global.scss"

function Main() {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scroller: "body" });


    return (
        <main className="main" id="main">
            <section className="panel bg-color">
                <Home />
            </section>
            <section className="panel bg-color" id="section1">
                <About />
            </section>
            <section className="panel bg-color" id="section2">
                <Project />
            </section>
            <section className="panel bg-color" id="section3">
                <Contact />
            </section>
            <section className="panel bg-color" id="section4">
                <Footer />
            </section>
        </main>
    );
}

export default Main;
