import React from 'react'
import { Backdrop, Box } from '@mui/material';

const projectScreenShotsStyle = {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    maxWidth: "90%"
};

function ImageModal({ imageSrc, imageOpen, handleImageClose }) {

    return (
        <Backdrop
            open={imageOpen}
            onClick={handleImageClose}
        >
            <Box sx={projectScreenShotsStyle} component="img" alt={imageSrc} src={imageSrc}></Box>
        </Backdrop>

    )
}

export default ImageModal