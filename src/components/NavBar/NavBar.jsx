import DarkMode from "../DarkMode/DarkMode";
import Language from "../Language/Language"
import { useRef, useEffect } from "react";
import { gsap } from "gsap/all";
import { HashLink } from "react-router-hash-link";
import { ScrollToPlugin } from 'gsap/all'
import { ScrollTrigger } from "gsap/all";
import "./NavBar.scss"
import "../../global.scss"

export default function NavBar() {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
    
    const navRef = useRef(null);


    const getMode = () => {

        return localStorage.getItem("darkMode")
    }


    useEffect(() => {
        //landing animation from top for navbar
        gsap.fromTo(navRef.current, { y: '-100%', opacity: 0 }, { delay: 1, y: "0%", opacity: 1, duration: 1 });
    })


    //change background color when scroll
    gsap.to(navRef.current, {
        backgroundColor: getMode() === "enabled" ? "#121212" : "white",
        scrollTrigger: {
            trigger: "body",
            start: "60px",
            end: "max",
            toggleActions: "play play play play",
        }
    });

    return (
        <nav className='navbar' ref={navRef}>
            <div className="left"></div>
            <div className="mid">
                <HashLink to="/#project">PROJECT</HashLink>
                <div className="hashlink"><HashLink to="/#portfolio">PORTFOLIO</HashLink></div>
                <div className="hashlink"><HashLink to="/blogs">BLOG</HashLink></div>
            </div>
            <div className="right">
                <div className="darkmode-button">
                    <DarkMode></DarkMode>
                </div>
                <div className="language">
                    <Language></Language>
                </div>
                <div className="email">
                    <button type='button'><h3>Start a Conversation</h3></button>
                </div>
            </div>
        </nav>
    )
}
