import "./Intro.scss"
import { useEffect, useRef, useState } from "react";
import { init } from 'ityped';
import { gsap } from "gsap/all";
import Canvas from "../Canvas/Canvas";

export default function Intro() {

    const textRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const arrowdownRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(leftRef.current, {
            x: '25%', opacity: 0
        }, { x: '50%', opacity: 1, duration: 1.5 }
        )
    })

    useEffect(() => {
        gsap.fromTo(rightRef.current, {
            x: '25%', opacity: 0
        }, { x: "0%", opacity: 1, duration: 1.5 });
    })

    useEffect(() => {
        gsap.fromTo(arrowdownRef.current, { y: "-100%", opacity: 0 }, { delay: 2, y: "0%", opacity: 1, duration: 1 });
    })

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'Engineer']
        });
    }, [])


    const [clicked, setClicked] = useState(false);


    return (
        <div className='intro' id='intro'>
            <Canvas id="canvas" />
            <div className="left" ref={leftRef}>
                <div className="imgContainer">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/anthony-xiangyu-zhang/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin fa-fw"></i></a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/AnthonyZhang220" target="_blank" rel="noreferrer"><i class="fab fa-github fa-fw"></i></a>
                    </div>
                    <div className="stackoverflow">
                        <a href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer"> <i class="fab fa-stack-overflow fa-fw"></i></a>
                    </div>
                </div>
            </div>
            <div className="right" ref={rightRef}>
                <div className="wrapper">
                    <h2>Welcome, I'm</h2>
                    <h1>Anthony Zhang</h1>
                    <h3>Frontend <span ref={textRef}></span></h3>
                    <div className="email">
                        <button type='button' onClick={clicked}>Send me an Email</button>
                    </div>
                </div>
            </div>
            <div className="arrowdown">
                <a href="#portfolio">
                    <i className="fas fa-chevron-down" ref={arrowdownRef}></i>
                </a>
            </div>
        </div>
    )
}