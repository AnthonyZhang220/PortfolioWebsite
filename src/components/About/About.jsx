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
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

import { ThemeProvider, styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';



import "./About.scss";


library.add(fab);
library.add(fas);


const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#845fcc' : '#845fcc',
    height: 2,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: '#fff',
        boxShadow: iOSBoxShadow,
        '&:focus, &:hover, &.Mui-active': {
            boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    '& .MuiSlider-valueLabel': {
        fontSize: 12,
        fontWeight: 'normal',
        top: -6,
        backgroundColor: 'unset',
        color: theme.palette.text.primary,
        '&:before': {
            display: 'none',
        },
        '& *': {
            background: 'transparent',
            color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        },
    },
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-rail': {
        opacity: 0.5,
        backgroundColor: '#845fcc',
        height: 2,
    },
    '& .MuiSlider-mark': {
        backgroundColor: '#845fcc',
        height: 8,
        width: 2,
        '&.MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: 'currentColor',
        },
    },
}));

export default function About(theme) {
    gsap.registerPlugin(ScrollTrigger);

    const marks = [
        {
            value: 0,
            label: '',
        },
        {
            value: 25,
            label: '6 months',
        },
        {
            value: 50,
            label: '1 year',
        },
        {
            value: 75,
            label: '2 years',
        },
        {
            value: 100,
            label: '3 years',
        }

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
                            width: '90%',
                            '& > :not(style)': {
                                m: 4,
                                p: 2,
                            },
                        }}
                    >
                        <ThemeProvider theme={theme}>
                            <Paper elevation={1} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '18px',
                                flexWrap: 'wrap',
                                minWidth: '320px',
                                background: 'linear-gradient(to bottom right, rgba(219,234,255,.8) 20%, rgba(243,223,222,.5) 80%), linear-gradient(to bottom left, rgba(247,250,255,.5) 100%, rgba(219,207,243,0.8) 20%)',
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
                                        <Grid item xs container direction="column" spacing={2}>
                                            <Grid item xs direction="row" spacing={2}>
                                                <Typography variant="body2" component="div">
                                                    HTML5
                                                </Typography>
                                                <IOSSlider
                                                    aria-label="ios slider"
                                                    defaultValue={75}
                                                    valueLabelDisplay="on"
                                                    step={25}
                                                    marks={marks}
                                                    valueLabelFormat={() => {
                                                        return (
                                                            <div style={{ textAlign: "center", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <FontAwesomeIcon icon="fa-brands fa-html5" fontSize={30} />
                                                            </div>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                {/* <FontAwesomeIcon icon="fa-brands fa-css3-alt" fontSize={30} /> */}
                                                <Typography variant="body2" component="div">
                                                    CSS3
                                                </Typography>
                                                <IOSSlider
                                                    aria-label="ios slider"
                                                    marks={marks}
                                                    step={25}
                                                    defaultValue={75}
                                                    valueLabelDisplay="on"
                                                    valueLabelFormat={() => {
                                                        return (
                                                            <div style={{ textAlign: "center", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                <FontAwesomeIcon icon="fa-brands fa-css3-alt" fontSize={30} />
                                                            </div>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                            {/* <Divider variant='middle' textAlign='center'>
                                                <Chip label="CSS3"></Chip>
                                            </Divider> */}
                                            <Grid item>
                                                <Typography variant="body2" component="div">
                                                    Javascript
                                                </Typography>
                                                <IOSSlider
                                                    aria-label="ios slider"
                                                    defaultValue={50}
                                                    step={25}
                                                    valueLabelDisplay="on"
                                                    marks={marks}
                                                    valueLabelFormat={() => {
                                                        return (
                                                            <div style={{ textAlign: "center" }}>
                                                                <FontAwesomeIcon icon="fa-brands fa-js-square" fontSize={30} />
                                                            </div>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper elevation={2} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                borderRadius: '18px',
                                minWidth: '320px',
                                background: 'linear-gradient(to bottom right, rgba(219,234,255,.8) 20%, rgba(243,223,222,.5) 80%), linear-gradient(to bottom left, rgba(247,250,255,.5) 100%, rgba(219,207,243,0.8) 20%)',
                                '&::before': {
                                    // content: '""',
                                    display: 'block',
                                    height: '100%',
                                    background: 'linear-gradient(to bottom right, rgb(247,250,255), rgb(219,207,243))',
                                    mask: 'linear-gradient(to top left,#ffffff, #ffffff)',
                                },
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
                                                <Typography variant="body2" component="div">
                                                    Node.js
                                                </Typography>
                                                <IOSSlider
                                                    aria-label="ios slider"
                                                    defaultValue={50}
                                                    step={25}
                                                    marks={marks}
                                                    valueLabelDisplay="on"
                                                    valueLabelFormat={() => {
                                                        return (
                                                            <div style={{ textAlign: "center" }}>
                                                                <FontAwesomeIcon icon="fa-brands fa-node" fontSize={30} />
                                                            </div>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper elevation={1} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                minWidth: '320px',
                                borderRadius: '18px',
                                background: 'linear-gradient(to bottom right, rgba(219,234,255,.8) 20%, rgba(243,223,222,.5) 80%), linear-gradient(to bottom left, rgba(247,250,255,.5) 100%, rgba(219,207,243,0.8) 20%)',
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
                                                <Typography variant="body2" component="div">
                                                    React
                                                </Typography>
                                                <IOSSlider
                                                    aria-label="ios slider"
                                                    marks={marks}
                                                    step={25}
                                                    defaultValue={50}
                                                    valueLabelDisplay="on"
                                                    valueLabelFormat={() => {
                                                        return (
                                                            <div style={{ textAlign: "center" }}>
                                                                <FontAwesomeIcon icon="fa-brands fa-react" fontSize={30} />
                                                            </div>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper elevation={1} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                minWidth: '320px',
                                borderRadius: '18px',
                                background: 'linear-gradient(to bottom right, rgba(219,234,255,.8) 20%, rgba(243,223,222,.5) 80%), linear-gradient(to bottom left, rgba(247,250,255,.5) 100%, rgba(219,207,243,0.8) 20%)',
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
                                                <Typography variant="body2" component="div">
                                                    Git
                                                </Typography>
                                                <IOSSlider
                                                    aria-label="ios slider"
                                                    defaultValue={25}
                                                    step={25}
                                                    valueLabelDisplay="on"
                                                    marks={marks}
                                                    valueLabelFormat={() => {
                                                        return (
                                                            <div style={{ textAlign: "center" }}>
                                                                <FontAwesomeIcon icon="fa-brands fa-git-alt" fontSize={30} />
                                                            </div>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper elevation={1} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                minWidth: '320px',
                                borderRadius: '18px',
                                background: 'linear-gradient(to bottom right, rgba(219,234,255,.8) 20%, rgba(243,223,222,.5) 80%), linear-gradient(to bottom left, rgba(247,250,255,.5) 100%, rgba(219,207,243,0.8) 20%)',
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
                                                <Typography variant="body2" component="div">
                                                    SQL
                                                </Typography>
                                                <IOSSlider
                                                    aria-label="ios slider"
                                                    defaultValue={25}
                                                    marks={marks}
                                                    step={25}
                                                    valueLabelDisplay="on"
                                                    valueLabelFormat={() => {
                                                        return (
                                                            <div style={{ textAlign: "center" }}>
                                                                <FontAwesomeIcon icon="fa-solid fa-database" fontSize={30} />
                                                            </div>
                                                        )
                                                    }}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </ThemeProvider>
                    </Box>
                </div>
            </div>
            <div></div>
        </div >
    )
}
