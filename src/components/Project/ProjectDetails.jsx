import React, { Fragment, useState } from "react";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Skeleton from '@mui/material/Skeleton';
import CssBaseline from "@mui/material/CssBaseline";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, Tooltip } from '@mui/material';
import Divider from "@mui/material/Divider";
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
import Chip from '@mui/material/Chip';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ShareModal from "./Modals/ShareModal";
import ImageModal from "./Modals/ImageModal";





import { styled } from '@mui/material/styles';
import createStyles from "@mui/material/styles/createStyles";
import { makeStyles } from "@mui/styles";
import useModalToggle from "../../hooks/useModalToggle";





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



export default function ProjectDetails({ open, projectdetails, handleDrawerOpen }) {

    const classes = useStyles();

    const [shareOpen, handleShareOpen, handleShareClose] = useModalToggle();
    const [imageOpen, handleImageOpen, handleImageClose] = useModalToggle();
    const [zoomImage, setZoomImage] = useState("")

    const getImageScrAndOpen = (screenshot) => {
        setZoomImage(screenshot)
        handleImageOpen()
    }



    return (
        <React.Fragment>
            {/* swipeabledrawer */}
            <Root>
                <SwipeableDrawer
                    className={classes.drawer}
                    anchor="bottom"
                    open={open}
                    onClose={handleDrawerOpen(false)}
                    onOpen={handleDrawerOpen(true)}
                    elevation={10}
                    projectdetails={projectdetails}
                    transitionDuration={{ enter: 1000, exit: 500 }}
                    disableSwipeToOpen={false}
                    sx={{
                        '&.MuiDrawer-root > .MuiPaper-root': {
                            backgroundColor: "inherit",
                            maxHeight: "90%"
                        },
                    }}
                >
                    <StyledBox
                        sx={{
                            p: 2,
                            borderTopRightRadius: 18,
                            borderTopLeftRadius: 18,
                            overflow: 'auto',
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: 'transparent',
                                marginTop: "1rem"
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
                        <StyledBox sx={{
                            position: 'absolute',
                            right: 0,
                            left: 0,
                            top: 0,
                        }}>
                            <Puller />
                        </StyledBox>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin: "0 auto",
                            maxWidth: "1323px"
                        }}>
                            {/* drawer top */}
                            <Grid container>
                                <Grid xs={12} md={12} item>
                                    <CardContent>
                                        <Box sx={{ mx: 1 }}>
                                            <Typography variant="h4" component="div">
                                                {
                                                    projectdetails.title ? projectdetails.title : <Skeleton animation='pulse' variant="rectangular" height={50} />
                                                }
                                            </Typography>
                                            <Typography variant="body1" component="div">
                                                {projectdetails.subtitle ? projectdetails.subtitle : <Skeleton animation='pulse' variant="rectangular" height={40} />}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Grid>
                                {/* drawer top left */}
                                <Grid xs={12} md={12} item>
                                    <Divider variant="middle" />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Overview
                                        </Typography>
                                        <Typography variant="body1" component="div" >
                                            {projectdetails.overview ? projectdetails.overview : <Skeleton animation='pulse' variant="rectangular" height={150} />}
                                        </Typography>
                                    </CardContent>
                                </Grid>
                                <Grid xs={12} md={4} item>
                                    <Divider variant="middle" />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            Features
                                        </Typography>
                                        {projectdetails.features ? projectdetails.features.map(({ name, detail }, index) => (
                                            <Box>
                                                <Typography variant="body1" component="li">
                                                    {name}
                                                </Typography>
                                                <Typography variant="body2" component="ul">
                                                    {detail}
                                                </Typography>
                                            </Box>
                                        )) : <Skeleton animation='pulse' variant="rectangular" height={150} />}
                                    </CardContent>
                                </Grid>
                                <Grid xs={12} md={4} item>
                                    <Divider variant="middle" />
                                    <CardContent>
                                        <Typography variant="h5" component="div" >
                                            Process
                                        </Typography>
                                        {projectdetails.process ?
                                            <Typography variant="body1" component="div">
                                                {projectdetails.process}
                                            </Typography> : null
                                        }
                                    </CardContent>
                                </Grid>
                                <Grid xs={12} md={4} item>
                                    <Divider variant="middle" />
                                    <CardContent>
                                        <Typography variant="h5" component="div" >
                                            Challenges
                                        </Typography>
                                        {
                                            projectdetails.challenge ?
                                                <Typography variant="body1">
                                                    {projectdetails.challenge}
                                                </Typography> : null
                                        }
                                    </CardContent>
                                </Grid>
                                <Grid xs={12} md={4} item>
                                    <Divider variant="middle" />
                                    <CardContent>
                                        <Typography variant="h5" component="div" >
                                            Technology
                                        </Typography>
                                        {
                                            projectdetails.tech ? projectdetails.tech.map((techUrl, index) => (
                                                <Tooltip title={techUrl.split("/")[2].split(".")[0].toUpperCase()}>
                                                    <img key={index} className={classes.imageIcon} src={techUrl} alt={techUrl} height='48px' width='48px' />
                                                </Tooltip>
                                            )) : <Skeleton animation='pulse' variant="circle" />
                                        }
                                    </CardContent>
                                </Grid>                               <Grid xs={12} md={4} item>
                                    <Divider variant="middle" />
                                    <CardContent>
                                        <Typography variant="h5" component="div" >
                                            Library
                                        </Typography>
                                        {projectdetails.library ? projectdetails.library.map((lib, index) => (
                                            <Chip style={{ fontSize: "18px" }} label={lib} sx={{ m: 1 }} key={index} variant="outlined" />
                                        )) : <Skeleton animation='pulse' variant="circle" />
                                        }
                                    </CardContent>
                                </Grid>
                                {/* drawer top right */}
                                <Grid xs={12} md={4} item>
                                    <Divider variant="middle" />
                                    <CardContent>
                                        <Typography variant="h5" component="div" >
                                            Source Code
                                        </Typography>
                                        <Button sx={{ m: 1 }} color="secondary" variant='outlined' size="medium" href={projectdetails.GitHubUrl} target='_blank' endIcon={<GitHubIcon />}>GitHub</Button>
                                        <Button sx={{ m: 1 }} color="secondary" variant='outlined' size="medium" href={projectdetails.WebsiteUrl} target='_blank' endIcon={<LaunchIcon />}>Website</Button>
                                        <Button sx={{ m: 1 }} color="secondary" variant='outlined' size="medium" onClick={handleShareOpen} target='_blank' endIcon={<ShareIcon />}>Share</Button>
                                        <ShareModal projectdetails={projectdetails} shareOpen={shareOpen} handleShareClose={handleShareClose} />
                                    </CardContent>
                                </Grid>
                            </Grid>
                            {/* drawer bottom side */}
                            <CardContent>
                                <Divider />
                                <CardContent>
                                    {projectdetails.screenshots ?
                                        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(350px, 3fr))" gridTemplateRows="repeat(auto-fill, minmax(50px, 2fr))" gridAutoRows="auto" gridAutoColumns="auto" gap={2} gridAutoFlow="dense">
                                            {
                                                projectdetails.screenshots.map((screenshot, index) => (
                                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", objectFit: "contain" }} key={index}>
                                                        <CardMedia
                                                            sx={{ boxShadow: "-10px -10px 15px rgba(255,255,255,0.5), 10px 10px 15px rgba(70,70,70,0.12)", cursor: "zoom-in" }}
                                                            className="project-screenshots"
                                                            key={index}
                                                            component="img"
                                                            width="auto"
                                                            height="auto"
                                                            alt={screenshot}
                                                            image={screenshot}
                                                            onClick={() => getImageScrAndOpen(screenshot)}
                                                        />
                                                    </Box>
                                                ))
                                            }
                                            <ImageModal imageSrc={zoomImage} imageOpen={imageOpen} handleImageClose={handleImageClose} />
                                        </Box>
                                        : <Skeleton variant="rectangular" width={350} height={450} />
                                    }
                                </CardContent>
                            </CardContent>
                            <Box sx={{ height: "100px" }}>
                            </Box>
                        </Box>
                    </StyledBox>
                    {/* close button */}
                    <CloseButton sx={{ position: 'absolute', bottom: '40px', transform: 'translate(-50%,0)', left: '50%' }} size='large' onClick={handleDrawerOpen(false)}>Close</CloseButton>
                </SwipeableDrawer>
                {/* share page */}
            </Root>
        </React.Fragment >
    )
}
