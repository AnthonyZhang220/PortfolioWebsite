import "./ProjectList.scss"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function ProjectList({ name, picture, description, tech, url, source, GitHub }) {

    return (
        <li className="projectlist" >
            <div className="container">
                <img src={picture} alt={name} />
                <h2>{name} </h2>
                <HorizontalRuleIcon className='horizontalrule'></HorizontalRuleIcon>
                <p>{description}</p>
                <div className="buttonwrapper">
                    <div className="left">
                        <button><link rel="stylesheet" href={url} />Source</button>
                    </div>
                    <div className="right">
                        <button><link rel="stylesheet" href={GitHub} />GitHub</button>
                    </div>

                </div>
            </div>
        </li>
    )
}
