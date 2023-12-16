import { useState } from "react"

function useModalToggle() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = () => {
        setModalOpen(true);
    }

    const handleClose = () => {
        setModalOpen(false);
    }

    return [modalOpen, handleOpen, handleClose]
}

export default useModalToggle