import { useRef, useEffect, useState, Fragment } from "react";
import { gsap } from "gsap";
import { HashLink } from "react-router-hash-link";
import { ScrollToPlugin } from 'gsap/all'
import { ScrollTrigger } from "gsap/all";

import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';



import "./NavBar.scss"
import "../../global.scss"
import { useMediaQuery } from "@material-ui/core";


export default function NavBar() {

    const isMobile = useMediaQuery("(max-width: 600px)");
    const CLIENT_SCREEN_HEIGHT = useMediaQuery(("(max-height: 700px)"));

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const leftNavRef = useRef(null);
    const rightNavRef = useRef(null);
    // const [toggle, setToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
            //main
            document.getElementById('app').style.transition = "opacity 0.5s";
            document.getElementById('app').style.opacity = 0;
            document.getElementById('menu-drawer').style.display = "flex";
            document.getElementById('menu-drawer').style.opacity = 1;
            document.getElementById('menu-drawer').style.transition = "all 1s";
        }

        if (isOpen) {
            //main
            document.getElementById('app').style.transition = "opacity 0.5s";
            document.getElementById('app').style.opacity = 1;
            document.getElementById('menu-drawer').style.display = 'none';
            document.getElementById('menu-drawer').style.opacity = 0;
            document.getElementById('menu-drawer').style.transition = "all 1s";
        }
    };


    return (
        <nav className='top-nav' id='top-nav'>
            <div className="top-nav-container">
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
                                    <IconButton onClick={toggleDrawer(false)} color='black' aria-label="menu-button close">
                                        <CloseRoundedIcon sx={{ fontSize: 45 }} />
                                    </IconButton>
                                    :
                                    <IconButton onClick={toggleDrawer(true)} color='black' aria-label="menu-button open">
                                        <MenuIcon sx={{ fontSize: 45 }} />
                                    </IconButton>
                            }
                        </div>
                    </div>
                </div>

            </div>
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
                        position: 'relative',
                        backgroundColor: 'transparent',
                        mt: isMobile || CLIENT_SCREEN_HEIGHT ? '70px' : "100px",
                        mb: isMobile || CLIENT_SCREEN_HEIGHT ? '70px' : "100px",
                        height: "auto",
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
                        <ListItem divider sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} component={HashLink} to='/'>
                            <IconButton color="black">
                                <HomeOutlinedIcon sx={{ fontSize: 45 }} />
                            </IconButton>
                        </ListItem>
                        {['project', 'about', 'skill', 'contact'].map((text, index) => (
                            <ListItem button sx={{ height: isMobile || CLIENT_SCREEN_HEIGHT ? 70 : 100 }} key={text} alignItems="center" component={HashLink} to={`/${text}`} >
                                <Divider light variant="normal" />
                                <ListItemText disableTypography primary={<Typography variant="h4" fontWeight="bold" sx={{ letterSpacing: 5 }}>{text.toUpperCase()}</Typography>} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} />
                            </ListItem>
                        ))}
                        <ListItem button sx={{ height: isMobile || CLIENT_SCREEN_HEIGHT ? 70 : 100 }} alignItems="center" component="a" href="/blog" >
                            <ListItemText disableTypography primary={<Typography variant="h4" fontWeight="bold" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', letterSpacing: 5 }}>BLOG</Typography>} />
                        </ListItem>
                    </List>
                </Box>
            </SwipeableDrawer>
        </nav>
    )
}
