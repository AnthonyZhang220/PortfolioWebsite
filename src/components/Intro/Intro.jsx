import "./Intro.scss"
import { useEffect, useRef } from "react";
import { init } from 'ityped';

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current,{
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings:['Developer', 'Engineer']
        });
    },[])
    
    return (
        <div className='intro' id='intro'>
            <div className="left">
                <div className="imgContainer">

                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Welcome, I'm</h2>
                    <h1>Anthony Zhang</h1>
                    <h3>Frontend <span ref={textRef}></span></h3>
                </div>
            </div>
            <a href="#portfolio">
                <i class="fas fa-chevron-down"></i>
            </a>
        </div>
    )
}