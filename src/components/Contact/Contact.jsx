import { useRef, useEffect } from 'react';
import { init } from '@emailjs/browser';
import { gsap } from 'gsap';

import useFormValidation from '../../hooks/useFormValidation';
import useRecaptcha from '../../hooks/useRecaptcha';
import useContactForm from '../../hooks/useContactForm';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MessageIcon from '@mui/icons-material/Message';
import TodayIcon from '@mui/icons-material/Today';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import "./Contact.scss"
import { FormHelperText, IconButton, Tooltip } from '@mui/material';
import FormSubmitDialog from './FormSubmitDialog';
import useDialog from '../../hooks/useDialog';


library.add(fab);
init(process.env.REACT_APP_USER_ID);




export default function Contact() {
    const contactSocialIcon = [
        {
            name: "Linkedin",
            icon: "linkedin",
            color: "#0a66c2",
            href: "https://www.linkedin.com/in/anthony-xiangyu-zhang/"
        },
        {
            name: "GitHub",
            icon: "github",
            color: "#000000",
            href: "https://github.com/AnthonyZhang220"
        },
        {
            name: "StackOverflow",
            icon: "stack-overflow",
            color: "#f27f24",
            href: "https://stackoverflow.com/users/6162027/anthony220"
        },
        {
            name: "Dev.To",
            icon: "dev",
            color: "#000000",
            href: "https://dev.to/anthonyzhang220"
        }
    ]

    const contactContainerRef = useRef();
    const contactTitleRef = useRef();

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

    return (
        <Box className='contact' id='contact' sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItem: "center", }} ref={contactContainerRef}>
            <Grid container direction="row" className='contact-grid-container'>
                <Grid item xs={12} md={6} className="contact-title-grid" ref={contactTitleRef} padding={2}>
                    <Box sx={{
                        p: 3.5,
                    }}>
                        <Box className='contact-title-background'>
                            <Typography variant="h3" color="#212121" textAlign="center" fontWeight="500">
                                Contact.&nbsp;
                            </Typography>
                            <Typography variant="h3" color="#6e6e73" textAlign="center" fontWeight="500">
                                It's never hard to reach out to me, at any time.
                            </Typography>
                        </Box>
                        <Box className="contact-social-icon" textAlign="center">
                            {
                                contactSocialIcon?.map(({ name, icon, href, color }, index) => (
                                    <Paper key={index} className="contact-social-icon-tile" elevation={0} sx={{
                                        m: 1,
                                        p: 1,
                                        borderRadius: 8,
                                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                                    }}>
                                        <Tooltip title={name}>
                                            <IconButton sx={{ fontSize: 40, color: `${color}` }} href={href} disableRipple aria-label={`Link to ${name}`}>
                                                <FontAwesomeIcon icon={`fab fa-${icon}`} />
                                            </IconButton>
                                        </Tooltip>
                                    </Paper>
                                ))
                            }
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} className="form-grid-container" padding={2}>
                    <Box className="form-wrapper">
                        <Paper
                            elevation={0}
                            sx={{
                                backgroundColor: "#ffffff",
                                borderRadius: 10,
                                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                                p: 3.5,
                            }}>
                            <ContactForm />
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}


