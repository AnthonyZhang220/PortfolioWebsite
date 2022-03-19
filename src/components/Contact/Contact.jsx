import React, { useState, useRef, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';

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
import MenuItem from '@mui/material/MenuItem';
import TodayIcon from '@mui/icons-material/Today';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { LoadingButton } from '@mui/lab';
import LinearProgress from '@mui/material/LinearProgress';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


import { styled } from '@mui/material/styles';
import "./Contact.scss"

init(process.env.REACT_APP_USER_ID);


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
};

function PaperComponent(props) {
    return (
        <Paper {...props} />
    );
};



export default function Contact() {

    const steps = ['Confirm your info', 'Verify you are a human', 'Submit contact form'];
    const [activeStep, setActiveStep] = useState(1);
    const [expired, setExpired] = useState(false);
    const [error, setError] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [success, setSuccess] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: null,
        email: null,
        phone: null,
        intention: 'Recruitor',
        date: null,
        message: null,
    })

    const formRef = useRef();
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

    useEffect(()=>{
        localStorage.getItem('darkMode');
        console.log(localStorage.getItem('darkMode'))
        
    })

    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h2>Contact.&nbsp;</h2>
                <span className='contact-subtitle'>
                    It's never hard to reach out to me, at any time.
                </span>
            </div>
            <div className="contact-container">
                <div className='curved'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" height='100%'><path fill="#8b58e4" fillOpacity=".7" d="M0,128L48,106.7C96,85,192,43,288,32C384,21,480,43,576,85.3C672,128,768,192,864,202.7C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                {/* <div className="illustration">
                    <img src="/assets/images/contact_bg.png" alt="contact_background_image" />
                </div> */}
                <div className="form-wrapper">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        ref={formRef}
                    >
                        {/* <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_SITE_KEY}></div> */}
                        <TextField
                            size='small'
                            fullWidth
                            required
                            id="outlined-textarea"
                            label="Name"
                            type='text'
                            name='name'
                            autoComplete='name'
                            placeholder="Anthony Zhang"
                            helperText='Please enter your name'
                            onChange={handleOnChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AccountCircleIcon /></InputAdornment>,
                            }}
                        />
                        <TextField
                            size='small'
                            fullWidth
                            required
                            id="outlined-textarea"
                            type='email'
                            name='email'
                            label="Email"
                            autoComplete='email'
                            placeholder="anthonyzhang1997@gmail.com"
                            helperText='Please enter your email'
                            onChange={handleOnChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                            }}
                        />
                        <TextField
                            size='small'
                            fullWidth
                            id="outlined-textarea"
                            label="Phone Number"
                            type='tel'
                            name='phone'
                            autoComplete='tel'
                            placeholder="+1234567890"
                            helperText='Please enter your phone number'
                            onChange={handleOnChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PhoneIphoneIcon /></InputAdornment>,
                            }}
                        />
                        <TextField
                            size='small'
                            fullWidth
                            required
                            select
                            id="outlined-select-currency"
                            name='intention'
                            label="Intention"
                            value={input.intention}
                            onChange={handleOnChange}
                            helperText='You are?'
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><ConnectWithoutContactIcon /></InputAdornment>,
                            }}
                            SelectProps={{
                                renderValue: (value) => value,
                            }}
                        >
                            <MenuItem value='Collaborator' divider={true}>Collaborator</MenuItem>
                            <MenuItem value='Recruitor' divider={true}>Recruitor</MenuItem>
                            <MenuItem value='Other'>Other</MenuItem>
                        </TextField>
                        <TextField
                            size='small'
                            fullWidth
                            id="outlined-textarea"
                            type='date'
                            label="Date"
                            name='date'
                            placeholder=""
                            helperText='Date'
                            onChange={handleOnChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><TodayIcon /></InputAdornment>,
                            }}
                        />
                        <TextField
                            size='small'
                            fullWidth
                            required
                            multiline
                            maxRows={3}
                            id="outlined-helperText"
                            label="Message"
                            name='message'
                            defaultValue={`Hi,`}
                            helperText="Please leave a message"
                            onChange={handleOnChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><MessageIcon /></InputAdornment>,
                            }}
                        />
                    </Box>
                    <Dialog
                        open={openDialog}
                        onClose={handleDialogClose}
                        PaperComponent={PaperComponent}
                    >
                        <Box sx={{ p: 2 }}>
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
                        <DialogContent>
                            <DialogContentText>
                                <Box sx={{ flexGrow: 5, overflow: "hidden", px: 2 }}>
                                    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 1 }}>
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <AccountCircleIcon />
                                            </Grid>
                                            <Grid item xs zeroMinWidth>
                                                <Typography noWrap>Name: {input.name}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 1 }}>
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <EmailIcon />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography noWrap>Email: {input.email}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 1 }}>
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <PhoneIphoneIcon />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography noWrap>Phone: {input.phone}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 1 }}>
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <ConnectWithoutContactIcon />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography noWrap>Intention: {input.intention}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 1 }}>
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <TodayIcon />
                                            </Grid>
                                            <Grid item xs>
                                                <Typography noWrap>Date: {input.date}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                    <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 1 }}>
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <MessageIcon />
                                            </Grid>
                                            <Grid item xs >
                                                <Typography noWrap>Message: {input.message}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Box>
                            </DialogContentText>
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
                                                    Submit
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
                    <Box sx={{ mt: 1, ml: 1, mb: 1 }} onClick={handleClickOpen}>
                        <Button variant="outlined">Submit</Button>
                    </Box>
                </div>
            </div >
        </div >
    )
}
