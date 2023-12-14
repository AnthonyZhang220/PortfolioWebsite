import { useEffect, useRef, useState, Fragment } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



import { styled } from '@mui/material/styles';
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


    const skillCategories = [
        {
            type: "All",
            icon: 'filter',
            description: ""
        },
        {
            type: "Frontend",
            icon: 'code',
            description: "2 year experience in frontend development with HTML, CSS, Javascript, and React.  "
        },
        {
            type: "Backend",
            icon: 'server',
            description: "1 year experience in backend development with Express, Axios, NodeJS. Familiar with RESTful API. "
        },
        {
            type: "Framework",
            icon: 'layer-group',
            description: "2 year experience in React and Express. Familiar with class and functional component as well as the use of hooks.",
        },
        {
            type: "Library",
            icon: 'folder-tree',
            description: "",
        },
        {
            type: "Tool",
            icon: 'screwdriver-wrench',
            description: "Familiar with workflow of Git, and version control. Package Management and Webpack configuration.",
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
                start: 'top 85%',
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
        <div className="skill" id='skill'>
            <div className="skill-section" ref={skillRef}>
                <div className="skill-title" ref={skillTitleRef}>
                    <Typography variant="h3" fontWeight="500">
                        Skill.&nbsp;
                    </Typography>
                    <Typography variant="h3" color="#6e6e73" fontWeight="500">
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
                                    m: 0.5,
                                    p: 0.5,
                                },
                            }}
                        >
                            <Grid container justifyContent="center" alignItems="center">
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
                                        size="medium"
                                        sx={{ m: "0 auto", }}
                                    >
                                        {
                                            skillCategories?.map(({ type, icon }, index) => (
                                                <ToggleButton value={type} key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                                    {
                                                        isMobile ? <FontAwesomeIcon icon={`fa-solid fa-${icon}`} fontSize={20} key={index} /> :
                                                            <Grid container alignItems="center" display="flex" justifyContent="center" key={index}>
                                                                <FontAwesomeIcon icon={`fa-solid fa-${icon}`} fontSize={20} />
                                                                <Typography variant="h6" align='center' fontWeight="bold" sx={{ ml: 1 }}>
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
                            <Grid container justifyContent="center" alignItems="center">
                                <Typography variant='h6' textAlign="center" fontWeight="500">
                                    {skillCategories?.find(x => x.type === skillTypes).description}
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center">
                                {
                                    skillData?.filter((type) => type.type.find(x => x === skillTypes)).map(({ name, src }, index) => (
                                        <Fragment key={index}>
                                            <Grid item m={1} p={1}
                                                className="skill-icon-container"
                                            >
                                                <Grid item xs textAlign="center" className="skill-icon-item" sx={{
                                                    backgroundColor: "#ffffff",
                                                    borderRadius: 5,
                                                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                                                    m: 0.5,
                                                    p: 1,
                                                }}>
                                                    <img src={`assets/icon/${src}`} alt={`${src}`} loading="lazy" width={isMobile ? "60px" : "80px"} height="auto" style={{ display: "block" }} />
                                                </Grid>
                                                <Grid item xs textAlign="center">
                                                    <Typography variant='body1' sx={{
                                                        textShadow: "0px 0px 6px rgba(255,255,255,0.7)"
                                                    }} fontWeight="bold">
                                                        {name}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Fragment>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}