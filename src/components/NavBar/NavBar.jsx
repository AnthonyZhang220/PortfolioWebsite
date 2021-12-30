import DarkMode from "../DarkMode/DarkMode";
import Language from "../Language/Language";
import Menu from "../Menu/Menu";
import { useRef, useEffect, useState } from "react";
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
    const midRef = useRef(null);
    const [toggle, setToggle] = useState(false);

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    function openNav() {
        document.getElementById("side-menu").style.width = "30px";
        document.getElementById("App").style.marginRight = "30px";
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    function closeNav() {
        document.getElementById("side-menu").style.width = "0";
        document.getElementById("App").style.marginRight = "0";
    }


    //navbar animation
    useEffect(() => {

        let navbarPlayed = sessionStorage.getItem("navbarPlayed")
        if (!navbarPlayed) {

            let navTl = gsap.timeline({
                onComplete: () => {
                    sessionStorage.setItem("navbarPlayed", true)
                }
            })

                //landing animation from top for navbar
                .fromTo(navRef.current, { y: '-100%', opacity: 0 }, { delay: 4, y: "0%", opacity: 1, duration: 1 })

            navTl.play();
        }


    });

    //title animation
    useEffect(() => {
        gsap.fromTo(midRef.current, { x: "0%", opacity: 1, }, {
            x: "25%",
            opacity: 0, scrollTrigger: {
                trigger: "body",
                start: "top -10%",
                end: "bottom -10%",
                toggleActions: "play none reverse none",

            }
        })

    })

    return (
        <nav className='navbar' ref={navRef}>
            <div className="menu">
                <Menu />
            </div>
            <div className="left"></div>
            <div className="right">
                <div className="navlink">
                    <div role="list" className="hashlink"><HashLink to="/#home">HOME</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/#about">ABOUT</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/#portfolio">PORTFOLIO</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/#project">PROJECT</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/#contact">CONTACT</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/blogs">BLOG</HashLink></div>
                </div>
                <div className="icon">
                    <div className="darkmode-button">
                        <DarkMode></DarkMode>
                    </div>
                    <div className="menubar" onClick={() => setToggle(!toggle)}>
                        {toggle ? <i class="fas fa-times" onClick={() => closeNav()} /> : <i class="fas fa-bars" onClick={() => openNav()} />}
                    </div>
                    <div className="language">
                        <Language></Language>
                    </div>
                </div>
            </div>
        </nav>
    )
}
