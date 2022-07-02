import React, { useEffect, useState } from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Skeleton from '@mui/material/Skeleton';
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Divider from "@material-ui/core/Divider";
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
import Chip from '@mui/material/Chip';
import ShareIcon from '@mui/icons-material/Share';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';


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

import { styled } from '@mui/material/styles';
import { createStyles, makeStyles } from "@material-ui/styles";


const projectScreenShotsStyle = {
    height: "100%",
    width: "100%",
    objectFit: "contain",
};


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



export default function ProjectDetails({ open, projectData, handleDrawerOpen }) {

    const classes = useStyles();

    const drawerBleeding = 20;

    const [sharePage, setSharePage] = useState(false);

    const [imageOpen, setImageOpen] = useState(false);
    const [imagesrc, setImagesrc] = useState([]);

    const handleImageOpen = (index) => () => {
        setImageOpen(true);
        setImagesrc(index)
        console.log(imagesrc)
    }

    const handleImageClose = () => {
        setImageOpen(false);
        setImagesrc(null);
    }


    const handleShareOpen = () => {
        setSharePage(true);
    }

    const handleShareClose = () => {
        setSharePage(false);
    }

    return (
        <React.Fragment>
            {/* swipeabledrawer */}
            < Root >
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
                                        <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(50px, 2fr))" gridAutoRows="auto" gridAutoColumns="auto" gap={2}>
                                            {
                                                projectData.screenshots.map((screenshot, index) => (
                                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", objectFit: "contain" }}>
                                                        <CardMedia
                                                            sx={{ boxShadow: "-10px -10px 15px rgba(255,255,255,0.5), 10px 10px 15px rgba(70,70,70,0.12)" }}
                                                            className="project-screenshots"
                                                            key={index}
                                                            component="img"
                                                            width="auto"
                                                            height="auto"
                                                            alt={screenshot}
                                                            image={screenshot}
                                                            onClick={handleImageOpen(screenshot)}
                                                        />
                                                        {console.log(screenshot)}
                                                    </Box>
                                                ))
                                            }
                                        </Box>
                                        : <Skeleton variant="rectangular" width={350} height={450} />
                                    }
                                </CardContent>
                                <Modal
                                    open={imageOpen}
                                    onClose={handleImageClose}
                                    imagesrc={imagesrc}
                                >
                                    <Box sx={{
                                        display: "inline-block",
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        bgcolor: 'background.paper',
                                        boxShadow: 18,
                                        border: "none",
                                        height: "90%",
                                        width: document.documentElement.clientWidth * 0.8,
                                        p: 1,
                                        m: 1,
                                    }}>
                                        <Box sx={projectScreenShotsStyle} component="img" alt={imagesrc} src={imagesrc}></Box>
                                    </Box>
                                </Modal>
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
            </Root >
            {/* share page */}
            <Modal
                open={sharePage}
                onClose={handleShareClose}
                projectData={projectData}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-overview"
                keepMounted
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
        </React.Fragment>
    )
}