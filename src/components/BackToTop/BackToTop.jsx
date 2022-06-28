import { forwardRef, useEffect } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


const BackToTop = forwardRef((props, ref) => {

    useEffect(()=>{
        let divs = Array.from(document.getElementsByTagName("div"));

        
    })

    

    
    return (
        <ArrowUpwardIcon fontSize='large' ref={ref} {...props} />
    );
});

export default BackToTop;
