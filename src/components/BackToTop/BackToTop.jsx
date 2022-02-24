import { forwardRef } from "react";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


const BackToTop = forwardRef((props, ref) => {
    return (
        <ArrowCircleUpIcon fontSize='large' ref={ref} {...props} />
    );
});

export default BackToTop;
