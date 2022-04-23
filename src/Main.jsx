import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero/Hero";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Skill from "./components/Skill/Skill";

import "./Main.scss"
import "./global.scss"

function Main() {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scroller: "body" });


    return (
        <main className="main" id="main">
            <section className="panel bg-color" id='section1'>
                <Hero />
            </section>
            <section className="panel bg-color" id="section2">
                <Project />
            </section>
            <section className="panel bg-color" id="section3">
                <About />
            </section>
            <section className="panel bg-color" id="section4">
                <Skill />
            </section>
            <section className="panel bg-color" id="section5">
                <Contact />
            </section>
            <section className="panel bg-color" id="section6">
                <Footer />
            </section>
        </main>
    );
}

export default Main;
