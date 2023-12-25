import React from 'react'
import useCustomCursor from '../hooks/useCustomCursor';
import CircularProgressWithLabel from './CircularProgressWithLabel';

function Cursor({ mode }) {
    const { cursorRef, cursorOnProjectSection, progress } = useCustomCursor();
    return (
        <div className={cursorOnProjectSection ? "progress-cursor" : mode === "light" ? "cursor" : "cursor-dark"} id="cursor" ref={cursorRef}>
            {cursorOnProjectSection ?
                <CircularProgressWithLabel progress={progress} />
                :
                null
            }
        </div>
    )
}

export default Cursor