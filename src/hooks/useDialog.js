import { useState, useCallback } from 'react'

function useDialog(isVerifyExpired, isFormValid) {

    const [activeStep, setActiveStep] = useState(1);
    const [openDialog, setOpenDialog] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleShowExpired = useCallback(() => {
        if (isVerifyExpired) {
            setLoading(true);
            setActiveStep(1);
        }

    }, [isVerifyExpired])

    const handleDialogClose = () => {
        setOpenDialog(false);
        setActiveStep(1);
    }


    const handleDialogOpen = () => {
        setOpenDialog(true)
    }

    const handler = {
        handleShowExpired,
        handleDialogClose,
        handleDialogOpen,
    }

    return { openDialog, activeStep, loading, ...handler }
}

export default useDialog