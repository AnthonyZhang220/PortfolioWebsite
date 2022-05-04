import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



import { ThemeProvider, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { skillData } from './SkillData'

import "./Skill.scss"

library.add(fab);
library.add(fas);


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 1,

    },
}));

export default function Skill() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const skillTitleRef = useRef();
    const skillRef = useRef();
    const [skillTypes, setSkillTypes] = useState("All");

    const theme = useTheme();

    const skillCategories = [
        {
            type: "All",
            icon: 'filter',
            description: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. "
        },
        {
            type: "Frontend",
            icon: 'code',
            description: "Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.The objective of designing a site is to ensure that when the users open up the site they see the information in a format that is easy to read and relevant. "
        },
        {
            type: "Backend",
            icon: 'server',
            description: "A back-end web developer is responsible for server-side web application logic and integration of the work front-end web developers do. Back-end developers usually write web services and APIs used by front-end developers and mobile application developers."
        },
        {
            type: "Framework",
            icon: 'layer-group',
        },
        {
            type: "Library",
            icon: 'folder-tree',
        },
        {
            type: "Tool",
            icon: 'screwdriver-wrench',
        },
    ]

    const isMobile = useMediaQuery('(max-width:800px)');

    useEffect(() => {
        const entryAnimation = gsap.fromTo(skillTitleRef.current, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: skillTitleRef.current,
                start: 'top bottom',
                // scrub: true,
            }
        });

        gsap.fromTo(skillTitleRef.current, { x: "30%" }, {
            x: "0%",
            scrollTrigger: {
                trigger: skillTitleRef.current,
                start: 'top bottom',
                scrub: 1,
            }
        });

        return () => {
            entryAnimation.scrollTrigger.kill();
        }
    }, [])

    useEffect(() => {
        const iconAnimation = gsap.fromTo(".skill-icon-container > *", 0.5, { y: 20, opacity: 0 }, {
            y: 0, opacity: 1,
            stagger: {
                grid: "auto",
                from: "x",
                each: 0.05
            },
            scrollTrigger: {
                trigger: ".skill-icon-container",
                start: 'top bottom'
            }
        })

        return () => iconAnimation.kill();
    })

    const handleChange = (event, newType) => {
        if (newType) {
            setSkillTypes(newType)
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <div className="skill">
                <div className="skill-section" ref={skillRef} id='skill'>
                    <div className="skill-title" ref={skillTitleRef}>
                        <Typography variant="h2">
                            Skill.&nbsp;
                        </Typography>
                        <Typography variant="h2" color="#6e6e73">
                            Technologies are always evolving, so am I.
                        </Typography>
                    </div>
                    <div className="technology">
                        <div className='categories'>
                            <Grid container
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 2,
                                        p: 1,
                                    },
                                }}
                            >
                                <Grid container justifyContent="center">
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            display: 'flex',
                                            border: (theme) => `1px solid ${theme.palette.divider}`,
                                            flexWrap: 'wrap',
                                            backgroundColor: "inherit",
                                            m: "0 auto",
                                        }}>
                                        <StyledToggleButtonGroup
                                            color="primary"
                                            value={skillTypes}
                                            exclusive
                                            onChange={handleChange}
                                            orientation={'horizontal'}
                                            size="large"
                                            sx={{ m: "0 auto", }}
                                        >
                                            {
                                                skillCategories?.map(({ type, icon }, index) => (
                                                    <ToggleButton value={type} key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                        {
                                                            isMobile ? <FontAwesomeIcon icon={`fa-solid fa-${icon}`} fontSize={20} key={index} /> :
                                                                <Grid container alignItems="center" display="flex" justifyContent="center" key={index}>
                                                                    <FontAwesomeIcon icon={`fa-solid fa-${icon}`} fontSize={20} />
                                                                    <Typography variant="h6" align='center' sx={{ ml: 1 }}>
                                                                        {type}
                                                                    </Typography>
                                                                </Grid>
                                                        }
                                                    </ToggleButton>
                                                ))
                                            }
                                        </StyledToggleButtonGroup>
                                    </Paper>
                                </Grid>
                                <Grid container>
                                    <Grid container justifyContent="center" alignItems="center">
                                        {
                                            skillData?.filter((type) => type.type.find(x => x === skillTypes)).map(({ name, src }, index) => (
                                                <>
                                                    <Grid item m={1} p={1} key={index} className="skill-icon-container">
                                                        <Grid item xs textAlign="center" className="skill-icon-item">
                                                            <img src={`assets/icon/${src}`} alt={`${src}`} width={isMobile ? "60px" : "80px"} height={isMobile ? "60px" : "80px"} />
                                                        </Grid>
                                                        <Grid item xs textAlign="center">
                                                            <Typography variant='h6' >
                                                                {name}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </>
                                            ))
                                        }
                                    </Grid>
                                    {/* <Grid container md={6} justifyContent="center" marginBottom="auto">
                                        <Typography variant="h4">
                                            {skillTypes}
                                        </Typography>
                                        {
                                            skillCategories?.filter(x => x.type === skillTypes).map(({ description }) => (
                                                <Typography variant="body1">
                                                    {description}
                                                </Typography>
                                            ))
                                        }
                                    </Grid> */}
                                </Grid>
                                {/* <Grid container item xs>
                                    {
                                        skillCategories?.map(({ type, icon }) => (
                                            <Grid item xs textAlign="center">
                                                <IconButton onClick={() => setSkillTypes(type)}>
                                                    <FontAwesomeIcon icon={`fa-solid fa-${icon}`} />
                                                </IconButton>
                                                <Typography variant="h6">
                                                    {type}
                                                </Typography>
                                            </Grid>
                                        ))
                                    }
                                </Grid> */}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div >
        </ThemeProvider >
    )
}