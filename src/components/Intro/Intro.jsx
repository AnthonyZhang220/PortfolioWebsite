import "./Intro.scss"
import { useEffect, useRef } from "react";
import { init } from 'ityped';
import { gsap } from "gsap/all";
import Canvas from "../Canvas/Canvas";
import BackToTop from "../BackToTop/BackToTop";
import { ScrollToPlugin } from 'gsap/all';

export default function Intro() {

    const textRef = useRef(null);
    const leftRef = useRef(null);
    const midRef = useRef(null);
    const rightRef = useRef(null);
    const arrowdownRef = useRef(null);
    const backtotopRef = useRef(null);
    const introRef = useRef(null);
    const hiRef = useRef(null);
    const happyRef = useRef(null);

    gsap.registerPlugin(ScrollToPlugin);


    
    //entry animation
    useEffect(() => {
        let entryPlayed = sessionStorage.getItem("hasMyAnimationPlayed")
        let introPlayed = sessionStorage.getItem("introPlayed");
        
        //entry timeline
        const entryTimeline = gsap.timeline({
            onComplete: () => {
                console.log(sessionStorage)
                sessionStorage.setItem("hasMyAnimationPlayed", true)

            }
        })

            //show Hi
            .set(hiRef.current, { opacity: 0 })
            .set(happyRef.current, { opacity: 0 })

            .to(hiRef.current,
                { opacity: 1, duration: 1 }
            )

            .to(hiRef.current,
                { opacity: 0, duration: 1 }
            )

            .to(happyRef.current, { opacity: 1, duration: 1 })
            .to(happyRef.current, { opacity: 0, duration: 1 })

            .set(hiRef.current, { opacity: 0 })
            .set(happyRef.current, { opacity: 0 })


        //intro timeline
        const introTimeline = gsap.timeline({
            onComplete: () => {
                sessionStorage.setItem("introPlayed", true)
            }
        })
            //mid flexbox
            .fromTo(midRef.current, {
                y: '25%', opacity: 0
            }, { y: "0%", opacity: 1, duration: 1.5 })

            //right flexbox
            .fromTo(rightRef.current, {
                x: '25%', opacity: 0
            }, { x: '0%', opacity: 1, duration: 1.5 }
            )
            // show canvas in s
            .fromTo("#canvas", { opacity: 0 },
                {
                    opacity: 0.3, duration: 2
                })

        if (entryPlayed) {
            entryTimeline.kill();
            introTimeline.play();
        } else {
            const firstTimeTimeline = gsap.timeline();
            entryTimeline.add(introTimeline);
            firstTimeTimeline.play();
        }

        if (!introPlayed) {
            introTimeline.kill()
        }
    })


    //arrow down disappear on scroll
    useEffect(() => {
        gsap.fromTo(arrowdownRef.current, { y: "0%", opacity: 1 }, {
            y: "50%", opacity: 0, duration: 3,
            scrollTrigger: {
                trigger: introRef.current,
                start: "center top",
            }
        })
    })


    function backtotop() {
        console.log("clicked")
        gsap.to(window, { scrollTo: { y: 0 } });
    }

    //back to top show when scorlling down
    useEffect(() => {
        gsap.set(backtotopRef.current, { y: 100 });

        gsap.to(backtotopRef.current, {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
                trigger: "body",
                start: "top -50%",
                end: "top -50%",
                toggleActions: "play none reverse none",
            }
        });
    })

    //role animation
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer', 'Engineer']
        });
    }, [])




    return (
        <div className='intro' id='intro' ref={introRef}>
            <Canvas id="canvas"></Canvas>
            <div className="hi" ref={hiRef}>Hi</div>
            <div className="happy" ref={happyRef}>I'm happy you're here</div>

            <div className="left" ref={leftRef}>
            </div>
            <div className="mid" ref={midRef}>
                <div className="wrapper">
                    <div className="top-spacing"></div>
                    <div className="greetings">
                        <h2>Welcome, I'm</h2>
                        <h1>Anthony Zhang</h1>
                        <h3>Frontend <span ref={textRef}></span></h3>
                    </div>
                    <div className="bottom-spacing">
                        <a href="#portfolio">
                            <div className="arrowdown" ref={arrowdownRef}>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="right" ref={rightRef}>
                <div className="imgContainer">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/anthony-xiangyu-zhang/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/AnthonyZhang220" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                    <div className="stackoverflow">
                        <a href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer"> <i className="fab fa-stack-overflow"></i></a>
                    </div>
                </div>
            </div>
            <BackToTop className="backtotop" ref={backtotopRef} onClick={backtotop}></BackToTop>
        </div>

    )
}