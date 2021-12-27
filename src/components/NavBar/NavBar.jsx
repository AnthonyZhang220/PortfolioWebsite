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


        //scroll smooth effect on hashlink
        const hashLinks = gsap.utils.toArray(".mid hashlink");

        hashLinks.forEach((links, index) => {
            links.addEventListener("click", () => {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: "#section" + (index + 1), offsetY: 0 }
                });
            });
        });

        const sections = gsap.utils.toArray("section");
        sections.forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top 50%",
                // end: "bottom 80%",
                markers: true,
                onEnter: () => {
                    gsap.set(hashLinks[i], { scale: 1.3 });
                },
                onEnterBack: () => {
                    gsap.set(hashLinks[i], { scale: 1.3 });

                }

                // onLeave: () => {
                //     if (hashLinks[i + 1]) {
                //         gsap.to(hashLinks[i + 1], { scale: 1.3 });
                //         gsap.to(hashLinks[i], { scale: 1 });
                //     }
                // },
                // onEnterBack: () => {
                //     gsap.to(hashLinks[i], { scale: 1.3 });
                //     if (hashLinks[i + 1]) {
                //         gsap.to(hashLinks[i + 1], { scale: 1.1 });
                //     }
                // },
            })
        });
    })



    //change background color when scroll
    // gsap.to(navRef.current, {
    //     backgroundColor: getMode() === "enabled" ? "#121212" : "white",
    //     scrollTrigger: {
    //         trigger: "body",
    //         start: "60px",
    //         end: "max",
    //         toggleActions: "play play play play",
    //     }
    // });

    return (
        <nav className='navbar' ref={navRef}>
            <div className="left"></div>
            <div className="mid">
                <div role="list" className="hashlink"><HashLink to="/#intro">HOME</HashLink></div>
                <div role="list" className="hashlink"><HashLink to="/#about">ABOUT</HashLink></div>
                <div role="list" className="hashlink"><HashLink to="/#portfolio">PORTFOLIO</HashLink></div>
                <div role="list" className="hashlink"><HashLink to="/#project">PROJECT</HashLink></div>
                <div role="list" className="hashlink"><HashLink to="/#contact">CONTACT</HashLink></div>
                <div role="list" className="hashlink"><HashLink to="/blogs">BLOG</HashLink></div>
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
