import "./ProjectList.scss"
// import { gsap } from "gsap/all";
// import { ScrollTrigger } from "gsap/all";
// import { useEffect, useRef } from "react";

export default function ProjectList({ name, picture, description, tech, url, source, GitHub }) {

    // gsap.registerPlugin(ScrollTrigger);
    // const listRef = useRef(null);

    // useEffect(() => {
    //     gsap.to(listRef.current, {
    //         ScrollTrigger:listRef.current,
    //     });
    // })

    return (
        <div className="project-list">
            <img src={picture} alt={name} />
            <h2>{name} </h2>
            <div className="buttonwrapper">
                <button><link rel="stylesheet" href={url} />Source</button>
                <button><link rel="stylesheet" href={GitHub} />GitHub</button>
            </div>
        </div>
    )
}
