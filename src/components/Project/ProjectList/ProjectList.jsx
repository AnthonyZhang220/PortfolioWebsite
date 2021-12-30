import "./ProjectList.scss"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
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
        <div className="projectlist">
            <li>
                <img src={picture} alt={name}>
                </img>
                <h2>{name} </h2>
                <div className="buttonwrapper">
                    <div className="left">
                        <button><link rel="stylesheet" href={url} />Source</button>
                    </div>
                    <div className="right">
                        <button><link rel="stylesheet" href={GitHub} />GitHub</button>
                    </div>
                </div>
            </li>

        </div>
    )
}
