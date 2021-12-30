import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./Main.scss"
import "./global.scss"

function Main() {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scroller: "body" });

    const dataColorArray = ["#FAFAFA", "#FFFADE", "#CDF5F6", "#EFF9DA", "#F9EBDF", "#F9D8D6"];

    useEffect(() => {

        // let panels = gsap.utils.toArray(".panel"),
        //     scrollTween;

        // function goToSection(i) {
        //     scrollTween = gsap.to(window, {
        //         scrollTo: { y: i * window.innerHeight, autoKill: false },
        //         duration: 1,
        //         onComplete: () => scrollTween = null,
        //         overwrite: true,
        //     });
        // }

        // panels.forEach((panel, i) => {
        //     ScrollTrigger.create({
        //         trigger: panel,
        //         start: "top bottom",
        //         end: "+=200%",
        //         onToggle: self => self.isActive && !scrollTween && goToSection(i)
        //     });
        // });

        // // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
        // ScrollTrigger.create({
        //     start: 0,
        //     end: "max",
        //     snap: 1 / (panels.length - 1)
        // })
    })

    return (
        <main className="main" id="main">
            <section className="panel bg-color">
                <Home />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[1]} id="section1">
                <About />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[1]} id="section2">
                <Portfolio />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[2]} id="section3">
                <Project />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[3]} id="section4">
                <Works />
            </section>
            <section className="panel bg-color" data-color={dataColorArray[4]} id="section5">
                <Contact />
            </section>
        </main>
    );
}

export default Main;
