import "./Project.scss"
import ProjectList from "./ProjectList/ProjectList"
import { projectdata } from "./ProjectData.js"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/all";

export default function Project() {

    gsap.registerPlugin(ScrollTrigger);
    const listRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(listRef.current, {
            y: "25%", opacity: 0
        }, {
            y: "0%", opacity: 1, duration: 2,
            scrollTrigger: {
                trigger: listRef.current,
                start: "top bottom"
            },
        });
    });

    // useEffect(() => {
    //     console.log("hello");
    //     ScrollTrigger.matchMedia({
    //         "(min-width: 376px)": function () {
    //             // console.log(listRef.current);
    //             gsap.to(listRef.current, {
    //                 // x: `${-100}%`,
    //                 ease: "linear",
    //                 scrollTrigger: {
    //                     trigger: contentRef.current,
    //                     start: "top top",
    //                     scrub: 0.5,
    //                     pin: true,
    //                     markers: true,
    //                 }
    //             });
    //         }
    //     });
    // }, []);

    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // //const scrubValue = true;
    // const scrubValue = 0.5;

    // let container = document.querySelector('.project-container')

    // const scrollBar = gsap.to('.scrollbar', { x: () => { return window.innerWidth - (150 + 20) }, ease: "none" })

    // ScrollTrigger.create({
    //     trigger: ".project-container",
    //     start: "top top",
    //     end: () => (container.scrollWidth - window.innerWidth),
    //     pin: true,
    //     anticipatePin: 1,
    //     scrub: scrubValue,
    //     animation: scrollBar,
    //     invalidateOnRefresh: true,
    // })



    // let thumbNails = gsap.utils.toArray(".thumbnail");

    // thumbNails.forEach((thumb, i) => {

    //     if (thumb.classList.contains('fakePin')) {

    //         function prevAll(element) {
    //             var result = [];

    //             while (element = element.previousElementSibling)
    //                 result.push(element);
    //             return result;
    //         }

    //         // console.log(prevAll(thumb))

    //         var totalWidthToMove;

    //         function getTotalWidthToMove() {

    //             totalWidthToMove = 0;

    //             prevAll(thumb).forEach((thumbBefore, i) => {

    //                 let style = thumbBefore.currentStyle || window.getComputedStyle(thumbBefore);
    //                 let marginRight = parseInt(style.marginRight);

    //                 totalWidthToMove += thumbBefore.offsetWidth + marginRight;

    //             });

    //             return totalWidthToMove;

    //         }
    //         //getTotalWidthToMove();    
    //         //console.log(totalWidthToMove)

    //         gsap.to(thumb, {
    //             x: () => { return - getTotalWidthToMove() },
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".wrapper",
    //                 start: 'top top',
    //                 scrub: scrubValue,
    //                 invalidateOnRefresh: true,
    //                 end: () => "+=" + getTotalWidthToMove(),
    //             }
    //         });

    //     }
    //     else {

    //         gsap.to(thumb, {
    //             x: () => { return - (container.scrollWidth) },
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: ".wrapper",
    //                 start: 'top top',
    //                 scrub: scrubValue,
    //                 invalidateOnRefresh: true,
    //                 end: () => "+=" + (container.scrollWidth),
    //             }
    //         });

    //     }


    // });

    return (
        <div className='project' id='project' >
            <div className='title'>
                <h1>Project</h1>
            </div>
            <div className="project-container">
                <div className="project-info">

                </div>
                <div className="project-thumbnail" ref={listRef}>
                    {projectdata.map((project, index) => (
                        <ProjectList {...project} key={index} ref={contentRef} className="list" />
                    ))}
                </div>
            </div>
        </div>
    )
}
