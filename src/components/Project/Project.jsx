import { useEffect, useRef, useState, Suspense, lazy, Fragment } from "react";
import { projectdata } from "./ProjectData.js"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import CircularProgress from '@mui/material/CircularProgress';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./Project.scss"
import "../../global.scss"

function CircularProgressWithLabel({ progress }) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={progress} size={80} thickness={2} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                >{`${Math.round(progress)}%`}</Typography>
            </Box>
        </Box>
    );
}


const ProjectDetails = lazy(() => import("./ProjectDetails"))


export default function Project(props) {

    const matches = useMediaQuery('(max-width:600px)');


    gsap.registerPlugin(ScrollTrigger);


    const projectContainerRef = useRef();
    const projectTitleRef = useRef();
    const scrollerRef = useRef();
    const scrollCursorRef = useRef();

    const [progress, setProgress] = useState(0);
    const [projectdetails, setProjectdetails] = useState({})

    const handleLeft = () => {
        const el = scrollerRef.current;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        scrollerRef.current.scrollBy(-600, 0);

        const percentage = el.scrollLeft * 100 / maxScrollLeft

        setProgress(percentage)

    }

    const handleRight = () => {
        const el = scrollerRef.current;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        scrollerRef.current.scrollBy(600, 0);

        const percentage = el.scrollLeft * 100 / maxScrollLeft

        setProgress(percentage)
    }

    useEffect(() => {

        let mouseX = 0, mouseY = 0;

        gsap.to({}, 0.016, {
            repeat: -1,

            onRepeat: function () {
                gsap.set(scrollCursorRef.current, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                })
            }
        })

        window.addEventListener("mousemove", function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        })

        const el = scrollerRef.current;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        if (el) {
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 10,
                    behavior: "smooth"
                });
                const percentage = el.scrollLeft * 100 / maxScrollLeft

                setProgress(percentage)
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }

    }, []);

    useEffect(() => {
        let cursor = document.getElementById("cursor")

        scrollerRef.current.addEventListener("mousemove", () => {
            cursor.style.display = "none"
            scrollCursorRef.current.style.display = "inline-flex"
        })

        scrollerRef.current.addEventListener("mouseleave", () => {
            cursor.style.display = "block"
            scrollCursorRef.current.style.display = "none"
        })
    })


    // project
    useEffect(() => {
        const animation = gsap.fromTo(scrollerRef.current, {
            x: "50%"
        }, {
            x: "0%", duration: 1,
            scrollTrigger: {
                trigger: projectContainerRef.current,
                start: "top bottom"
            },
        });

        return () => animation.scrollTrigger.kill();
    }, []);

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
    }, [])

    useEffect(() => {
    })

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
            <div className='banner'>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: "30px", flexWrap: 'wrap' }}>
                    <Card elevation={0} sx={{
                        p: 1,
                        m: 2,
                        borderRadius: '30px',
                        boxShadow: "0 1.5rem 2rem -2rem hsl(200 50% 20% / 40%)",
                        // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex', justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <EventAvailableOutlinedIcon sx={{ color: "#fa5502", fontSize: 40 }} />
                                <Grid container item xs={12} direction='column' textAlign='center' px={3} wrap='nowrap'>
                                    <Typography variant="h4" >
                                        2+ Years
                                    </Typography>
                                    <Typography variant="h6" noWrap >
                                        Frontend Development
                                    </Typography>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card elevation={0} sx={{
                        p: 1,
                        m: 2,
                        borderRadius: '30px',
                        boxShadow: "0 1.5rem 2rem -2rem hsl(200 50% 20% / 40%)",
                        // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex', justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <ScienceOutlinedIcon sx={{ color: "#e39905", fontSize: 40 }} />
                                <Grid container item xs={12} direction='column' textAlign='center' px={3} wrap='nowrap'>
                                    <Typography variant='h4' >
                                        5+ Projects
                                    </Typography>
                                    <Typography variant='h6' noWrap >
                                        Hands-on Experience
                                    </Typography>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card elevation={0} sx={{
                        p: 1,
                        m: 2,
                        borderRadius: '30px',
                        boxShadow: "0 1.5rem 2rem -2rem hsl(200 50% 20% / 40%)",
                        // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    }}>
                        <CardContent>
                            <Box sx={{
                                display: 'flex', justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <SchoolOutlinedIcon sx={{ color: "#118a39", fontSize: 40 }} />
                                <Grid container item xs={12} direction='column' textAlign='center' px={2} wrap='nowrap'>
                                    <Typography variant='h4' noWrap>
                                        4 Certificates
                                    </Typography>
                                    <Typography variant='h6' noWrap >
                                        Coursera, MOOC
                                    </Typography>
                                </Grid>
                            </Box>

                        </CardContent>
                    </Card>
                </Box>
            </div>
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
                        <div className="card-scroller-content" ref={scrollerRef} id="card-scroller-content">
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
            <Box ref={scrollCursorRef} className="scrollCursor">
                <CircularProgressWithLabel progress={progress} />
            </Box>
        </Fragment>
    )
};