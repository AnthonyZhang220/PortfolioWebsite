import React, { useState, useEffect, forwardRef } from 'react'
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function StatusSnackbar({ status, reason }) {
    const [statusOpen, setStatusOpen] = useState(null);
    useEffect(() => {
        if (reason !== null) {
            setStatusOpen(true)
        }
    }, [status, reason])
    return (
        <Snackbar open={statusOpen} autoHideDuration={5000} onClose={() => setStatusOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
            <Alert onClose={() => setStatusOpen(false)} severity="error" sx={{ width: '100%' }}>
                {reason}
            </Alert>
        </Snackbar>
    )
}

export default StatusSnackbar