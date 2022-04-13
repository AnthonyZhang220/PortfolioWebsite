import React, { useRef, useEffect, useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import { gsap } from "gsap/all";
import { HashLink } from "react-router-hash-link";
import { ScrollToPlugin } from 'gsap/all'
import { ScrollTrigger } from "gsap/all";

import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Badge from '@mui/material/Badge';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import FingerprintIcon from '@mui/icons-material/Fingerprint';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMouse } from '@fortawesome/free-solid-svg-icons';

import { createSvgIcon } from '@mui/material/utils';
import { createStyles, makeStyles } from "@mui/styles";
import "./NavBar.scss"
import "../../global.scss"
import { relative } from "node:path/win32";



// const MouseIcon = createSvgIcon(
//     <path d="M383.5,135.9h8.4C391.9,60.5,331.4,0,256,0S120.1,60.5,120.1,135.9v240.2c0,75.4,60.5,135.9,135.9,135.9
// 		s135.9-60.5,135.9-135.9V135.9H383.5h-8.4v240.2c0,33.5-13,63.3-35.4,84.7c-21.4,21.4-52.1,35.4-84.7,35.4
// 		c-33.5,0-63.3-13-84.7-35.4c-21.4-21.4-35.4-52.1-35.4-84.7V135.9c0-33.5,13-63.3,35.4-84.7c21.4-21.4,52.1-35.4,84.7-35.4
// 		c33.5,0,63.3,13,84.7,35.4c21.4,21.4,35.4,52.1,35.4,84.7H383.5z"/>,
//     <polyline points="246.7,80.1 246.7,144.3 263.4,144.3 263.4,80.1 	" />,
//     'Mouse',
// );


export default function NavBar({ mode, setMode }) {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const leftNavRef = useRef(null);
    const rightNavRef = useRef(null);
    const midRef = useRef(null);
    // const [toggle, setToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    //top-nav animation
    useEffect(() => {

        let navbarPlayed = sessionStorage.getItem("navbarPlayed")
        if (!navbarPlayed) {

            let navTl = gsap.timeline({
                onComplete: () => {
                    sessionStorage.setItem("navbarPlayed", true)
                }
            })
                //landing animation from top for top-nav
                .fromTo([leftNavRef.current, rightNavRef.current], { y: '-100%', opacity: 0 }, { delay: 4, y: "0%", opacity: 1, duration: 1 })

            navTl.play();
        }


    });

    //title animation
    useEffect(() => {
        gsap.fromTo(midRef.current, { x: "0%", opacity: 1, }, {
            x: "25%",
            opacity: 0, scrollTrigger: {
                trigger: "body",
                start: "top -10%",
                end: "bottom -10%",
                toggleActions: "play none reverse none",

            }
        })

    });

    const toggleDrawer = () => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }


        setIsOpen(!isOpen);

        if (!isOpen) {
            document.getElementById('main').style.transition = "opacity 0.5s";
            document.getElementById('main').style.opacity = 0;
            document.getElementById('menu-drawer').style.opacity = 1;
            document.getElementById('menu-drawer').style.transition = "opacity 1s";
        }

        if (isOpen) {
            document.getElementById('main').style.transition = "opacity 0.5s";
            document.getElementById('main').style.opacity = 1;
            document.getElementById('menu-drawer').style.opacity = 0;
            document.getElementById('menu-drawer').style.transition = "opacity 1s";
        }
    };


    return (
        <React.Fragment>
            <nav className='top-nav' >
                <div className="top-left" ref={leftNavRef}>
                    <div className='logo'>
                        <HashLink to='.'>
                            <img src="/assets/az_logo.png" alt="logo" width='75px' height='75px' />
                        </HashLink>
                    </div>
                </div>
                <div className="top-right" ref={rightNavRef}>
                    <div className="icon">
                        <div className="menubar">
                            {
                                isOpen ?
                                    <IconButton onClick={toggleDrawer(false)} color='black'>
                                        <CloseRoundedIcon sx={{ fontSize: 45 }} />
                                    </IconButton>
                                    :
                                    <IconButton onClick={toggleDrawer(true)} color='black' >
                                        <MenuIcon sx={{ fontSize: 45 }} />
                                    </IconButton>
                            }
                        </div>
                    </div>
                </div >
                <SwipeableDrawer
                    className='menu-drawer'
                    id="menu-drawer"
                    anchor='top'
                    open={isOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    transitionDuration={0}
                    variant='persistent'
                    sx={{
                        '&.MuiDrawer-root > .MuiPaper-root': {
                            backgroundColor: 'transparent',
                            mt: '100px',
                            mb: '100px',
                            height: 'auto',
                            width: 'auto',
                        },
                    }}
                >
                    <Box
                        className="menu-drawer-box"
                        id="menu-drawer-box"
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    // className={classes.content}
                    >
                        <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <ListItem divider sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} component={HashLink} to='/#home'>
                                <IconButton color="black">
                                    <HomeRoundedIcon sx={{ fontSize: 45 }} />
                                </IconButton>
                            </ListItem>
                            {['project', 'about', 'skill', 'contact'].map((text, index) => (
                                <ListItem button sx={{ height: 100 }} key={text} alignItems="center" component={HashLink} to={`/#${text}`} >
                                    <Divider light variant="normal" />
                                    <ListItemText disableTypography primary={<Typography variant="h5" sx={{ letterSpacing: 5 }}>{text.toUpperCase()}</Typography>} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} />
                                </ListItem>
                            ))}
                            <ListItem button sx={{ height: 100 }} alignItems="center" component={HashLink} to='/blogs' >
                                <ListItemText disableTypography primary={<Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', letterSpacing: 5 }}>BLOG</Typography>} />
                            </ListItem>
                        </List>
                    </Box>
                </SwipeableDrawer>
            </nav >
            <nav>
                <div className="bottom-nav">
                    <div className="bottom-left" ref={leftNavRef}>
                        <div className='scroll-mouse'>
                            <FontAwesomeIcon icon={faMouse} fontSize={30} />
                        </div>
                    </div>
                    <div className="bottom-right" ref={rightNavRef}>
                        <div className="bottom-right-wrapper">
                            <div className="show-resume">
                                Learn More
                            </div>
                            <div className="resume">
                                <IconButton >
                                    <FingerprintIcon sx={{ fontSize: 40 }} />
                                </IconButton>
                            </div>
                        </div>
                    </div >
                </div>
            </nav>
        </React.Fragment>
    )
}
