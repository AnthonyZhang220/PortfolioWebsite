import React, { useState, useEffect, forwardRef } from 'react'
import MuiAlert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


function StatusSnackbar(status) {
    const [statusOpen, setStatusOpen] = useState(null);
    useEffect(() => {
        if (status) {
            setStatusOpen(true)
        }
    }, [status])
    return (
        <>
            {/* <Snackbar open={Object.keys(isFieldEmpty).every(key => isFieldEmpty[key])} autoHideDuration={3000}
                onClose={handleFieldEmptyClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleFieldEmptyClose} severity="warning" sx={{ width: '100%' }}>
                    Please fill out your&nbsp;
                    {
                        Object.keys(isFieldEmpty).filter((key) => isFieldEmpty[key] === true).map((term) => {
                            return term[0].toUpperCase() + term.slice(1);
                        })
                    }!
                </Alert>
            </Snackbar> */}
            <Snackbar open={statusOpen} autoHideDuration={3000} onClose={() => setStatusOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={() => setStatusOpen(false)} severity="error" sx={{ width: '100%' }}>
                    {status.reason}
                </Alert>
            </Snackbar>
        </>
    )
}

export default StatusSnackbar