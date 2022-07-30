import { lazy, Suspense } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Typography from "@mui/material/Typography";

import "./Main.scss"
import "./global.scss"

import Hero from "./components/Hero/Hero";
const Project = lazy(() => import("./components/Project/Project"))
const Contact = lazy(() => import("./components/Contact/Contact"))
const About = lazy(() => import("./components/About/About"))
const Footer = lazy(() => import("./components/Footer/Footer"))
const Skill = lazy(() => import("./components/Skill/Skill"))

function Main() {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scroller: "body" });


    return (
        <main className="main" id="main">
            <section className="panel bg-color" id='section1'>
                <Hero />
            </section>
            <section className="panel bg-color" id="section2">
                <Suspense fallback={<Typography variant="h6">Loading Project</Typography>}>
                    <Project />
                </Suspense>
            </section>
            <section className="panel bg-color" id="section3">
                <Suspense fallback={<Typography variant="h6">Loading About</Typography>}>
                    <About />
                </Suspense>
            </section>
            <section className="panel bg-color" id="section4">
                <Suspense fallback={<Typography variant="h6">Loading Skill</Typography>}>
                    <Skill />
                </Suspense>
            </section>
            <section className="panel bg-color" id="section5">
                <Suspense fallback={<Typography variant="h6">Loading Contact</Typography>}>
                    <Contact />
                </Suspense>
            </section>
            <section className="panel bg-color" id="section6">
                <Suspense fallback={<Typography variant="h6">Loading Footer</Typography>}>
                    <Footer />
                </Suspense>
            </section>
        </main>
    );
}

export default Main;
