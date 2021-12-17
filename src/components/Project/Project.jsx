import "./Project.scss"
import ProjectList from "./ProjectList/ProjectList"
import { projectdata } from "./ProjectData.js"
import { useEffect, useRef } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Project() {

    gsap.registerPlugin(ScrollTrigger);
    const listRef = useRef(null);

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
    })

    return (
        <div className='project' id='project' >
            <h1>Project</h1>
            <ul ref={listRef}>
                {projectdata.map((project, index) => (
                    <ProjectList {...project} key={index}/>
                ))}
            </ul>
        </div>
    )
}
