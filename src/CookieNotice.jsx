import React, { useState, useEffect } from 'react';

import { Dialog } from '@mui/material';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import Cookies from 'js-cookie';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow ref={ref} {...props} />;
});

function CookieNotice() {
    const [open, setOpen] = useState(false);
    const handleAcceptCookie = () => {
        Cookies.set("cookieAccepted", true)
        handleClose();
    }

    useEffect(() => {
        const accepted = Cookies.get("cookieAccepted")
        if (accepted) {
            setOpen(false)
        } else {
            setTimeout(() => {
                setOpen(true)
            }, [5000])
        }
    }, [])

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={handleClose}
            sx={{
                p: "0.5rem 1rem",
                borderRadius: "0.5rem",
                textAlign: "center",
            }}
        >
            <Alert severity='info'>
                <Typography>
                    We use cookies to enhance your browsing experience. These preferences will only be stored inside your browser, and it will expire after 7 days.
                </Typography>
                <Typography>
                    We assume you are ok with it. Click the 'Accept' button to continue.
                </Typography>
                <Button color="info" variant='contained' onClick={() => handleAcceptCookie()}>
                    Accept
                </Button>
            </Alert>
        </Dialog>
    )
}

export default CookieNotice

