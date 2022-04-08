import { forwardRef } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const BackToTop = forwardRef((props, ref) => {
    return (
        <ArrowUpwardIcon fontSize='large' ref={ref} {...props} />
    );
});

export default BackToTop;
