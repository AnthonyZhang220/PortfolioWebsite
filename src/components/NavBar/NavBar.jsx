import "./NavBar.scss"
import { useRef, useEffect } from "react";
import { gsap } from "gsap/all";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function NavBar() {

    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(navRef.current, { y: '-100%', opacity: 0 }, { delay: 1, y: "0%", opacity: 1, duration: 1 });
    })
    return (
        <Router>
            <nav className='navbar' ref={navRef}>
                <div className="left">
                    <div className="logo">
                        <h1>[A-Z]</h1>
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <div>
                        <h1><a href="#project">Project</a></h1>

                        </div>
                        <div>
                            
                        </div>
                        <h1><a href="#portfolio">Portfolio</a></h1>
                        <h1><Link to="/blogs">Blog</Link></h1>
                    </div>
                </div>
            </nav>
        </Router>
    )
}
