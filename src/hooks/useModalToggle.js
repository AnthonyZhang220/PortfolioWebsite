import { useState } from "react"

function useModalToggle() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return { isOpen, handleOpen, handleClose }
}

export default useModalToggle