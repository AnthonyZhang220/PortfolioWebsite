import React, { forwardRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router";
import MusicPlayer from './MusicPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@material-ui/core';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import LinearProgress from '@mui/material/LinearProgress';
import { LoadingButton } from '@mui/lab';
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import { styled } from '@mui/material/styles';
import { HashLink } from "react-router-hash-link";

import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './Footer.scss';

library.add(fab);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
    textField: {
        padding: 0,
    },
    input: {
        backgroundColor: 'white',
    },
    divider: {
        background: 'white',
        borderRightWidth: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
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

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function Footer() {
    let currentYear = new Date().getFullYear();
    const classes = useStyles();
    const [input, setInput] = useState('')
    const [success, setSuccess] = useState(false);
    const [valid, setValid] = useState(true);
    const [openWeChat, setOpenWeChat] = useState(false);
    const [loading, setLoading] = useState(false);
    const [like, setLike] = useState(1);
    const [fav, setFav] = useState(1);
    const [isMobile, setIsMobile] = useState(false);

    const params = useParams();

    const handleShare = () => {

        if (/iPhone|iPad|Android/i.test(navigator.userAgent)) {
            setIsMobile(true);
        }

        if (isMobile) {
            navigator.share(
                {
                    title: document.title,
                    text: `Check out this portfolio website!`,
                    url: window.location.href,
                }).then(() => {
                    console.log('Success!');
                }).catch(error => {
                    console.error('Something went wrong:', error)
                })
        } else {
            return null
        }

    }

    const handleOpenWeChat = () => setOpenWeChat(true);
    const handleCloseWeChat = () => setOpenWeChat(false);

    const handleEmailChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {

        const res = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        res.test(input) ? setValid(true) : setValid(false);

        if (valid) {
            setSuccess(true);
        } else {
            setSuccess(false)
            console.log(success)
        }
    }

    const handleClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setValid(true);
        setSuccess(false);
    }

    const handleLike = async () => {
        setLike(like + 1);

        await fetch(`http://localhost:5000/update/like`, {
            method: 'POST',
            body: like,
        })
    }
    const handleFav = async () => {
        setFav(fav + 1);

        await fetch(`http://localhost:5000/update/fav`, {
            method: 'POST',
            body: fav,
        })
    }

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

        }, 3000)
    }

    useEffect(() => {
        async function getCount() {
            const response = await fetch("http://localhost:5000/count/");

            if (!response.ok) {
                const message = `An error occurred:${response.statusText}`
                console.log(message)
                return;
            }
            const count = await response.json();
            console.log(count[0].like);


            setLike(count[0].like);
            setFav(count[0].fav);
        }

        getCount();

        return;
    }, [fav, like])



    return (
        <footer>
            <div className="top">
                <Box>
                    <Container>
                        <Grid container direction='row'>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant='h5'>
                                        Stay Connected
                                    </Typography>
                                </Box>
                                <Box component='form'
                                    sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <TextField
                                        error={!valid}
                                        hiddenLabel
                                        size='small'
                                        color='secondary'
                                        name='email'
                                        type='email'
                                        variant='filled'
                                        label=''
                                        placeholder='Your Email Address'
                                        className={classes.input}
                                        onChange={handleEmailChange}
                                        value={input}
                                        autoComplete='email'
                                    >
                                    </TextField>
                                    <Button color='white' variant='outlined' onClick={handleSubmit} endIcon={<SendIcon />} >Submit</Button>
                                    <Snackbar open={success && valid} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                                            Your have successfully submitted your email address!
                                        </Alert>
                                    </Snackbar>
                                    <Snackbar open={!success && !valid} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
                                            Please enter a valid email address!
                                        </Alert>
                                    </Snackbar>
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant='h7'>
                                        If you like this website, please leave a like!
                                    </Typography>
                                </Box>
                                <Typography variant='h7'>
                                    If you love it, please leave a heart!
                                </Typography>
                                <Box sx={{ mt: 2 }}>
                                    <IconButton sx={{ color: '#fafafa', fontSize: 30 }} onClick={handleLike}>
                                        <Badge badgeContent={like} color="primary">
                                            <ThumbUpRoundedIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton sx={{ color: '#fafafa', fontSize: 30 }} onClick={handleFav}>
                                        <Badge badgeContent={fav} color="primary">
                                            <FavoriteRoundedIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton sx={{ color: '#fafafa', fontSize: 30 }} onClick={handleShare}>
                                        <ShareRoundedIcon>
                                        </ShareRoundedIcon>
                                    </IconButton>
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
                                            <Typography variant='body1' sx={{ color: '#fafafa' }}>
                                                <HashLink to='/#home'>
                                                    Home
                                                </HashLink>
                                            </Typography>
                                            <Typography variant='body1'>
                                                <HashLink to='/#about'>
                                                    About
                                                </HashLink>
                                            </Typography>
                                            <Typography variant='body1'>
                                                <HashLink to='/#project'>
                                                    Project
                                                </HashLink>
                                            </Typography>
                                            <Typography variant='body1'>
                                                <HashLink to='/#contact'>
                                                    Contact
                                                </HashLink>
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
                                            <Typography variant="body1">
                                                <a href="https://www.linkedin.com/in/anthony-xiangyu-zhang/" target="_blank" rel="noreferrer">
                                                    LinkedIn
                                                </a>
                                            </Typography>
                                            <Typography variant="body1">
                                                <a href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer">
                                                    StackOverflow
                                                </a>
                                            </Typography>
                                            <Typography variant="body1">
                                                <a href="https://github.com/AnthonyZhang220" target="_blank" rel="noreferrer">
                                                    GitHub
                                                </a>
                                            </Typography>
                                            <Typography variant="body1">
                                                <a href="https://medium.com/@anthonyzhang220" target="_blank" rel="noreferrer">
                                                    Medium
                                                </a>
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                                <MusicPlayer />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
            <Divider flexItem variant='middle' classes={{ root: classes.divider }} />
            <div className="bottom">
                <div className="copyright">
                    <Box sx={{ ml: 2 }}>
                        <span className='copyright-text'>
                            &copy; 2020-{currentYear} <span className='name'>Anthony Zhang</span>. All Rights Reserved.
                        </span>
                    </Box>
                </div>
                <div className='social-icon'>
                    <Box>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25 }} component='a' href="https://www.linkedin.com/in/anthony-xiangyu-zhang/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                        </IconButton>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2 }} component='a' href="https://github.com/AnthonyZhang220" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </IconButton>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2 }} component='a' href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
                        </IconButton>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2 }} component='a' href='https://www.hackerrank.com/anthonyzhang1997' target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-hackerrank" />
                        </IconButton>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2 }} component='a' href='https://medium.com/@anthonyzhang220' target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-medium" />
                        </IconButton>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, ml: 2, mr: 2 }} onClick={handleOpenWeChat}>
                            <FontAwesomeIcon icon="fa-brands fa-weixin" />
                        </IconButton>
                    </Box>
                    <Modal
                        open={openWeChat}
                        onClose={handleCloseWeChat}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
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
                                >Save QR Code
                                </LoadingButton>
                            </Box>
                        </Fade>
                    </Modal>
                </div>
            </div>
        </footer >
    );
};
