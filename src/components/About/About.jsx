import React, { useState, useEffect, useRef } from 'react';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';

import Typography from '@mui/material/Typography';
import { Backdrop, Box } from '@mui/material';
import { aboutText as aboutData } from './aboutText';
import "./About.scss";

export default function About() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const aboutTitleRef = useRef(null);
    const [imageOpen, setImageOpen] = useState(false)
    useEffect(() => {
        const entryAnimation = gsap.fromTo(aboutTitleRef.current, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: aboutTitleRef.current,
                start: 'mid bottom',
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
        <Box className='about' id="about">
            <Box className="about-section">
                <Box className="about-title" ref={aboutTitleRef}>
                    <Typography variant="h3" fontWeight="500" >
                        About.&nbsp;
                    </Typography>
                    <Typography variant="h3" color="#6e6e73" fontWeight="500">
                        Get to know me, in a blink of an eye.
                    </Typography>
                </Box>
                <Box className="about-section-grid" >
                    <Box className='about-section-image'>
                        <Box className='about-section-text-title' >
                            <Typography textAlign='start' variant='h5' >
                                About me
                            </Typography>
                        </Box>
                        <Box className='about-section-text-body' >
                            <Typography textAlign='start' variant='h6' >
                                I'm Anthony. A Front End Engineer with two years of experience. I have written React, Typescript, C#. I thrive on crafting interactive, responsive, and user-friendly web applications that scale seamlessly. My journey is fueled by a self-driven passion for learning programming languages and staying abreast of modern web technologies.
                            </Typography>
                        </Box>
                        <Box className="about-section-image" onClick={() => setImageOpen(true)}>
                            <img src="assets/workspace.jpg" alt="workspaceimage" />
                        </Box>
                    </Box>
                    <Box className="about-section-text">
                        {aboutData?.map(({ title, text }, index) => (
                            <Box key={index}>
                                <Box className='about-section-text-title' >
                                    <Typography textAlign='start' variant='h5' >
                                        {title}
                                    </Typography>
                                </Box>
                                <Box className='about-section-text-body' >
                                    <Typography textAlign='start' variant='h6' >
                                        {text}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
            <EnlargeImage imageOpen={imageOpen} setImageOpen={setImageOpen} />
        </Box>
    )
}

export function EnlargeImage({ imageOpen, setImageOpen }) {
    return (
        <Backdrop open={imageOpen} onClick={() => setImageOpen(false)} sx={{ zIndex: 1000 }}>
            <img src="assets/workspace.jpg" alt="workspaceimage" style={{ maxWidth: "90%", objectFit: "contain", height: "auto", backgroundColor: "inherit" }} />
        </Backdrop>
    )
}
