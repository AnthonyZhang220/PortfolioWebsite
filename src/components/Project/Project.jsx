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
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from '@mui/material/Modal';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Drawer from '@mui/material/Drawer';
import Skeleton from '@mui/material/Skeleton';
import { Global } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from 'prop-types';

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
    '&:hover': {
        color: 'rgba(0, 0, 0, 0.65)',
    },
}));



export default function Project(props) {

    const classes = useStyles();

    gsap.registerPlugin(ScrollTrigger);

    const drawerBleeding = 20;


    const projectRef = useRef();
    const listRef = useRef();
    const [sharePage, setSharePage] = useState(false);
    const [shareId, setShareId] = useState(null);

    const [projectData, setProjectData] = useState({})

    const scrollerRef = useRef();

    const handleShareOpen = (id) => {
        setShareId(id);
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



    useEffect(() => {
        gsap.fromTo(listRef.current, {
            x: "10%", opacity: 0
        }, {
            x: "0%", opacity: 1, duration: 2,
            scrollTrigger: {
                trigger: projectRef.current,
                start: "top bottom"
            },
        });
    });


    const [open, setOpen] = useState(false);

    const handleDrawerOpen = ({ id, title, subtitle, thumbnail, description, tech, WebsiteUrl, GitHubUrl, library, index }) => () => {

        setOpen(!open);
        setProjectData({ id, title, subtitle, thumbnail, description, tech, WebsiteUrl, GitHubUrl, library, index });



        if (open) {
            document.getElementById('App').style.transform = 'scale(1)'
            document.getElementById('App').style.transition = '0.5s'
        } else {
            document.getElementById('App').style.transform = 'scale(0.9)';
            document.getElementById('App').style.transition = '0.5s'

        }

    };


    return (
        <div className='project' id='project' ref={projectRef}>
            <div className='project-title'>
                <h2>Project.&nbsp;</h2>
                <span className='subtitle'>
                    Take a took at what I have created, in the past.
                </span>
            </div>
            <div className="project-wrapper" >
                <div className='card-scroller-crop'>
                    <div className="card-scroller-content" ref={scrollerRef}>
                        <div className="card-scroller-plater">
                            {projectdata?.map(({ id, title, subtitle, thumbnail, description, tech, WebsiteUrl, GitHubUrl, library, index }) => (
                                <>
                                    <div key={id} className='card'>
                                        {/* <img className="tape" src="assets/images/tape.png" height='100px' width='100px'>
                                        </img> */}
                                        <Card
                                            key={id}
                                            ref={listRef}
                                            sx={{
                                                position: 'relative',
                                                // backgroundColor: 'transparent',
                                                width: '350px',
                                                height: '450px',
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
                                                height="450px"
                                                width="350px"
                                                image={thumbnail}
                                                sx={{
                                                    borderRadius: '20px',
                                                    boxShadow: "0px 4px 24px rgb(0 0 0 / 0.6)",
                                                    "&:hover": {
                                                        transform: 'scale(1.05)',
                                                        transition: 'transform 0.5s ease-out 0s',
                                                        cursor: 'pointer'
                                                    },
                                                }}
                                                onClick={handleDrawerOpen({ id, title, subtitle, thumbnail, description, tech, WebsiteUrl, GitHubUrl, library, index })}
                                            />
                                        </Card>
                                    </div>
                                    {/* share page */}
                                    {
                                        shareId === id ?
                                            <Modal
                                                key={shareId}
                                                open={sharePage}
                                                onClose={handleShareClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <Box sx={style}>
                                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                                        Share
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 2 }}>
                                                        <EmailShareButton url={WebsiteUrl}>
                                                            <EmailIcon round size={50} />
                                                        </EmailShareButton>
                                                        <FacebookShareButton url={WebsiteUrl} quote={title}>
                                                            <FacebookIcon round size={50} />
                                                        </FacebookShareButton>
                                                        <FacebookMessengerIcon round size={50} />
                                                        <LineShareButton url={WebsiteUrl}>
                                                            <LineIcon round size={50} />
                                                        </LineShareButton>

                                                        <LinkedinShareButton url={WebsiteUrl} title={title} summary={description}>
                                                            <LinkedinIcon round size={50} />
                                                        </LinkedinShareButton>


                                                        <PinterestShareButton url={WebsiteUrl} media={thumbnail}>
                                                            <PinterestIcon round size={50} />
                                                        </PinterestShareButton>

                                                        <WeiboIcon round size={50} />

                                                        <RedditShareButton url={WebsiteUrl} title={title}>
                                                            <RedditIcon round size={50} />
                                                        </RedditShareButton>

                                                        <TelegramShareButton url={WebsiteUrl} title={title}>
                                                            <TelegramIcon round size={50} />
                                                        </TelegramShareButton>

                                                        <TwitterShareButton url={WebsiteUrl} title={title}>
                                                            <TwitterIcon round size={50} />
                                                        </TwitterShareButton>

                                                        <WhatsappShareButton url={WebsiteUrl} title={title}>
                                                            <WhatsappIcon round size={50} />
                                                        </WhatsappShareButton>

                                                        <WorkplaceShareButton url={WebsiteUrl} quote={description}>
                                                            <WorkplaceIcon round size={50} />
                                                        </WorkplaceShareButton>
                                                    </Box>
                                                    <Button onClick={handleShareClose}>Close</Button>
                                                </Box>
                                            </Modal> : null
                                    }
                                </>
                            ))}
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
                                        <Divider variant='middle' />
                                        <Box sx={{ m: 1 }}>
                                            <Typography gutterBottom variant="body3">
                                                Technology used
                                            </Typography>
                                        </Box>
                                        <Divider variant="middle" />
                                        <Box sx={{ m: 1 }}>
                                            <Typography gutterBottom variant="body3">
                                                Library used
                                            </Typography>
                                        </Box>
                                        <Divider variant='middle' />
                                    </CardContent>
                                </Card>
                            </div>
                            <Root>
                                <CssBaseline />
                                <Global
                                    styles={{
                                        '.MuiDrawer-root > .MuiPaper-root': {
                                            height: `calc(90% - ${drawerBleeding}px)`,
                                            overflow: 'visible',
                                        },
                                    }}
                                />
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
                                    BackdropProps={{

                                    }}
                                >
                                    <StyledBox
                                        sx={{
                                            px: 2,
                                            pb: 2,
                                            height: '100%',
                                            overflow: 'auto',
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
                                        <CardContent>
                                            <Box sx={{ mx: 1 }}>
                                                <Typography gutterBottom variant="h4" component="div">
                                                    {
                                                        projectData.title ? projectData.title : <Skeleton animation='wave' variant="rectangular" height={50} />
                                                    }
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {projectData.subtitle ? projectData.subtitle : <Skeleton animation='wave' variant="rectangular" height={40} />}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary">
                                                    {projectData.description ? projectData.description : <Skeleton animation='wave' variant="rectangular" height={150} />}
                                                </Typography>
                                            </Box>
                                            <Divider variant='middle' />
                                            <Box sx={{ m: 1 }}>
                                                <Typography gutterBottom variant="body3">
                                                    Technology used
                                                </Typography>
                                                <Stack direction='row' spacing={2}>
                                                    {
                                                        projectData.tech ? projectData.tech.map(techUrl => (
                                                            <Icon key={projectData.index} fontSize='48px'>
                                                                <img className={classes.imageIcon} src={techUrl} alt='' />
                                                            </Icon>
                                                        )) : <Skeleton animation='wave' variant="circle" />
                                                    }
                                                </Stack>
                                            </Box>
                                            <Divider variant="middle" />
                                            <Box sx={{ m: 1 }}>
                                                <Typography gutterBottom variant="body3">
                                                    Library used
                                                </Typography>
                                                <Stack direction='row' spacing={1}>
                                                    {projectData.library ? projectData.library.map(lib => (
                                                        <Chip label={lib} key={projectData.index} />
                                                    )) : <Skeleton animation='wave' variant="circle" />
                                                    }
                                                </Stack>
                                            </Box>
                                            <Divider variant='middle' />
                                        </CardContent>
                                        <CardActions disableSpacing >
                                            <Button sx={{ m: 1 }} color="secondary" variant='outlined' size="medium" href={projectData.GitHubUrl} target='_blank'>GitHub</Button>
                                            <Button sx={{ m: 1 }} color="secondary" variant='outlined' size="medium" href={projectData.WebsiteUrl} target='_blank' endIcon={<ForwardRoundedIcon />}>Website</Button>
                                            <IconButton sx={{ m: 1 }} onClick={() => handleShareOpen(projectData.id)} >
                                                <ShareIcon></ShareIcon>
                                            </IconButton>
                                            <IconButton>
                                                <FavoriteRoundedIcon></FavoriteRoundedIcon>
                                            </IconButton>
                                        </CardActions>
                                        <CloseButton sx={{ position: 'absolute', bottom: '10px', transform: 'translate(-50%,0)', left: '50%' }} size='large' onClick={handleDrawerOpen(false)}>Close</CloseButton>
                                    </StyledBox>
                                </SwipeableDrawer>
                            </Root>
                        </div>
                    </div>
                </div>
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
    )
};