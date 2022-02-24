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


import "./About.scss";


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
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                p: 1,
                            },
                        }}
                    >
                        <Paper elevation={3}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <i className="fas fa-code"></i>
                                    <Typography variant="h5" component="div">
                                        Front End
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="row" spacing={2}>
                                                <Grid item>
                                                    <i className="fab fa-html5"></i>
                                                    <Typography variant="body2">
                                                        HTML5
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <i className="fab fa-css3-alt"></i>
                                                    <Typography variant="body2">
                                                        CSS3
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <i className="fab fa-js-square"></i>
                                                    <Typography variant="body2">
                                                        Javascript
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Slider
                                        aria-label="Always visible"
                                        defaultValue={80}
                                        step={10}
                                        marks={marks}
                                        valueLabelDisplay="on"
                                    />
                                </AccordionDetails>
                            </Accordion>
                        </Paper>
                        <Paper elevation={3}>
                            <i className="fas fa-server"></i>
                            <Typography variant="h5" component="div">
                                Back End
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item>
                                            <i className="fab fa-node-js"></i>
                                            <Typography variant="body2">
                                                Node.js
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={3}>
                            <i className="fas fa-layer-group"></i>
                            <Typography variant="h5" component="div">
                                Frameworks
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item>
                                            <i className="fab fa-react"></i>
                                            <Typography variant="body2">
                                                React
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={3}>
                            <i className="fas fa-tools"></i>
                            <Typography variant="h5" component="div">
                                Tools
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item>
                                            <i className="fab fa-git-alt"></i>
                                            <Typography variant="body2">
                                                Git
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={3}>
                            <i className="fas fa-database"></i>
                            <Typography variant="h5" component="div">
                                Database
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item>
                                            <i className="fab fa-react"></i>
                                            <Typography variant="body2">
                                                SQL
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Paper elevation={3}>

                        </Paper>
                    </Box>
                    <div className='frontend'>
                        <div className="category-name">
                            Front End
                            <div className="catogory-icon">
                            </div>
                        </div>
                        <div className="tech-icons">
                            <div className="tech-name">
                                HTML5
                            </div>
                            <div className="tech-name">
                                CSS3
                            </div>
                            <div className="tech-name">
                                Javascript
                            </div>
                        </div>
                    </div>
                    <div className="backend">
                        <div className="category-name">
                            Back End
                            <div className="catogory-icon">
                            </div>
                        </div>
                        <div className="tech-icons">
                            <div className="tech-name">
                                Node.js
                            </div>
                        </div>
                    </div>
                    <div className="frameworks">
                        <div className="category-name">
                            Frameworks
                            <div className="catogory-icon">
                            </div>
                        </div>
                        <div className="tech-icons">
                            <div className="tech-name">
                                React
                            </div>
                        </div>
                    </div>
                    <div className="tools">
                        <div className="category-name">
                            Tools
                            <div className="catogory-icon">
                            </div>
                        </div>
                        <div className="tech-icons">
                            <div className="tech-name">
                                Git
                            </div>
                        </div>
                    </div>
                    <div className="database">
                        <div className="category-name">
                            Database
                            <div className="catogory-icon">
                            </div>
                        </div>
                        <div className="tech-icons">

                        </div>


                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
