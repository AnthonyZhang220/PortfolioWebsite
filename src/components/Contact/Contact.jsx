import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import { gsap } from 'gsap/all';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MessageIcon from '@mui/icons-material/Message';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TodayIcon from '@mui/icons-material/Today';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';
import "./Contact.scss"
import { IconButton, useMediaQuery } from '@mui/material';


library.add(fab);
init(process.env.REACT_APP_USER_ID);


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function PaperComponent(props) {
    return (
        <Paper {...props} />
    );
};



export default function Contact() {

    const isMobile = useMediaQuery('(max-width: 600px)');

    const steps = ['Confirm your info', 'Verify you are a human', 'Submit contact form'];
    const [activeStep, setActiveStep] = useState(1);
    const [expired, setExpired] = useState(false);
    const [error, setError] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [success, setSuccess] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        intention: "",
        date: "",
        message: "Hi, ",
    })

    const contactSocialIcon = [
        {
            name: "Linkedin",
            icon: "linkedin",
            href: "https://www.linkedin.com/in/anthony-xiangyu-zhang/"
        },
        {
            name: "GitHub",
            icon: "github",
            href: "https://github.com/AnthonyZhang220"
        },
        {
            name: "StackOverflow",
            icon: "stack-overflow",
            href: "https://stackoverflow.com/users/6162027/anthony220"
        },
        {
            name: "Medium",
            icon: "medium",
            href: "https://medium.com/@anthonyzhang220"
        },
        {
            name: "HackerRank",
            icon: "hackerrank",
            href: "https://www.hackerrank.com/anthonyzhang1997"
        },
    ]

    const formRef = useRef();
    const contactContainerRef = useRef();
    const contactTitleRef = useRef();
    const recaptchaRef = React.createRef();

    const [errorCode, setErrorCode] = useState(false);

    const showErrorCode = (error) => {

        setErrorCode(true);

        return (
            <Snackbar open={errorCode} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleCloseErrorCode} severity="error" sx={{ width: '100%' }}>
                    {error}. Please try again later.
                </Alert>
            </Snackbar>
        )
    }

    const handleCloseErrorCode = () => {
        setErrorCode(false);
    }


    const handleOnChange = (e) => {


        const { name, email, phone, date, message, intention, value } = e.target;

        setInput({
            ...input,
            [name]: value,
            [email]: value,
            [phone]: value,
            [intention]: value,
            [date]: value,
            [message]: value,
        })

    }


    const handleShowExpired = () => {
        setLoading(true);
        setExpired(true);

        setActiveStep(1);

    }
    const handleCloseExpired = () => {
        setExpired(false);
        setLoading(false);
    }

    const handleCloseSuccess = () => {
        setSuccess(false);
        setIsVerified(false);
    }

    const handleCloseError = () => {
        setError(false);
        setLoading(false);
    }

    const handleDialogClose = () => {
        setOpenDialog(false);
        setActiveStep(1);
        setIsVerified(false);
        setSuccess(false);
    }


    const handleClickOpen = () => {
        setOpenDialog(true);
    }

    const handleVerify = () => {
        setIsVerified(true)
        setActiveStep(activeStep + 1);
    }
    const handleSubmit = () => {
        // setLoading(true);
        // recaptchaRef.current.execute();

        if (!isVerified) {
            setLoading(true);
            setError(true);
        } else if (expired) {
            setLoading(true);
            setExpired(true);
        } else {

            // const captcha = document.querySelector('#g-recaptcha-response').value;

            // fetch('/submit', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json, text/plain, */*',
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify({ ...input, captcha: captcha })
            // })
            //     .then((res) => {
            //         res.json();
            //     })
            //     .then((data) => {
            //         console.log(data);
            //     })
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current).then((response) => {
                setLoading(false);
                setSuccess(true);
                setActiveStep(activeStep + 1);

                console.log('Success!', response)
            }, (error) => {
                showErrorCode(error);
                console.log('Error', error)
            });
        }
    }

    useEffect(() => {
        const animation = gsap.fromTo(contactTitleRef.current, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, scrollTrigger: {
                trigger: contactTitleRef.current,
                start: 'top bottom',
            }
        })
        const leftAnimation = gsap.fromTo(contactTitleRef.current, { x: "50%" }, {
            x: 0, scrollTrigger: {
                trigger: contactTitleRef.current,
                start: "top 85%",
                end: "top center",
                scrub: 1,
            }
        })
        const rightAnimation = gsap.fromTo(".form-grid-container", { opacity: 0 }, {
            opacity: 1, scrollTrigger: {
                trigger: ".form-grid-container",
                start: "top 70%",
                end: "center center",
                scrub: 1,
            }
        })

        return () => {
            animation.scrollTrigger.kill();
            leftAnimation.scrollTrigger.kill();
            rightAnimation.scrollTrigger.kill();

        }
    }, [])

    // useEffect(() => {
    //     const animation = gsap.fromTo(contactContainerRef.current, { y: 0, scale: 1 }, {
    //         y: 50,
    //         scale: 0.8,
    //         scrollTrigger: {
    //             trigger: '.footer',
    //             start: 'top bottom',
    //         }
    //     })

    //     return () => animation.scrollTrigger.kill();
    // })

    return (
        <Box className='contact' id='contact' sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItem: "center", }} ref={contactContainerRef}>
            <Grid container direction="row" className='contact-grid-container'>
                <Grid item xs={12} md={6} className="contact-title-grid" ref={contactTitleRef}>
                    <Grid item className='contact-title-background'>
                        <Paper elevation={0}
                            // square={true}
                            sx={{
                                backgroundColor: "inherit",
                                m: 2,
                                p: 2,
                            }}>
                            <Typography variant="h2" color="#212121" textAlign="center">
                                Contact.&nbsp;
                            </Typography>
                            <Typography variant="h2" color="#6e6e73" textAlign="center">
                                It's never hard to reach out to me, at any time.
                            </Typography>
                        </Paper>
                        <Grid container className="contact-social" textAlign="center">
                            {
                                contactSocialIcon?.map(({ name, icon, href, }, index) => (
                                    <Grid item xs component="a" href={href} m={"auto"} target="_blank" rel="noreferrer" key={index} >
                                        <Paper elevation={0} sx={{
                                            m: 2,
                                            p: 2,
                                            borderRadius: 10,
                                            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                                        }}>
                                            <IconButton sx={{ fontSize: 40 }} disableRipple>
                                                <FontAwesomeIcon icon={`fab fa-${icon}`} />
                                            </IconButton>
                                        </Paper>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6} className="form-grid-container">
                    <Box className="form-wrapper">
                        <Paper
                            elevation={0}
                            // square={true}
                            sx={{
                                backgroundColor: "#ffffff",
                                borderRadius: 10,
                                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                                m: 4,
                                p: 4,

                            }}>
                            <Grid
                                component="form"
                                container
                                sx={{
                                    '& .MuiTextField-root': { m: 1, p: 1 },
                                }}
                                ref={formRef}
                            >
                                <Grid item xs={12} md={6} textAlign="center">
                                    <TextField
                                        fullWidth
                                        required
                                        id="standard-basic"
                                        label="Name"
                                        type='text'
                                        name='name'
                                        autoComplete='name'
                                        placeholder="Anthony Zhang"
                                        value={input.name}
                                        onChange={e => handleOnChange(e)}
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><AccountCircleIcon /></InputAdornment>,
                                            sx: { p: 1 }
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: '20px' },
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} textAlign="center">
                                    <TextField
                                        fullWidth
                                        required
                                        id="outlined-textarea"
                                        label="Email"
                                        type='email'
                                        name='email'
                                        autoComplete='email'
                                        placeholder="example@gmail.com"
                                        variant="standard"
                                        value={input.email}
                                        onChange={e => handleOnChange(e)}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                                            sx: { p: 1 }
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: '20px' }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} textAlign="center">
                                    <TextField
                                        fullWidth
                                        id="outlined-textarea"
                                        label="Phone Number"
                                        type='tel'
                                        name='phone'
                                        autoComplete='tel'
                                        placeholder="+1234567890"
                                        variant="standard"
                                        value={input.phone}
                                        onChange={e => handleOnChange(e)}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><PhoneIphoneIcon /></InputAdornment>,
                                            sx: { p: 1 }
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: '20px' }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} textAlign="center">
                                    <TextField
                                        fullWidth
                                        id="outlined-textarea"
                                        type='date'
                                        label="Date"
                                        name='date'
                                        placeholder=""
                                        value={input.date}
                                        onChange={e => handleOnChange(e)}
                                        variant="standard"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><TodayIcon /></InputAdornment>,
                                            sx: { p: 1 }
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: '20px' }
                                        }}
                                    />
                                </Grid>
                                <Grid container item xs={12} md={6} textAlign='start' flexDirection="column">
                                    <FormControl sx={{ p: 1 }}>
                                        <FormLabel id="demo-controlled-radio-buttons-group" required>Intent</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={input.intention}
                                            onChange={e => setInput({ ...input, intention: e.target.value })}
                                        >
                                            <Grid item xs>
                                                <FormControlLabel value="Collaborator" control={<Radio size='small' />} label="Collaborator" />
                                            </Grid>
                                            <Grid item xs>
                                                <FormControlLabel value="Recruitor" control={<Radio size='small' />} label="Recruitor" />
                                            </Grid>
                                            <Grid item xs>
                                                <FormControlLabel value="Other" control={<Radio size='small' />} label="Other(Please specify in message)" />
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6} textAlign="center">
                                    <TextField
                                        fullWidth
                                        multiline
                                        required={input.intention === "Other" ? true : false}
                                        maxRows={4}
                                        id="outlined-helperText"
                                        label="Message"
                                        name='message'
                                        variant="standard"
                                        value={input.message}
                                        onChange={e => handleOnChange(e)}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><MessageIcon /></InputAdornment>,
                                            sx: { p: 1 }
                                        }}
                                        InputLabelProps={{
                                            sx: { fontSize: '20px' }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, textAlign: "start" }}>
                                    <Button onClick={handleClickOpen} variant="outlined">Submit</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                        <Dialog
                            open={openDialog}
                            onClose={handleDialogClose}
                            PaperComponent={PaperComponent}
                        >
                            <Box sx={{ pt: 4, pl: 4, pr: 4 }}>
                                <Stepper activeStep={activeStep} alternativeLabel>
                                    {steps.map((label, index) => {
                                        const stepProps = {};
                                        const labelProps = {};

                                        return (
                                            <Step key={label} {...stepProps}>
                                                <StepLabel {...labelProps}>{label}</StepLabel>
                                            </Step>
                                        );
                                    })}
                                </Stepper>
                            </Box>
                            <DialogContent dividers={true}>
                                <Grid container spacing={2} direction="row"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid container item spacing={2} xs={12}>
                                        <Grid item>
                                            <AccountCircleIcon />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>Name: {input.name}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={2} xs={12}>
                                        <Grid item>
                                            <EmailIcon />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>Email: {input.email}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={2} xs={12}>
                                        <Grid item>
                                            <PhoneIphoneIcon />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>Phone: {input.phone}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={2} xs={12}>
                                        <Grid item>
                                            <ConnectWithoutContactIcon />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>Intent: {input.intention}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={2} xs={12}>
                                        <Grid item>
                                            <TodayIcon />
                                        </Grid>
                                        <Grid item xs zeroMinWidth>
                                            <Typography noWrap>Date: {input.date}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item spacing={2} xs={12}>
                                        <Grid item>
                                            <MessageIcon />
                                        </Grid>
                                        <Grid item xs sx={{
                                            whiteSpace: "pre-wrap",
                                            wordBreak: "break-all",
                                        }}>
                                            <Typography>Message:</Typography>
                                            <Typography>{input.message}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'auto' }} >
                                <Box>
                                    <ReCAPTCHA

                                        ref={recaptchaRef}
                                        sitekey={process.env.REACT_APP_SITE_KEY}
                                        onChange={handleVerify}
                                        size="normal"
                                        onExpired={handleShowExpired}
                                    >
                                    </ReCAPTCHA>
                                    <Box sx={{ display: 'flex', width: 'auto', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 2 }}>
                                        <Button variant='outlined' onClick={handleDialogClose}>
                                            Cancel
                                        </Button>
                                        {
                                            success ?
                                                <Snackbar open={success} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                                    <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                                                        Success! Please check your email for confirmation.
                                                    </Alert>
                                                </Snackbar>
                                                :
                                                <>
                                                    <LoadingButton
                                                        sx={{ ml: 2 }}
                                                        onClick={handleSubmit}
                                                        endIcon={<SendIcon />}
                                                        variant="contained"
                                                        loading={loading}
                                                    >
                                                        Send
                                                    </LoadingButton>
                                                    <Snackbar open={error} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                                        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                                                            Please verify you are human!
                                                        </Alert>
                                                    </Snackbar>
                                                    <Snackbar open={expired} autoHideDuration={2000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                                                        <Alert onClose={handleCloseExpired} severity="warning" sx={{ width: '100%' }}>
                                                            Verification expired! Please try again!
                                                        </Alert>
                                                    </Snackbar>
                                                </>
                                        }
                                    </Box>
                                </Box>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Grid >
            </Grid>
        </Box >
    )
}
