import { forwardRef } from "react";


const BackToTop = forwardRef((props, ref) => {
    return (
        <div className="backtotop-button" ref={ref} {...props}>
            <i className="fas fa-angle-double-up"></i>
        </div>
    );
});

export default BackToTop;
