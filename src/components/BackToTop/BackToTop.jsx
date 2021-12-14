import { forwardRef } from "react";


const BackToTop = forwardRef((props, ref) => {
    return (
        <button  ref={ref} {...props}>
            <i className="fas fa-angle-double-up"></i>
        </button>
    );
});

export default BackToTop;
