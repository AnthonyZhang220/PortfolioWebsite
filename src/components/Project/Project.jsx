import "./Project.scss"
import ProjectList from "./ProjectList/ProjectList"
import { projectdata } from "./ProjectData.js"
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

export default function Project() {

    gsap.registerPlugin(ScrollTrigger);
    const listRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(listRef.current, {
            y: "50%", opacity: 0.5
        }, {
            y: "0%", opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: listRef.current,
            },
        });
    })
    return (
        <div className='project' id='project'>
            <h1>Project</h1>
            <ul>
                {projectdata.map((project, index) => (
                    <ProjectList {...project} key={index} ref={listRef}/>
                ))}
            </ul>
        </div>
    )
}
