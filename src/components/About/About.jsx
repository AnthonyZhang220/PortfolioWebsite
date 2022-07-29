import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import "./About.scss";


library.add(fab);
library.add(fas);




export default function About() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const aboutTitleRef = useRef();



    useEffect(() => {
        const entryAnimation = gsap.fromTo(aboutTitleRef.current, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: aboutTitleRef.current,
                start: 'top bottom',
                // scrub: true,
            }
        });

        gsap.fromTo(aboutTitleRef.current, { x: "-10%" }, {
            x: "10%",
            scrollTrigger: {
                trigger: aboutTitleRef.current,
                start: 'top 85%',
                scrub: 1,
            }
        });

        return () => {
            entryAnimation.scrollTrigger.kill();
        }
    }, [])


    useEffect(() => {
        // const imgScrollEffect = gsap.timeline();

        // imgScrollEffect.fromTo(".about-where-img", { y: 0 }, {
        //     y: -100, scrollTrigger: {
        //         trigger: ".about-where-section",
        //         start: "top center",
        //         scrub: true,
        //         markers: true
        //     }
        // })

        gsap.fromTo(".about-where-text", { y: "10%" }, {
            y: "-20%", scrollTrigger: {
                trigger: ".about-where-section",
                start: "top center",
                scrub: 1,
            }
        })
        gsap.fromTo(".about-who-text", { y: "10%" }, {
            y: "-30%", scrollTrigger: {
                trigger: ".about-who-section",
                start: "top center",
                scrub: 1,
            }
        })

        return () => {
            // imgScrollEffect.scrollTrigger.kill();
        }
    })

    useEffect(() => {
        gsap.utils.toArray(".container").forEach((el) => {

            const image = el.querySelector('img.swipeimage'),
                setX = gsap.quickSetter(image, "x", "px"),
                setY = gsap.quickSetter(image, "y", "px"),
                align = e => {
                    const top = el.getBoundingClientRect().top;
                    setX(e.clientX);
                    setY(e.clientY - top);
                },
                startFollow = () => document.addEventListener("mousemove", align),
                stopFollow = () => document.removeEventListener("mousemove", align),
                fade = gsap.to(image, { autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow });

            el.addEventListener('mouseenter', (e) => {
                fade.play();
                startFollow();
                align(e);
            });

            el.addEventListener('mouseleave', () => fade.reverse());

        });
    })


    return (
        <div className='about' id="about">
            <div className="about-section">
                <div className="about-title" ref={aboutTitleRef}>
                    <Typography variant="h2" fontWeight="500" >
                        About.&nbsp;
                    </Typography>
                    <Typography variant="h2" color="#6e6e73" fontWeight="500">
                        Get to know me, in a blink of an eye.
                    </Typography>
                </div>
                <Grid container className="about-me" sx={{
                    m: 2,
                    p: 2,
                }}>
                    <Grid container className="about-who-section">
                        <Grid item sm={12} md={12} className="about-who-text" sx={{
                            m: 1,
                            p: 1,
                        }} >
                            <Typography textAlign='start' variant='h3' sx={{ lineHeight: '2' }}>
                                I'm Anthony Zhang. A motivated Front End Enigeneer based in New York City. I've spent the last 2 years learning and building websites from simply displaying information and content to dealing with complex state management and data manipulations.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container className="about-where-section">
                        <Grid item sm={12} md={12} className="about-where-text" sx={{
                            m: 1,
                            p: 1,
                        }}>
                            <Typography textAlign='start' variant='h3' sx={{ lineHeight: '2' }}>
                                Rather than having an education in Computer Science, at 18 years old without knowing where my passion was, I decided to pursue a bachelor's degree in Mathematics and Economics from New York University. As a person who always want to mess around with the computer, my interest in software development was buried in my heart since I got my first pc in early childhood. Until recent years, it was uncovered.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div >
    )
}
