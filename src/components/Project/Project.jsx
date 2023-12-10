import { useEffect, useRef, useState, Suspense, lazy, Fragment } from "react";
import { projectdata } from "./ProjectData.js"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import useMediaQuery from '@mui/material/useMediaQuery';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import useCustomCursor from "../../hooks/useCustomCursor.js";

import "./Project.scss"
import "../../global.scss"



const ProjectDetails = lazy(() => import("./ProjectDetails"))


export default function Project() {

    const matches = useMediaQuery('(max-width:600px)');

    gsap.registerPlugin(ScrollTrigger);

    const [projectdetails, setProjectdetails] = useState({})

    const projectContainerRef = useRef();
    const projectTitleRef = useRef();

    const { handleLeft, handleRight, projectScrollerRef } = useCustomCursor()

    // project section landing
    useEffect(() => {
        const animation = gsap.fromTo(projectScrollerRef.current, {
            x: "50%"
        }, {
            x: "0%", duration: 1,
            scrollTrigger: {
                trigger: projectContainerRef.current,
                start: "top bottom"
            },
        });

        return () => animation.scrollTrigger.kill();
    }, [projectScrollerRef]);

    // project section entry
    useEffect(() => {
        const entryAnimation = gsap.fromTo(projectTitleRef.current, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: projectContainerRef.current,
                start: 'top bottom',
                // scrub: true,
            }
        });
        gsap.fromTo(projectTitleRef.current, { x: "20%" }, {
            x: "0%",
            scrollTrigger: {
                trigger: projectContainerRef.current,
                start: 'top bottom',
                scrub: 1,
            }
        });

        return () => {
            entryAnimation.scrollTrigger.kill();
        }
    }, [projectScrollerRef])


    const [open, setOpen] = useState(false);

    const handleDrawerOpen = ({ id, title, subtitle, screenshots, thumbnails, overview, roles, tech, WebsiteUrl, GitHubUrl, library, index, process, results, features }) => () => {

        setOpen(!open);
        setProjectdetails({ id, title, subtitle, screenshots, thumbnails, overview, roles, tech, WebsiteUrl, GitHubUrl, library, index, process, results, features });



        if (open) {
            document.getElementById('main').style.transform = 'scale(1)';
            document.getElementById('main').style.transition = '0.5s';
        } else {
            document.getElementById('main').style.transform = 'scale(0.9)';
            document.getElementById('main').style.transition = '0.5s';
        }


    };

    return (
        <Fragment>
            <div className='project' id='project'>
                <div className='project-title' ref={projectTitleRef}>
                    <Typography variant="h2" fontWeight="500" >
                        Project.&nbsp;
                    </Typography>
                    <Typography variant="h2" color="#6e6e73" fontWeight="500" >
                        Take a took at what I have built, in the past.
                    </Typography>
                </div>
                <div className="project-wrapper" ref={projectContainerRef} >
                    <div className='card-scroller-crop'>
                        <div className="card-scroller-content" ref={projectScrollerRef} id="card-scroller-content">
                            <div className="card-scroller-plater">
                                {projectdata?.map(({ id, title, subtitle, screenshots, thumbnails, roles, overview, tech, WebsiteUrl, GitHubUrl, library, process, results, features }, index) => (
                                    <Fragment key={index}>
                                        {/* project card */}
                                        <div className='card'>
                                            {/* <img className="tape" src="assets/images/tape.png" height='100px' width='100px'>
                                        </img> */}
                                            <Card
                                                sx={{
                                                    position: 'relative',
                                                    // backgroundColor: 'transparent',
                                                    width: matches ? '275px' : '400px',
                                                    height: matches ? '400px' : '500px',
                                                    marginRight: '20px',
                                                    transition: "all 0.3s cubic-bezier(0,0,.5,1)",
                                                    borderRadius: '20px',
                                                    boxShadow: "0px 2px 12px rgb(0 0 0 / 8%)",
                                                    "&:hover": {
                                                        boxShadow: "0px 4px 24px rgb(0 0 0 / 0.2)",
                                                    },
                                                    // flex: '0 0 10%',
                                                }}
                                            >
                                                <CardMedia
                                                    className="card-media"
                                                    component="img"
                                                    alt={title}
                                                    image={thumbnails}
                                                    sx={{
                                                        width: matches ? '275px' : '400px',
                                                        height: matches ? '400px' : '500px',
                                                        borderRadius: '20px',
                                                        boxShadow: "0px 4px 24px rgb(0 0 0 / 0.6)",
                                                        "&:hover": {
                                                            transform: 'scale(1.05)',
                                                            transition: 'transform 0.5s ease-out 0s',
                                                            cursor: 'pointer'
                                                        },
                                                    }}
                                                    onClick={handleDrawerOpen({ id, title, subtitle, screenshots, thumbnails, overview, roles, tech, WebsiteUrl, GitHubUrl, library, process, results, features })}
                                                />
                                            </Card>
                                            <Box className="card-title" sx={{}}>
                                                <Typography variant="h4">
                                                    {title}
                                                </Typography>
                                            </Box>
                                        </div>
                                    </Fragment>
                                ))}
                                {/* more to come card */}
                                <div className="card">
                                    <Card elevation={0}
                                        sx={{
                                            position: 'relative',
                                            // backgroundColor: 'transparent',
                                            width: matches ? '275px' : '400px',
                                            height: matches ? '400px' : '500px',
                                            marginRight: '20px',
                                            transition: "all 0.3s cubic-bezier(0,0,.5,1)",
                                            borderRadius: '20px',
                                            boxShadow: "0px 2px 12px rgb(0 0 0 / 8%)",
                                            "&:hover": {
                                                boxShadow: "0px 4px 24px rgb(0 0 0 / 0.2)",
                                            },
                                            // flex: '0 0 10%',
                                        }}>
                                        <CardMedia sx={{
                                            width: matches ? '275px' : '400px',
                                            height: matches ? '400px' : '500px',
                                            borderRadius: '20px',
                                            boxShadow: "0px 4px 24px rgb(0 0 0 / 0.6)",
                                            "&:hover": {
                                                transform: 'scale(1.05)',
                                                transition: 'transform 0.5s ease-out 0s',
                                                cursor: 'pointer',
                                                ".more-button": {
                                                    transition: "transform 0.5s ease-in-out 0s",
                                                    transform: "translate(-50%,-100%)",
                                                },
                                                ".more-text": {
                                                    display: "inline-flex",
                                                    transition: "transform 0.5s ease-in-out 0s",
                                                    transform: "translate(-50%,0%)",
                                                },
                                            },
                                        }}
                                        >
                                            <IconButton
                                                className="more-button"
                                                size="large"
                                                aria-label="More To Come Button"
                                                sx={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%,-50%)",
                                                }}>
                                                <AddCircleOutlineIcon sx={{ fontSize: "128px", color: "#000000" }}></AddCircleOutlineIcon>
                                            </IconButton>
                                            <Typography
                                                className="more-text"
                                                sx={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%,-100%)",
                                                    display: "none",
                                                    fontSize: "48px",
                                                    textAlign: "center",
                                                    fontWeight: "bold",
                                                }}
                                                variant="body2">
                                                MORE COMING
                                            </Typography>
                                        </CardMedia>
                                    </Card>
                                </div>
                                <Suspense fallback={<div>Loading projects...</div>}>
                                    <ProjectDetails open={open} handleDrawerOpen={handleDrawerOpen} projectdetails={projectdetails} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                    {/* slide button */}
                    <div className='scroller-button'>
                        <Box className="button left-button">
                            <IconButton onClick={handleLeft} aria-label="Project Scroll Left">
                                <FontAwesomeIcon icon={faCircleChevronLeft} fontSize="40px" />
                            </IconButton>
                        </Box>
                        <Box className="button right-button">
                            <IconButton onClick={handleRight} aria-label="Project Scroll Right">
                                <FontAwesomeIcon icon={faCircleChevronRight} fontSize="40px" />
                            </IconButton>
                        </Box>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};