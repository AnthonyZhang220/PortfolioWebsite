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
    const aboutTextRef = useRef();



    useEffect(() => {
        const entryAnimation = gsap.fromTo(aboutTitleRef.current, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: aboutTitleRef.current,
                start: 'top bottom',
                // scrub: true,
            }
        });
        console.log(aboutTextRef.current)
        return () => {
            entryAnimation.scrollTrigger.kill();
        }
    }, [])

    useEffect(() => {
        const textAnimation = gsap.fromTo(aboutTextRef.current, { x: -50, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: aboutTextRef.current,
                start: 'top bottom',
                // scrub: true,
            }
        });
        return () => {
            textAnimation.scrollTrigger.kill();
        }
    });


    return (
        <div className='about' id="about">
            <div className="about-section">
                <div className="about-title" ref={aboutTitleRef}>
                    <Typography variant="h3">
                        About.&nbsp;
                    </Typography>
                    <Typography variant="h3" color="#6e6e73">
                        Get to know me, in a blink of an eye.
                    </Typography>
                </div>
                <div className="about-me">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: "column",
                    }}>
                        <Grid container sx={{
                            m: 2,
                            p: 4,
                        }}>
                            <Grid item xs={12} md={6} ref={aboutTextRef}>
                                <Typography textAlign='start' variant='h6' gutterBottom sx={{ lineHeight: '1.5' }}>
                                    {aboutText?.find(({ item }) => item === "Who I am").text}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            </Grid>
                        </Grid>
                        <Grid container sx={{
                            m: 2,
                            p: 4,
                        }}>
                            <Grid item xs={12} md={6}>
                            </Grid>
                            <Grid item xs={12} md={6} ref={aboutTextRef}>
                                <Typography textAlign='start' variant='h6' gutterBottom sx={{ lineHeight: '1.5' }}>
                                    {aboutText?.find(({ item }) => item === "Where I'm from").text}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{
                            m: 2,
                            p: 4,
                        }}>
                            <Grid item xs={12} md={6} ref={aboutTextRef}>
                                <Typography textAlign='start' variant='h6' gutterBottom sx={{ lineHeight: '1.5' }}>
                                    {aboutText?.find(({ item }) => item === "What I do").text}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        </div >
    )
}
