import DarkMode from "../DarkMode/DarkMode";
import Language from "../Language/Language"
import { useRef, useEffect } from "react";
import { gsap } from "gsap/all";
import { HashLink } from "react-router-hash-link";
import "./NavBar.scss"

export default function NavBar() {

    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current, { y: '-100%', opacity: 0 }, { delay: 1, y: "0%", opacity: 1, duration: 1 });
    })

    return (
        <nav className='navbar' ref={navRef}>
            <div className="left">
            </div>
            <div className="mid">
                <div className="hashlink">
                    <HashLink to="/#project">Project</HashLink>
                </div>
                <div className="hashlink">
                    <HashLink to="/#portfolio">Portfolio</HashLink>
                </div>
                <HashLink to="/blogs"><div className="hashlink">Blog</div></HashLink>
            </div>
            <div className="right">
                <div className="darkmode-button">
                    <DarkMode></DarkMode>
                </div>
                <div className="language">
                    <Language></Language>
                </div>
            </div>
        </nav>
    )
}
