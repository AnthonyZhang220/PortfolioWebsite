import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutText } from './aboutText';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';

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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { ThemeProvider, styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';



import "./About.scss";


library.add(fab);
library.add(fas);


const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#845fcc' : '#845fcc',
    height: 4,
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
        height: 4,
        width: '110%'
    },
    '& .MuiSlider-mark': {
        backgroundColor: '#845fcc',
        height: 10,
        width: 2,
        '&.MuiSlider-markActive': {
            opacity: 1,
            backgroundColor: 'currentColor',
        },
    },
    '& .MuiSlider-markLabel': {
        fontSize: '15px'
    },
}));


export default function About() {
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

    const theme = useTheme();
    const [value, setValue] = useState(aboutText[0].item);


    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
    };


    const skillRef = useRef();

    // useEffect(() => {
    //     gsap.fromTo(skillRef.current,
    //         { opacity: 0 }, {
    //         opacity: 1, duration: 5, scrollTrigger: {
    //             trigger: skillRef.current,
    //             start: "top bottom"
    //         }
    //     }
    //     )
    // })

    return (
        <div className='about' id="about">
            <div className="about-section">
                <div className="about-title">
                    <h2>
                        About.&nbsp;
                    </h2>
                    <span className='about-subtitle'>
                        Get to know me, in a blink of an eye.
                    </span>
                </div>
                <div className="about-me">
                    <div className="summary">
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'nowrap',
                            width: '100%',
                        }}>
                            <Box sx={{ display: 'flex', minWidth: '150px' }}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="secondary"
                                    textColor="inherit"
                                    sx={{ borderBottom: 1, borderColor: 'divider', overflow: 'visiable' }}
                                >
                                    {
                                        aboutText?.map(({ item }) => (
                                            <Tab label={item} key={item} value={item} />
                                        ))
                                    }
                                </Tabs>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                '& > :not(style)': {
                                    m: 2,
                                },
                            }}>
                                <Typography align='center' variant='h6' gutterBottom>
                                    {aboutText.find(({ item }) => item === value).text}
                                </Typography>
                            </Box>
                        </Box>
                    </div>
                    <div className="summary-space">
                    </div>
                </div>
            </div>
            <div className="skill-section" ref={skillRef}>
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
                                flex: '0 0 70%',
                                width: '100%',
                                '& > :not(style)': {
                                    m: 4,
                                    p: 2,
                                },
                            }}
                        >
                            <ThemeProvider theme={theme}>
                                {/* front end */}
                                <Paper elevation={1}
                                    className='skill-paper'
                                    sx={{
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
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FontAwesomeIcon icon="fa-solid fa-code" fontSize={40} />
                                        <Typography variant="h5" component="div">
                                            Front End
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
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
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/html.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    {/* <FontAwesomeIcon icon="fa-brands fa-css3-alt" fontSize={30} /> */}
                                                    <Typography variant="h6" component="div">
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
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/css.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                {/* <Divider variant='middle' textAlign='center'>
                                                <Chip label="CSS3"></Chip>
                                            </Divider> */}
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Javascript
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={75}
                                                        step={25}
                                                        valueLabelDisplay="on"
                                                        marks={marks}
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/js_official.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                {/* back end */}
                                <Paper elevation={1}
                                    className='skill-paper'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        borderRadius: '18px',
                                        minWidth: '320px',
                                        background: 'linear-gradient(to bottom right, rgba(219,234,255,.8) 20%, rgba(243,223,222,.5) 80%), linear-gradient(to bottom left, rgba(247,250,255,.5) 100%, rgba(219,207,243,0.8) 20%)',
                                        '& > :not(style)': {
                                            m: 1,
                                            p: 1,
                                        },
                                    }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FontAwesomeIcon icon="fa-solid fa-server" fontSize={40} />
                                        <Typography variant="h5" component="div">
                                            Back End
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Node JS
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        marks={marks}
                                                        valueLabelDisplay="on"
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/node.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Express
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        marks={marks}
                                                        valueLabelDisplay="on"
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/node.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Next.js
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        marks={marks}
                                                        valueLabelDisplay="on"
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/node.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                {/* framework */}
                                <Paper elevation={1}
                                    className='skill-paper'
                                    sx={{
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
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FontAwesomeIcon icon="fa-solid fa-layer-group" fontSize={40} />
                                        <Typography variant="h5" component="div">
                                            Framework
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
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
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/reactjs.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Express JS
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        marks={marks}
                                                        step={25}
                                                        defaultValue={50}
                                                        valueLabelDisplay="on"
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/node.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                {/* library */}
                                <Paper elevation={1}
                                    className='skill-paper'
                                    sx={{
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
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FontAwesomeIcon icon="fas fa-box-open" fontSize={40} />
                                        <Typography variant="h5" component="div">
                                            Library
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Axios
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        valueLabelDisplay="on"
                                                        marks={marks}
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/node.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Material UI
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        valueLabelDisplay="on"
                                                        marks={marks}
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <FontAwesomeIcon icon="fa-brands fa-npm" fontSize={30} />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        SCSS
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        valueLabelDisplay="on"
                                                        marks={marks}
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/scss.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Paper>
                                {/* tools */}
                                <Paper elevation={1}
                                    className='skill-paper'
                                    sx={{
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
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" fontSize={40} />
                                        <Typography variant="h5" component="div">
                                            Tool
                                        </Typography>
                                    </Box>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={2}>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Git
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        valueLabelDisplay="on"
                                                        marks={marks}
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/git.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        NPM
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        valueLabelDisplay="on"
                                                        marks={marks}
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/npm.svg" height='50px' width='50px' alt="" />
                                                                </div>
                                                            )
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6" component="div">
                                                        Babel
                                                    </Typography>
                                                    <IOSSlider
                                                        aria-label="ios slider"
                                                        defaultValue={50}
                                                        step={25}
                                                        valueLabelDisplay="on"
                                                        marks={marks}
                                                        valueLabelFormat={() => {
                                                            return (
                                                                <div style={{ textAlign: "center", transform: 'translateY(10px)' }}>
                                                                    <img src="assets/icon/babel.svg" height='50px' width='50px' alt="" />
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
            </div>
        </div >
    )
}
