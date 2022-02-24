import React, { forwardRef, useState } from 'react';
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

import IconButton from '@mui/material/IconButton';

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

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function Footer() {
    let currentYear = new Date().getFullYear();
    const classes = useStyles();
    const [input, setInput] = useState('')
    const [success, setSuccess] = useState(false);
    const [valid, setValid] = useState(false);

    const handleEmailChange = (e) => {
        setInput(e.target.value);

        const res = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        res.test(input) ? setValid(true) : setValid(false);

    }

    const handleSubmit = () => {
        console.log(success)
        console.log(valid)


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
        setSuccess(false);
    }



    return (
        <footer>
            <div className="top">
                <Box>
                    <Container>
                        <Grid container direction='row' rowSpacing={5}>
                            <Grid item sm={12} md={6} lg={4}>
                                <Box>
                                    <Typography variant='h5'>
                                        Anthony Zhang
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        paragraphparagraphparagraphparah
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant='h6'>
                                        Stay Connected
                                    </Typography>
                                </Box>
                                <Box component='form'
                                    autoComplete="off"
                                    sx={{ display: 'flex' }}>
                                    <TextField
                                        hiddenLabel
                                        size='small'
                                        color='secondary'
                                        fullWidth
                                        name='Email'
                                        type='email'
                                        variant='filled'
                                        helperText=''
                                        placeholder='Your Email Address'
                                        className={classes.input}
                                        onChange={handleEmailChange}
                                        value={input}
                                    >
                                    </TextField>
                                    <Button color='white' variant='outlined' onClick={handleSubmit} endIcon={<SendIcon />} >Submit</Button>
                                    <Snackbar open={success} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
                                            Your have successfully submitted your email address!
                                        </Alert>
                                    </Snackbar>
                                </Box>

                            </Grid>
                            <Grid item sm={12} md={6} lg={4}>
                                <Box sx={{ marginBottom: 10 }}>
                                    <Typography variant='h6'>
                                        Explore
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box>Home</Box>
                                    <Box>About</Box>
                                    <Box>Project</Box>
                                    <Box>Contact</Box>
                                </Box>
                            </Grid>
                            <Grid item sm={12} md={6} lg={4}>
                                <Box sx={{ marginBottom: 10 }}>
                                    <Typography variant='h6'>
                                        Follow
                                    </Typography>
                                </Box>
                                <Box>LinkedIn</Box>
                                <Box>StackOverflow</Box>
                                <Box>GitHub</Box>
                                <Box>Contact</Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </div>
            <Divider flexItem variant='middle' classes={{ root: classes.divider }} />
            <div className="bottom">
                <div className="copyright">
                    <span className='copyright-text'>
                        &copy; 2020-{currentYear} Anthony Zhang. All Rights Reserved.
                    </span>
                </div>
                <div className='social-icon'>
                    <Box>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, marginLeft: 2 }} component='a' href="https://www.linkedin.com/in/anthony-xiangyu-zhang/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                        </IconButton>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, marginLeft: 2 }} component='a' href="https://github.com/AnthonyZhang220" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-github" />
                        </IconButton>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, marginLeft: 2 }} component='a' href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />
                        </IconButton>
                        <IconButton sx={{ color: '#fafafa', fontSize: 25, marginLeft: 2 }} component='a' href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon="fa-brands fa-weixin" />
                        </IconButton>
                    </Box>
                </div>
            </div>
        </footer >
    );
};
