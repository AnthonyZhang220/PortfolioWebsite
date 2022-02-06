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

    const dataColorArray = ["#FAFAFA", "#FFFADE", "#CDF5F6", "#EFF9DA", "#F9EBDF", "#F9D8D6"];

    return (
        <main className="main" id="main">
            <section className="panel bg-color">
                <Home />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[1]} id="section1">
                <About />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[2]} id="section2">
                <Project />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[3]} id="section3">
                <Contact />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[4]} id="section4">
                <Footer />
            </section>
        </main>
    );
}

export default Main;
