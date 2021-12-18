import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Project from "./components/Project/Project";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import "./Home.scss"
import "./global.scss"

function Home() {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.defaults({ scroller: "body" });

    const dataColorArray = ["#FAFAFA", "#FFFADE", "#CDF5F6", "#EFF9DA", "#F9EBDF", "#F9D8D6"];

    // useEffect(() => {
    //     window.addEventListener("load", function () {
    //         const scrollColorElems = document.querySelectorAll("[data-color]");

    //         scrollColorElems.forEach((colorSection, i) => {
    //             const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;

    //             ScrollTrigger.create({
    //                 trigger: colorSection,
    //                 scroller: "body",
    //                 start: "top 50%",
    //                 onEnter: () =>
    //                     gsap.to("body", {
    //                         backgroundColor: colorSection.dataset.bgcolor,
    //                         overwrite: "auto"
    //                     }),
    //                 onLeaveBack: () =>
    //                     gsap.to("body", {
    //                         backgroundColor: prevBg,
    //                         overwrite: "auto"
    //                     })
    //             });
    //         });
    //     });

    // })
    // const getMode = () => {
    //     return localStorage.getItem("darkmode");
    // }
    // console.log(getMode());

    // useEffect(() => {

    //     if (getMode() === "enabled") {
    //         return null;
    //     } else {

    //         gsap.utils.toArray('.bg-color').forEach((elem) => {

    //             let bgColor = elem.getAttribute("data-color");

    //             console.log(bgColor);

    //             ScrollTrigger.create({
    //                 trigger: elem,
    //                 start: "top 50%",
    //                 end: "bottom 50%",
    //                 onEnter: () => gsap.to("body", { duration: 1, backgroundColor: bgColor }),
    //                 onLeave: () => gsap.to("body", { duration: 1, backgroundColor: bgColor }),
    //                 onLeaveBack: () => gsap.to("body", { duration: 1, backgroundColor: bgColor }),
    //                 onEnterBack: () => gsap.to("body", { duration: 1, backgroundColor: bgColor }),
    //                 markers: true,
    //             })
    //         });
    //     }
    // });



    return (
        <main>
            <section className="bg-color">
                <Intro />
            </section>
            <section className="bg-color" data-color={dataColorArray[1]} id="section1">
                <Portfolio />
            </section>
            <section className="bg-color" data-color={dataColorArray[2]} id="section2">
                <Project />
            </section>
            <section className="bg-color" data-color={dataColorArray[3]} id="section3">
                <Works />
            </section>
            <section className="bg-color" data-color={dataColorArray[4]} id="section4">
                <Contact />
            </section>
        </main>
    );
}

export default Home;
