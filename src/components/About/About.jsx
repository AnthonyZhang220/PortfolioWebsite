import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import Slider from '@mui/material/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


import "./About.scss";


library.add(fab);
library.add(fas);

export default function About() {
    gsap.registerPlugin(ScrollTrigger);

    const marks = [
        {
            value: 'beginner',
            label: 'beginner',
        },
        {
            value: 'beginner',
            label: 'beginner',
        },
        {
            value: 'beginner',
            label: 'beginner',
        },
        {
            value: 'beginner',
            label: 'beginner',
        },

    ]

    const aboutRef = useRef();

    useEffect(() => {
        gsap.fromTo(aboutRef.current,
            { opacity: 0 }, {
            opacity: 1, duration: 5, scrollTrigger: {
                trigger: aboutRef.current,
                start: "top bottom"
            }
        }
        )
    })

    return (
        <div className='about' id="about" ref={aboutRef}>
            <div className="title-aboutme">
                <h2>
                    About.
                </h2>
                <span>

                </span>
            </div>
            <div className="about-me">
                <div className="illustration">
                    <img src="assets/images/frontend-developer-illustration-concept-vector.jpg" alt="illustration avatar" />
                </div>
                <div className="summary">
                    <p>
                        About me description section.
                    </p>
                </div>
            </div>
            <div className="title-skills">
                <h2>Skills.&nbsp;</h2>
                <span>Technologies are always evolving, so am I.</span>
            </div>
            <div className="technology">
                <div className='categories'>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 1,
                            },
                        }}
                    >
                        <Paper elevation={3} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 1,
                            },
                        }}>
                            <FontAwesomeIcon icon="fa-solid fa-code" fontSize={40} />
                            <Typography variant="h5" component="div">
                                Front End
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="row" spacing={2}>
                                        <Grid item>
                                            <FontAwesomeIcon icon="fa-brands fa-html5" fontSize={30} />
                                            <Typography variant="body2" component="div">
                                                HTML5
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <FontAwesomeIcon icon="fa-brands fa-css3-alt" fontSize={30} />
                                            <Typography variant="body2" component="div">
                                                CSS3
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <FontAwesomeIcon icon="fa-brands fa-js-square" fontSize={30} />
                                            <Typography variant="body2" component="div">
                                                Javascript
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Slider
                                aria-label="Always visible"
                                defaultValue={80}
                                step={20}
                                valueLabelDisplay="on"
                            />
                        </Paper>
                        <Paper elevation={3} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 1,
                            },
                        }}>
                            <FontAwesomeIcon icon="fa-solid fa-server" fontSize={40} />
                            <Typography variant="h5" component="div">
                                Back End
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item>
                                            <FontAwesomeIcon icon="fa-brands fa-node" fontSize={30} />
                                            <Typography variant="body2" component="div">
                                                Node.js
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={3} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 1,
                            },
                        }}>
                            <FontAwesomeIcon icon="fa-solid fa-layer-group" fontSize={40} />
                            <Typography variant="h5" component="div">
                                Frameworks
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item>
                                            <FontAwesomeIcon icon="fa-brands fa-react" fontSize={30} />
                                            <Typography variant="body2" component="div">
                                                React
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={3} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 1,
                            },
                        }}>
                            <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" fontSize={40} />
                            <Typography variant="h5" component="div">
                                Tools
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item>
                                            <FontAwesomeIcon icon="fa-brands fa-git-alt" fontSize={30} />
                                            <Typography variant="body2" component="div">
                                                Git
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={3} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 1,
                            },
                        }}>
                            <FontAwesomeIcon icon="fa-solid fa-database" fontSize={40} />
                            <Typography variant="h5" component="div">
                                Database
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item>
                                            <FontAwesomeIcon icon="fa-solid fa-database" fontSize={30} />
                                            <Typography variant="body2" component="div">
                                                SQL
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </div>
            </div>
            <div></div>
        </div>
    )
}
