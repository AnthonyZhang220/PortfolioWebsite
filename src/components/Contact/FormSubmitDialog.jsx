import { useEffect } from "react"
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MessageIcon from '@mui/icons-material/Message';
import TodayIcon from '@mui/icons-material/Today';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import useRecaptcha from "../../hooks/useRecaptcha";
import ReCaptcha from "./ReCaptcha";
import StatusSnackbar from "../StatusSnackbar";

function PaperComponent(props) {
    return (
        <Paper {...props} />
    );
};

export default function FormSubmitDialog({ formInput, openDialog, activeStep, submitStatus, handleFormSubmit, handleDialogClose }) {
    const steps = ['Confirm your info', 'Verify you are a human', 'Submit contact form']
    const { isRecaptchaLoaded } = useRecaptcha();
    useEffect(() => {
        console.log(openDialog)
    }, [openDialog])

    const formConfirmationList = [
        {
            icon: <AccountCircleIcon />,
            name: "Name",
            text: formInput.name,
        },
        {
            icon: <EmailIcon />,
            name: "Email",
            text: formInput.email,
        },
        {
            icon: <PhoneIphoneIcon />,
            name: "Phone",
            text: formInput.phone,
        },
        {
            icon: <ConnectWithoutContactIcon />,
            name: "Intention",
            text: formInput.intention,
        },
        {
            icon: <TodayIcon />,
            name: "Date",
            text: formInput.date,
        },
    ]
    return (
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
                    {
                        formConfirmationList?.map(({ icon, name, text }, index) => (
                            <Grid container item spacing={2} xs={12} key={index}>
                                <Grid item>
                                    {icon}
                                </Grid>
                                <Grid item xs zeroMinWidth>
                                    <Typography noWrap>{name}: {text}</Typography>
                                </Grid>
                            </Grid>
                        ))
                    }
                    <Grid container item spacing={2} xs={12}>
                        <Grid item>
                            <MessageIcon />
                        </Grid>
                        <Grid item xs sx={{
                            whiteSpace: "pre-wrap",
                            wordBreak: "break-all",
                        }}>
                            <Typography>Message:</Typography>
                            <Typography>{formInput.message}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 'auto' }} >
                <Box>
                    <ReCaptcha />
                    <Box sx={{ display: 'flex', width: 'auto', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 2 }}>
                        <Button variant='outlined' onClick={handleDialogClose}>
                            Cancel
                        </Button>
                        {
                            submitStatus?.status === "success" ?
                                <StatusSnackbar submitStatus={submitStatus} />
                                :
                                <LoadingButton
                                    sx={{ ml: 2 }}
                                    onClick={handleFormSubmit}
                                    endIcon={<SendIcon />}
                                    variant="contained"
                                    loading={submitStatus?.status === "loading"}
                                    disabled={!isRecaptchaLoaded}
                                    aria-label="Send Form to Server"
                                >
                                    Send
                                </LoadingButton>
                        }
                    </Box>
                </Box>
            </DialogActions>
        </Dialog>
    )
}