function ContactForm() {

    const formRef = useRef();
    const { formInput, handleFormSubmit, handleOnFormChange, handleRadioButton, submitStatus } = useContactForm()
    const { isFormValid, triggerValidation, resetFormValidation, error } = useFormValidation(formInput);
    const { isVerifyExpired } = useRecaptcha()
    const { handleDialogOpen, openDialog, activeStep, handleDialogClose } = useDialog(isVerifyExpired, isFormValid);

    useEffect(() => {
        console.log(openDialog)
    }, [openDialog])

    return (
        <Grid
            component="form"
            container
            sx={{
                '& .MuiTextField-root': { m: 1, p: 1 },
            }}
            ref={formRef}
        >
            <Grid item xs={12} md={6} textAlign="center" >
                <TextField
                    fullWidth
                    required
                    id="form-name"
                    label="Name"
                    type='text'
                    name='name'
                    autoComplete='name'
                    placeholder="Anthony Zhang"
                    value={formInput.name}
                    error={!isFormValid}
                    helperText={isFormValid ? "" : error}
                    onFocus={resetFormValidation}
                    onBlur={triggerValidation}
                    onChange={e => handleOnFormChange(e)}
                    variant="standard"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><AccountCircleIcon /></InputAdornment>,
                        sx: { p: 1 }
                    }}
                    InputLabelProps={{
                        sx: { fontSize: '20px', fontWeight: "bold" },
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
                <TextField
                    fullWidth
                    required
                    id="form-email"
                    label="Email"
                    type='email'
                    name='email'
                    autoComplete='email'
                    placeholder="example@gmail.com"
                    variant="standard"
                    value={formInput.email}
                    error={!isFormValid}
                    helperText={isFormValid ? "" : error}
                    onBlur={() => {
                        if (/^$|^\S+@\S+\.\S+$/.test(formInput.email)) {
                            triggerValidation();
                        };
                    }}
                    onFocus={resetFormValidation}
                    onChange={e => handleOnFormChange(e)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                        sx: { p: 1 }
                    }}
                    InputLabelProps={{
                        sx: { fontSize: '20px', fontWeight: "bold" }
                    }}
                />
            </Grid>
            {/* email */}
            <Grid item xs={12} md={6} textAlign="center">
                <TextField
                    fullWidth
                    id="form-phone-number"
                    label="Phone Number"
                    type='tel'
                    name='phone'
                    autoComplete='tel'
                    placeholder="+1234567890"
                    variant="standard"
                    value={formInput.phone}
                    error={!RegExp('^$|^[0-9]+$').test(formInput.phone)}
                    helperText={RegExp('^$|^[0-9]+$').test(formInput.phone) ? "" : "Numbers Only"}
                    onChange={e => handleOnFormChange(e)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><PhoneIphoneIcon /></InputAdornment>,
                        sx: { p: 1 }
                    }}
                    InputLabelProps={{
                        sx: { fontSize: '20px', fontWeight: "bold" }
                    }}
                />
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
                <TextField
                    fullWidth
                    id="form-date"
                    type='date'
                    label="Date"
                    name='date'
                    placeholder=""
                    value={formInput.date}
                    onChange={e => handleOnFormChange(e)}
                    variant="standard"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><TodayIcon /></InputAdornment>,
                        sx: { p: 1 }
                    }}
                    InputLabelProps={{
                        sx: { fontSize: '20px', fontWeight: "bold" }
                    }}
                />
            </Grid>
            <Grid item xs={12} md={6} textAlign='start'>
                <FormControl sx={{ p: 1 }} required error={!isFormValid}>
                    <FormLabel id="demo-controlled-radio-buttons-group" sx={{ fontWeight: "bold" }}>Intent</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="form-intention-ratio-group"
                        name="controlled-radio-buttons-group"
                        value={formInput.intention}
                        onFocus={resetFormValidation}
                        onBlur={triggerValidation}
                    >
                        <Grid item xs>
                            <FormControlLabel value="Collaborator" control={<Radio size='medium' onClick={handleRadioButton} />} label="Collaborator" />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel value="Recruitor" control={<Radio size='medium' onClick={handleRadioButton} />} label="Recruitor" />
                        </Grid>
                        <Grid item xs>
                            <FormControlLabel value="Other" control={<Radio size='medium' onClick={handleRadioButton} />} label="Other(Please specify in message)" />
                        </Grid>
                    </RadioGroup>
                    <FormHelperText>{isFormValid ? "" : error}</FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6} textAlign="center">
                <TextField
                    fullWidth
                    multiline
                    required={formInput.intention === "Other" ? true : false}
                    maxRows={4}
                    id="form-message"
                    label="Message"
                    name='message'
                    variant="standard"
                    value={formInput.message}
                    error={formInput.intention === "Other" && !isFormValid}
                    helperText={formInput.intention === "Other" && !isFormValid ? "Since you choose Other for intent, please specify your reason for contact." : ""}
                    onFocus={resetFormValidation}
                    onBlur={triggerValidation}
                    onChange={e => handleOnFormChange(e)}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><MessageIcon /></InputAdornment>,
                        sx: { p: 1 }
                    }}
                    InputLabelProps={{
                        sx: { fontSize: '20px', fontWeight: "bold" }
                    }}
                />
            </Grid>
            <Grid item xs sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 1, textAlign: "start" }}>
                <Button onClick={handleDialogOpen} aria-label="Check Form Info before Submit" variant="outlined">Submit</Button>
            </Grid>
            <FormSubmitDialog openDialog={openDialog} activeStep={activeStep} formInput={formInput} handleFormSubmit={handleFormSubmit} submitStatus={submitStatus} handleDialogClose={handleDialogClose} />
        </Grid>
    )
}
