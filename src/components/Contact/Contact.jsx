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

import "./Contact.scss"
import { useEffect } from 'react';


export default function Contact() {


    const [intention, setIntention] = useState('Recruitor');
    const [name, setName] = useState('');


    const handleChange = (e) => {
        setIntention(e.target.value);
    };

    const handleName = (e) => {
        e.persist();
        setName(e.target.value);
    }


    // const handle = useCallback((target)=>{
    //     setName=(e.target.value)
    // })

    const [input, setInput] = useState({
        name: '',
        email: '',
        message: '',
        recruiter: false,
        collaborator: false,
    })

    const [submitted, setSubmitted] = useState(false)
    const [checked, setChecked] = useState([false, false])

    useEffect(() => {

    }, [name])

    return (
        <div className='contact' id='contact'>
            <div className="contact-container">
                <div className="illustration">
                    <img src="/assets/images/contact_bg.png" alt="contact_background_image" />
                </div>
                <div className="form-wrapper">
                    <div className="contact-title">
                        <Typography variant='h3' mt={10} mb={2}>
                            Contact Me
                        </Typography>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1 },
                        }}
                        autoComplete="off"
                    >
                        <div>
                            <TextField
                                fullWidth
                                required
                                id="outlined-textarea"
                                label="Name"
                                type='text'
                                placeholder="Anthony Zhang"
                                helperText='Please enter your name'
                                onChange={handleName}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><AccountCircleIcon /></InputAdornment>,
                                }}
                            />
                            <TextField
                                fullWidth
                                required
                                id="outlined-textarea"
                                type='email'
                                label="Email"
                                placeholder="anthonyzhang1997@gmail.com"
                                helperText='Please enter your email'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                                }}
                            />
                            <TextField
                                fullWidth
                                id="outlined-textarea"
                                label="Phone Number"
                                type='tel'
                                placeholder="+1234567890"
                                helperText='Please enter your phone number'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><PhoneIphoneIcon /></InputAdornment>,
                                }}
                            />
                            <TextField
                                fullWidth
                                required
                                select
                                id="outlined-select-currency"
                                label="Intention"
                                value={intention}
                                onChange={handleChange}
                                helperText='You are a'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><ConnectWithoutContactIcon /></InputAdornment>,
                                }}
                            >
                                <MenuItem value='Collaborator' divider={true}>Collaborator</MenuItem>
                                <MenuItem value='Recruitor'>Recruitor</MenuItem>
                            </TextField>
                            <TextField
                                fullWidth
                                id="outlined-textarea"
                                type='date'
                                label="Date"
                                placeholder=""
                                helperText='Date'
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
                                defaultValue={`Hi, ${name}`}
                                helperText="Please leave a message"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><MessageIcon /></InputAdornment>,
                                }}
                            />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}
