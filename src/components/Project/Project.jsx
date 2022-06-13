import React, { useEffect, useRef, useState } from "react";
import { projectdata } from "./ProjectData.js"
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
    EmailShareButton,
    FacebookShareButton,
    LineShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LineIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


import Paper from '@mui/material/Paper';
import Icon from '@material-ui/core/Icon';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Divider from "@material-ui/core/Divider";
import Box from '@mui/material/Box';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
import Chip from '@mui/material/Chip';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Modal from '@mui/material/Modal';

import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Skeleton from '@mui/material/Skeleton';
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/material/Grid';

import useMediaQuery from '@mui/material/useMediaQuery';
import { createStyles, makeStyles } from "@material-ui/styles";
import { styled } from '@mui/material/styles';
import "./Project.scss"

const useStyles = makeStyles(() => {
    createStyles({
        imageIcon: {
            display: "flex",
            height: "inherit",
            width: "inherit",
        },
        iconRoot: {
            textAlign: "center",
        },
        drawer: {
            width: 'auto',
            zIndex: 2000,
        },
        content: {
            flexGrow: 1,
            overflow: "auto",
        },
    })
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
    m: 4,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 10,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 2px',
        fontSize: 10,
    },
}));


const Root = styled("div")(({ theme }) => ({
    height: "100%",
    backgroundColor:
        theme.palette.mode === "light"
            ? '#F5F5F5'
            : theme.palette.background.default
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#424242',
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? '#E0E0E0' : '#212121',
    borderRadius: 18,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

const CloseButton = styled(Button)(({ theme }) => ({
    color: '#212121',
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    filter: 'drop-shadow(rgba(0, 0, 0, 0.12) 0px 1px 3px)',
    height: '2.5rem',
    padding: '0px 2.5rem',
    borderRadius: '1.25rem',
    letterSpacing: '1px',
    transition: 'color 0.1s ease-in-out 0s',
    '&:hover': {
        color: 'rgba(0, 0, 0, 0.8)',
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
    },
}));



export default function Project(props) {

    const classes = useStyles();
    const matches = useMediaQuery('(max-width:600px)');

    gsap.registerPlugin(ScrollTrigger);

    const drawerBleeding = 20;


    const projectContainerRef = useRef();
    const projectTitleRef = useRef();
    const scrollerRef = useRef();

    const [sharePage, setSharePage] = useState(false);
    const [projectData, setProjectData] = useState({})


    const handleShareOpen = () => {
        setSharePage(true);
    }

    const handleShareClose = () => {
        setSharePage(false);
    }

    const handleLeft = () => {
        scrollerRef.current.scrollBy(-340, 0);
    }

    const handleRight = () => {
        scrollerRef.current.scrollBy(340, 0);
    }


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

    // useEffect(() => {
    //     if (scrollerRef.current) {
    //         const onWheel = e => {
    //             if (e.deltaY === 0) return;
    //             e.preventDefault();
    //             scrollerRef.current.scrollTo({
    //                 left: scrollerRef.current.scrollLeft + e.deltaY,
    //                 behavior: "smooth"
    //             });
    //         };
    //         scrollerRef.current.addEventListener("wheel", onWheel);
    //         return () => scrollerRef.current.removeEventListener("wheel", onWheel);
    //     }
    // }, []);



    const [open, setOpen] = useState(false);

    const handleDrawerOpen = ({ id, title, subtitle, screenshots, thumbnails, overview, roles, tech, WebsiteUrl, GitHubUrl, library, index, process, results }) => () => {

        setOpen(!open);
        setProjectData({ id, title, subtitle, screenshots, thumbnails, overview, roles, tech, WebsiteUrl, GitHubUrl, library, index, process, results });



        if (open) {
            document.getElementById('main').style.transform = 'scale(1)';
            document.getElementById('main').style.transition = '0.5s';
        } else {
            document.getElementById('main').style.transform = 'scale(0.9)';
            document.getElementById('main').style.transition = '0.5s';
        }


    };


    return (
        <React.Fragment>
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
                    <Typography variant="h2">
                        Project.&nbsp;
                    </Typography>
                    <Typography variant="h2" color="#6e6e73">
                        Take a took at what I have built, in the past.
                    </Typography>
                </div>
                <div className="project-wrapper" ref={projectContainerRef} >
                    <div className='card-scroller-crop'>
                        <div className="card-scroller-content" ref={scrollerRef}>
                            <div className="card-scroller-plater">
                                {projectdata?.map(({ id, title, subtitle, screenshots, thumbnails, roles, overview, tech, WebsiteUrl, GitHubUrl, library, process, results, features }, index) => (
                                    <React.Fragment>
                                        {/* project card */}
                                        <div key={id} className='card'>
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
                                                    onClick={handleDrawerOpen({ id, title, subtitle, screenshots, thumbnails, overview, roles, tech, WebsiteUrl, GitHubUrl, library, index, process, results, features })}
                                                />
                                            </Card>
                                        </div>
                                    </React.Fragment>
                                ))}
                                {/* share page */}
                                <Modal
                                    open={sharePage}
                                    onClose={handleShareClose}
                                    projectData={projectData}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-overview"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Share
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 2 }}>
                                            <EmailShareButton url={projectData.WebsiteUrl}>
                                                <EmailIcon round size={50} />
                                            </EmailShareButton>
                                            <FacebookShareButton url={projectData.WebsiteUrl} quote={projectData.title}>
                                                <FacebookIcon round size={50} />
                                            </FacebookShareButton>
                                            <FacebookMessengerIcon round size={50} />
                                            <LineShareButton url={projectData.WebsiteUrl}>
                                                <LineIcon round size={50} />
                                            </LineShareButton>

                                            <LinkedinShareButton url={projectData.WebsiteUrl} title={projectData.title} summary={projectData.overview}>
                                                <LinkedinIcon round size={50} />
                                            </LinkedinShareButton>


                                            <PinterestShareButton url={projectData.WebsiteUrl} media={projectData.thumbnails}>
                                                <PinterestIcon round size={50} />
                                            </PinterestShareButton>

                                            <WeiboIcon round size={50} />

                                            <RedditShareButton url={projectData.WebsiteUrl} title={projectData.title}>
                                                <RedditIcon round size={50} />
                                            </RedditShareButton>

                                            <TelegramShareButton url={projectData.WebsiteUrl} title={projectData.title}>
                                                <TelegramIcon round size={50} />
                                            </TelegramShareButton>

                                            <TwitterShareButton url={projectData.WebsiteUrl} title={projectData.title}>
                                                <TwitterIcon round size={50} />
                                            </TwitterShareButton>

                                            <WhatsappShareButton url={projectData.WebsiteUrl} title={projectData.title}>
                                                <WhatsappIcon round size={50} />
                                            </WhatsappShareButton>

                                            <WorkplaceShareButton url={projectData.WebsiteUrl} quote={projectData.overview}>
                                                <WorkplaceIcon round size={50} />
                                            </WorkplaceShareButton>
                                        </Box>
                                        <Button onClick={handleShareClose}>Close</Button>
                                    </Box>
                                </Modal>
                                {/* more to come card */}
                                <div className="card">
                                    <Card
                                        sx={{
                                            position: 'relative',
                                            width: 'auto',
                                            height: 'auto',
                                            marginRight: '20px',
                                            transition: "all 0.3s cubic-bezier(0,0,.5,1)",
                                            borderRadius: '16px',
                                            boxShadow: "0px 2px 12px rgb(0 0 0 / 8%)",
                                            "&:hover": {
                                                boxShadow: "0px 4px 24px rgb(0 0 0 / 0.2)",
                                            },
                                            // flex: '0 0 10%',
                                        }}>
                                        <CardContent>
                                            <Box sx={{ mx: 1 }}>
                                                <Typography gutterBottom variant="body1" component="div">
                                                    More to come
                                                </Typography>
                                            </Box>
                                            <Divider />
                                            <Box sx={{ m: 1 }}>
                                                <Typography gutterBottom variant="body3">
                                                    Technology used
                                                </Typography>
                                            </Box>
                                            <Divider />
                                            <Box sx={{ m: 1 }}>
                                                <Typography gutterBottom variant="body3">
                                                    Library used
                                                </Typography>
                                            </Box>
                                            <Divider />
                                        </CardContent>
                                    </Card>
                                </div>
                                {/* swipeabledrawer */}
                                <Root>
                                    <CssBaseline />
                                    <SwipeableDrawer
                                        className={classes.drawer}
                                        anchor="bottom"
                                        open={open}
                                        onClose={handleDrawerOpen(false)}
                                        onOpen={handleDrawerOpen(true)}
                                        swipeAreaWidth={drawerBleeding}
                                        elevation={10}
                                        projectData={projectData}
                                        transitionDuration={{ enter: 1000, exit: 500 }}
                                        disableSwipeToOpen={false}
                                        sx={{
                                            '&.MuiDrawer-root > .MuiPaper-root': {
                                                height: `calc(90% - ${drawerBleeding}px)`,
                                                overflow: 'visible',
                                            },
                                        }}
                                    >
                                        <StyledBox
                                            sx={{
                                                position: 'absolute',
                                                top: -drawerBleeding,
                                                borderTopLeftRadius: 18,
                                                borderTopRightRadius: 18,
                                                visibility: 'visible',
                                                right: 0,
                                                left: 0,
                                            }}
                                        >
                                            <Puller />
                                            <Typography sx={{ p: 2 }}></Typography>
                                        </StyledBox>
                                        <StyledBox
                                            sx={{
                                                px: 2,
                                                pb: 2,
                                                height: '100%',
                                                overflow: 'auto',
                                                '&::-webkit-scrollbar-track': {
                                                    backgroundColor: 'transparent',
                                                },
                                                '&::-webkit-scrollbar-thumb': {
                                                    backgroundColor: '#d6dee1',
                                                    borderRadius: '20px',
                                                    border: '2px solid transparent',
                                                    backgroundClip: 'content-box',
                                                },

                                                '&::-webkit-scrollbar-thumb:hover': {
                                                    backgroundColor: '#a8bbbf',
                                                },

                                                '&::-webkit-scrollbar': {
                                                    width: '14px',
                                                },
                                            }}
                                        >
                                            <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                                                {/* drawer top */}
                                                <Grid container spacing={2}>
                                                    {/* drawer top left */}
                                                    <Grid xs={12} md={6} item>
                                                        <CardContent>
                                                            <Box sx={{ mx: 1 }}>
                                                                <Typography gutterBottom variant="h4" component="div">
                                                                    {
                                                                        projectData.title ? projectData.title : <Skeleton animation='pulse' variant="rectangular" height={50} />
                                                                    }
                                                                </Typography>
                                                                <Typography gutterBottom variant="h5" component="div">
                                                                    {projectData.subtitle ? projectData.subtitle : <Skeleton animation='pulse' variant="rectangular" height={40} />}
                                                                </Typography>
                                                            </Box>
                                                            <Divider />
                                                        </CardContent>
                                                        <CardActions>
                                                            <Box sx={{ mx: 1 }}>
                                                                <Button sx={{ m: 1 }} color="secondary" variant='contained' size="medium" href={projectData.GitHubUrl} target='_blank'>GitHub</Button>
                                                                <Button sx={{ m: 1 }} color="secondary" variant='contained' size="medium" href={projectData.WebsiteUrl} target='_blank' endIcon={<ForwardRoundedIcon />}>Website</Button>
                                                                <IconButton sx={{ m: 1 }} onClick={() => handleShareOpen(projectData.id)} >
                                                                    <ShareIcon></ShareIcon>
                                                                </IconButton>
                                                                <Divider />
                                                            </Box>
                                                        </CardActions>
                                                        <CardContent>
                                                            <Box sx={{ mx: 1 }}>
                                                                <Typography gutterBottom variant="h5" color="text.secondary">
                                                                    OVERVIEW
                                                                </Typography>
                                                                <Typography gutterBottom variant="body1" color="text.secondary">
                                                                    {projectData.overview ? projectData.overview : <Skeleton animation='pulse' variant="rectangular" height={150} />}
                                                                </Typography>
                                                            </Box>
                                                        </CardContent>
                                                    </Grid>
                                                    {/* drawer top right */}
                                                    <Grid xs={12} md={6} item>
                                                        <CardContent>
                                                            <Box sx={{ m: 1 }}>
                                                                <Typography gutterBottom variant="h6" color="text.secondary">
                                                                    ROLES
                                                                </Typography>
                                                                <Stack sx={{ flexWrap: 'wrap' }} alignItems='center' justifyContent='flex-start' direction='row' spacing={1}>
                                                                    {projectData.roles ? projectData.roles.map((role, index) => (
                                                                        <Chip style={{ fontSize: "18px" }} sx={{ m: 1 }} label={role} key={index} />
                                                                    )) : <Skeleton animation='pulse' variant="circle" />
                                                                    }
                                                                </Stack>
                                                            </Box>
                                                            <Divider />
                                                            <Box sx={{ m: 1 }}>
                                                                <Typography gutterBottom variant="h6" color="text.secondary">
                                                                    TECHNOLOGY STACK
                                                                </Typography>
                                                                <Stack sx={{ flexWrap: 'wrap' }} alignItems='center' justifyContent='flex-start' direction='row' spacing={1}>
                                                                    {
                                                                        projectData.tech ? projectData.tech.map((techUrl, index) => (
                                                                            <img key={index} className={classes.imageIcon} src={techUrl} alt={techUrl} height='48px' width='48px' />
                                                                        )) : <Skeleton animation='pulse' variant="circle" />
                                                                    }
                                                                </Stack>
                                                            </Box>
                                                            <Divider />
                                                            <Box sx={{ m: 1 }}>
                                                                <Typography gutterBottom variant="h6" color="text.secondary">
                                                                    LIBRARY STACK
                                                                </Typography>
                                                                <Stack sx={{ flexWrap: 'wrap' }} alignItems='center' justifyContent='flex-start' direction='row' spacing={1}>
                                                                    {projectData.library ? projectData.library.map((lib, index) => (
                                                                        <Chip style={{ fontSize: "18px" }} label={lib} sx={{ m: 1 }} key={index} variant="outlined" />
                                                                    )) : <Skeleton animation='pulse' variant="circle" />
                                                                    }
                                                                </Stack>
                                                            </Box>
                                                        </CardContent>
                                                    </Grid>
                                                </Grid>
                                                {/* drawer bottom side */}
                                                <CardContent>
                                                    <Divider />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" color="text.secondary">
                                                            Features
                                                        </Typography>
                                                        <Typography gutterBottom variant="body1" color="text.secondary">
                                                            {projectData.features ? projectData.features : <Skeleton animation='pulse' variant="rectangular" height={150} />}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardContent>
                                                        {projectData.screenshots ?
                                                            <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(400px, 2fr))" gridAutoRows="auto" gridAutoColumns="auto" gap={2}>
                                                                {
                                                                    projectData.screenshots.map((screenshot) => (
                                                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                                            <CardMedia
                                                                                className="project-screenshots"
                                                                                component="img"
                                                                                width="auto"
                                                                                height="auto"
                                                                                alt={screenshot}
                                                                                image={screenshot}
                                                                            />
                                                                        </Box>
                                                                    ))
                                                                }
                                                            </Box>
                                                            : <Skeleton variant="rectangular" width={350} height={450} />
                                                        }
                                                    </CardContent>
                                                    <Divider />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" color="text.secondary">
                                                            PROCESS
                                                        </Typography>
                                                        <Typography gutterBottom variant="body1" color="text.secondary">
                                                            {projectData.process ? projectData.process : <Skeleton animation='pulse' variant="rectangular" height={150} />}
                                                        </Typography>
                                                    </CardContent>
                                                    <Divider />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" color="text.secondary">
                                                            RESULTS
                                                        </Typography>
                                                        <Typography gutterBottom variant="body1" color="text.secondary">
                                                            {projectData.results ? projectData.results : <Skeleton animation='pulse' variant="rectangular" height={150} />}
                                                        </Typography>
                                                    </CardContent>
                                                </CardContent>
                                            </Box>
                                        </StyledBox>
                                        {/* close button */}
                                        <CloseButton sx={{ position: 'absolute', bottom: '40px', transform: 'translate(-50%,0)', left: '50%' }} size='large' onClick={handleDrawerOpen(false)}>Close</CloseButton>
                                    </SwipeableDrawer>
                                </Root>
                            </div>
                        </div>
                    </div>
                    {/* slide button */}
                    <div className='scroller-button'>
                        <Box className="button left-button">
                            <IconButton sx={{ fontSize: 40 }} onClick={handleLeft}>
                                {/* <ArrowCircleLeftRoundedIcon sx={{ fontSize: 50 }} /> */}
                                <FontAwesomeIcon icon="fas fa-chevron-circle-left" />
                            </IconButton>
                        </Box>
                        <Box className="button right-button">
                            <IconButton sx={{ fontSize: 40 }} onClick={handleRight}>
                                {/* <ArrowCircleRightRoundedIcon sx={{ fontSize: 50 }} /> */}
                                <FontAwesomeIcon icon="fas fa-chevron-circle-right" />
                            </IconButton>
                        </Box>
                    </div>
                </div>
            </div >
        </React.Fragment>
    )
};