import { useState, useRef, Suspense, lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import LinearProgress from '@mui/material/LinearProgress';
import LoadingButton from '@mui/lab/LoadingButton';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatusSnackbar from "../StatusSnackbar"
import useSupabaseClient from '../../hooks/useSupabaseClient';
import { ErrorRounded } from '@mui/icons-material';
import './Footer.scss';

library.add(fab);



//lazy loading
const MusicPlayer = lazy(() => import("../MusicPlayer"));
const Widget = styled('Box')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const Error = ({ data, reason }) => {
    return (
        <StatusSnackbar data={data} reason={reason} />
    )
}

export default function Footer() {

    let currentYear = new Date().getFullYear();
    const { data, error, incrementUpdate } = useSupabaseClient();

    const footerRef = useRef(null);
    const footerContainer = useRef(null);

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    return (
        <Box className="footer-container" ref={footerContainer}>
            <footer className='footer' id='footer' ref={footerRef}>
                <Box className="footer-top">
                    <Grid container direction='row' className="footer-top-container">
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box sx={{ mt: 2 }}>
                                {/* <IconButton sx={{ color: '#fafafa', fontSize: 30 }} onClick={() => incrementUpdate("like")} aria-label="Like Thumbup Button">
                                    <Badge badgeContent={data.like ?? <ErrorRounded />} color="primary">
                                        <ThumbUpRoundedIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton sx={{ color: '#fafafa', fontSize: 30 }} onClick={() => incrementUpdate("fav")} aria-label="Favorite Heart Button">
                                    <Badge badgeContent={data.fav ?? <ErrorRounded />} color="primary">
                                        <FavoriteRoundedIcon />
                                    </Badge>
                                </IconButton> */}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant='h6'>
                                    If you like this website, please leave a like!
                                </Typography>
                                <Typography variant='h6'>
                                    If you love it, please leave a heart!
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <FooterSocialIcon />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Grid container direction='row'>
                                <Grid item xs={6} sm={6}>
                                    <Box sx={{ mb: 1, mt: 2 }}>
                                        <Typography variant='h5' sx={{ color: '#9e9e9e' }}>
                                            Explore
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mb: 4 }}>
                                        <Typography variant='h6' sx={{ color: '#fafafa' }}>
                                            <Link to='/'>
                                                Home
                                            </Link>
                                        </Typography>
                                        <Typography variant='h6'>
                                            <Link to='/about'>
                                                About
                                            </Link>
                                        </Typography>
                                        <Typography variant='h6'>
                                            <Link to='/#project'>
                                                Project
                                            </Link>
                                        </Typography>
                                        <Typography variant='h6'>
                                            <Link to='/#contact'>
                                                Contact
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <Box sx={{ mb: 1, mt: 2 }}>
                                        <Typography variant='h5' sx={{ color: '#9e9e9e' }}>
                                            Follow
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mb: 4 }}>
                                        <Typography variant="h6">
                                            <a href="https://www.linkedin.com/in/anthony-xiangyu-zhang/" target="_blank" rel="noreferrer">
                                                LinkedIn
                                            </a>
                                        </Typography>
                                        <Typography variant="h6">
                                            <a href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer">
                                                StackOverflow
                                            </a>
                                        </Typography>
                                        <Typography variant="h6">
                                            <a href="https://github.com/AnthonyZhang220" target="_blank" rel="noreferrer">
                                                GitHub
                                            </a>
                                        </Typography>
                                        <Typography variant="h6">
                                            <a href="https://dev.to/anthonyzhang220" target="_blank" rel="noreferrer">
                                                Dev Community
                                            </a>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Suspense fallback={<Box sx={{ minWidth: '300px', width: '100%', overflow: 'hidden' }}><Widget>Loading...</Widget></Box>}>
                                <MusicPlayer />
                            </Suspense>
                        </Grid>
                    </Grid>
                </Box>
                <Divider flexItem variant='middle' />
                <Box className="footer-bottom">
                    <Box className="copyright">
                        <Box sx={{ ml: 2 }}>
                            <span className='copyright-text'>
                                &copy; 2020-{currentYear} <span className='name'>Anthony Zhang</span>. All Rights Reserved. Powered by ReactJs + GSAP + Netlify + Material UI.
                            </span>
                        </Box>
                    </Box>
                </Box>
            </footer>
            {/* <Error reason={error} /> */}
        </Box>
    );
};

const FooterSocialIcon = () => {
    const [openWeChat, setOpenWeChat] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpenWeChat = () => setOpenWeChat(true);
    const handleCloseWeChat = () => setOpenWeChat(false);

    const handleSave = () => {
        setLoading(true)

        setTimeout(() => {
            const link = document.createElement('a')
            link.href = './assets/images/wechat.png'
            link.download = `Anthony Zhang WeChat QR Code.png`;
            link.click();
        }, 1000)

        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }

    return (
        <Box className='social-icon'>
            <Box>
                <IconButton sx={{ color: '#fafafa', fontSize: 25 }} component='a' href="https://www.linkedin.com/in/anthony-xiangyu-zhang/" target="_blank" rel="noreferrer" aria-label="Link to Linkedin">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </IconButton>
                <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2 }} component='a' href="https://github.com/AnthonyZhang220" target="_blank" rel="noreferrer" aria-label="Link to Github">
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                </IconButton>
                <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2 }} component='a' href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer" aria-label="Link to Stackoverflow">
                    <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
                </IconButton>
                <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2 }} component='a' href='https://dev.to/anthonyzhang220' target="_blank" rel="noreferrer" aria-label="Link to Dev.To">
                    <FontAwesomeIcon icon="fab fa-dev" />
                </IconButton>
                <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2, mr: 2 }} onClick={handleOpenWeChat} aria-label="Link to Wechat QR code">
                    <FontAwesomeIcon icon="fa-brands fa-weixin" />
                </IconButton>
            </Box>
            <Modal
                open={openWeChat}
                onClose={handleCloseWeChat}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
            >
                <Fade in={openWeChat}>
                    <Box sx={style}>
                        {
                            loading ?
                                <Box sx={{ width: '100%' }}>
                                    <LinearProgress color="primary" />
                                </Box> : null
                        }
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            Scan QR code to add me on WeChat.
                        </Typography>
                        <Box
                            component='img'
                            alt="WeChat QR code"
                            src="./assets/images/wechat.png"
                            sx={{ height: 300, width: 300, display: "flex", justifyContent: 'center', alignItems: 'center' }}
                        >
                        </Box>
                        <LoadingButton
                            onClick={handleSave}
                            variant="contained"
                            endIcon={<DownloadRoundedIcon />}
                            loadingPosition="end"
                            loading={loading}
                            aria-label="Button to save Wechat QR code"
                        >Save QR Code
                        </LoadingButton>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
}
