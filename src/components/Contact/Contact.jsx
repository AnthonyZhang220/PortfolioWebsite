import React, { useState } from 'react';

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
import Draggable from 'react-draggable';

import { styled } from '@mui/material/styles';
import "./Contact.scss"



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function Contact() {

    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        name: null,
        email: null,
        phone: null,
        intention: null,
        date: null,
        message: null,
    })

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

    const handleClose = () => {
        setOpenDialog(false);
    }


    const handleClickOpen = () => {
        console.log(input);
        setOpenDialog(true);
    }
    const handleSubmit = () => {
        setLoading(true);

    }




    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h2>Contact.&nbsp;</h2>
                <span className='contact-subtitle'>
                    It's never hard to reach out to me, at any time.
                </span>
            </div>
            <div className="contact-container">
                <div className="illustration">
                    <img src="/assets/images/contact_bg.png" alt="contact_background_image" />
                </div>
                <div className="form-wrapper">
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                    >
                        <div>
                            <TextField
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
                                fullWidth
                                id="outlined-textarea"
                                label="Phone Number"
                                type='tel'
                                name='phone'
                                autoComplete='phone'
                                placeholder="+1234567890"
                                helperText='Please enter your phone number'
                                onChange={handleOnChange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PhoneIphoneIcon /></InputAdornment>,
                                }}
                            />
                            <TextField
                                fullWidth
                                required
                                select
                                id="outlined-select-currency"
                                name='intention'
                                label="Intention"
                                onChange={handleOnChange}
                                helperText='You are?'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><ConnectWithoutContactIcon /></InputAdornment>,
                                }}
                            >
                                <MenuItem value='Collaborator' divider={true}>Collaborator</MenuItem>
                                <MenuItem value='Recruitor' divider={true}>Recruitor</MenuItem>
                                <MenuItem value='Other'>Other</MenuItem>
                            </TextField>
                            <TextField
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
                            <Box sx={{ mt: 1, ml: 1, mb: 1 }} onClick={handleClickOpen}>
                                <Button variant="outlined">Submit</Button>
                            </Box>
                        </div>
                    </Box>
                </div>
            </div >
            <Dialog
                open={openDialog}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                {
                    loading ?
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box> : null
                }

                <DialogTitle id="dialog-title" style={{ cursor: 'move' }}>
                    Confirmation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Box sx={{ flexGrow: 5, overflow: "hidden", px: 3 }}>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <AccountCircleIcon />
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography noWrap>Name: {input.name}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <EmailIcon />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography noWrap>Email: {input.email}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <PhoneIphoneIcon />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography>Phone: {input.phone}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <ConnectWithoutContactIcon />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography>Intention: {input.intention}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <TodayIcon />
                                    </Grid>
                                    <Grid item xs>
                                        <Typography>Date: {input.date}</Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <MessageIcon />
                                    </Grid>
                                    <Grid item xs>
                                        Message: {input.message}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant='outlined' onClick={handleClose}>
                        Cancel
                    </Button>
                    <LoadingButton
                        onClick={handleSubmit}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Submit
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </div >
    )
}
