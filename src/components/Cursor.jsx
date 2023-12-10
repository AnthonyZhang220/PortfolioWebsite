import React from 'react'
import useCustomCursor from '../hooks/useCustomCursor';
import CircularProgressWithLabel from './CircularProgressWithLabel';

function Cursor() {
    const { cursorRef, cursorOnProjectSection, progress } = useCustomCursor();
    return (
        <div className={cursorOnProjectSection ? "progress-cursor" : "cursor"} id="cursor" ref={cursorRef}>
            {cursorOnProjectSection ?
                <CircularProgressWithLabel progress={progress} />
                :
                null
            }
        </div>
    )
}

export default Cursor