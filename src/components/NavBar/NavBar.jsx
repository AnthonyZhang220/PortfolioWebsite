import "./NavBar.scss"
import { useRef, useEffect } from "react";
import { gsap } from "gsap/all";

export default function NavBar() {

    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current, { y: '-100%', opacity: 0 }, { delay: 1, y: "0%", opacity: 1, duration: 1 });
    })
    return (
        <div className='navbar' ref={navRef}>
            <div className="wrapper">
                <div className="left"></div>
                <h1><a href="#project">Project</a></h1>
                <h1><a href="#blog">Blog</a></h1>
                <h1><a href="#portfolio">Portfolio</a></h1>
                <div className="right">
                </div>
            </div>
        </div>
    )
}
