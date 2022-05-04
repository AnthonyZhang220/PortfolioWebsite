import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';
import { aboutText } from './aboutText';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import useMediaQuery from '@mui/material/useMediaQuery';
import "./About.scss";


library.add(fab);
library.add(fas);




export default function About() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const isMobile = useMediaQuery('(max-width:600px)');

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

        gsap.fromTo(aboutTitleRef.current, { x: "-30%" }, {
            x: "0%",
            scrollTrigger: {
                trigger: aboutTitleRef.current,
                start: 'top bottom',
                scrub: true,
            }
        });

        return () => {
            entryAnimation.scrollTrigger.kill();
        }
    }, [])

    useEffect(() => {

        // gsap.to(".about-where-img", {
        //     scrollTrigger: {
        //         trigger: ".about-where-img",
        //         start: "0% 50%",
        //         scrub: 1,
        //         pin: true,
        //         markers: true,
        //     }
        // })
        return () => {
        }
    });

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

        gsap.to("#landscape3", {
            x: "50%", y: "50%", scrollTrigger: {
                trigger: ".about-where-img",
                start: "top center",
                scrub: 1,
            },
        })
        gsap.to("#landscape2", {
            x: "0%", y: "50%", scrollTrigger: {
                trigger: ".about-where-img",
                start: "top center",
                scrub: 1,
            }
        })
        gsap.to("#landscape1", {
            x: "-50%", y: "50%", scrollTrigger: {
                trigger: ".about-where-img",
                start: "top center",
                scrub: 1,
            }
        })
        gsap.to(".about-where-text", {
            y: "-100%", scrollTrigger: {
                trigger: ".about-where-section",
                start: "top center",
                scrub: 1,
                markers: true,
            }
        })
        gsap.fromTo(".about-who-text", { y: "0%" }, {
            y: "20%", scrollTrigger: {
                trigger: ".about-who-section",
                start: "top center",
                scrub: 1,
            }
        })

        gsap.to(".about-where-img", {
            y: 0, scrollTrigger: {
                trigger: ".about-where-section",
                start: "top top",
                end: "center center",
                markers: true,
            }
        })




        return () => {
            // imgScrollEffect.scrollTrigger.kill();
        }
    })


    return (
        <div className='about' id="about">
            <div className="about-section">
                <div className="about-title" ref={aboutTitleRef}>
                    <Typography variant="h2">
                        About.&nbsp;
                    </Typography>
                    <Typography variant="h2" color="#6e6e73">
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
                                {aboutText?.find(({ item }) => item === "Who I am").text}
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={12} className="about-who-img">
                            {/* <img src="assets/images/nature.jpg" alt="nature.jpg" /> */}
                        </Grid>
                    </Grid>
                    <Grid container className="about-where-section" sx={{ paddingTop: "100px" }}>
                        <Grid container sm={12} md={12} className="about-where-img">
                            <Grid item md={4}>
                                <img src="assets/images/mountain1.jpg" alt="landscape1.jpg" id="landscape1" />
                            </Grid>
                            <Grid item md={4}>
                                <img src="assets/images/mountain2.jpg" alt="landscape2.jpg" id="landscape2" />
                            </Grid>
                            <Grid item md={4}>
                                <img src="assets/images/mountain3.jpg" alt="landscape3.jpg" id="landscape3" />
                            </Grid>
                        </Grid>
                        <Grid container sm={12} md={12} className="about-where-text">
                            <Typography textAlign='start' variant='h3' sx={{ lineHeight: '2' }}>
                                {aboutText?.find(({ item }) => item === "Where I'm from").text}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Grid container sx={{
                            m: 2,
                            p: 4,
                        }}>
                            <Grid item xs={12} md={6} ref={aboutTextRef}>
                                <Typography textAlign='start' variant='h6' sx={{ lineHeight: '1.5' }}>
                                    {aboutText?.find(({ item }) => item === "What I do").text}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            </Grid>
                        </Grid> */}
                </Grid>
            </div>
        </div >
    )
}
