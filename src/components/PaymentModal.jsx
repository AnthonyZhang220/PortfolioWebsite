import { Modal } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import "../App.scss";

function PaymentModal({ isOpen, handlePaymentModalClose }) {

    return (
        <Modal
            open={isOpen}
            onClose={handlePaymentModalClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className="payment-modal"
                sx={{ bgcolor: "background.default" }}
            >
                <Box className="payment-modal-container">
                    <Box className="payment-modal-close" onClick={handlePaymentModalClose}>
                        <CloseRoundedIcon className="close-icon" />
                    </Box>
                    <Box className="payment-modal-body">
                        <Box className="payment-title">
                            <Typography variant="h4">Buy me a cup of Bubble Tea</Typography>
                            <Typography variant="h6">You will help a kind developer survive this winter.</Typography>
                        </Box>
                        <Box className="payment-code-container">
                            <Box className="payment-code-image">
                                <img src="/assets/wechat_qrcode.png" alt="Wechat_QRCODE" />
                            </Box>
                            <Box className="payment-code-image">
                                <img src="/assets/venmo_qrcode.jpg" alt="Venmo_QRCODE" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default PaymentModal