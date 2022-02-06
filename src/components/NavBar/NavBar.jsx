import React, { useRef, useEffect, useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import Menu from "../Menu/Menu";
import { gsap } from "gsap/all";
import { HashLink } from "react-router-hash-link";
import { ScrollToPlugin } from 'gsap/all'
import { ScrollTrigger } from "gsap/all";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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


import "./NavBar.scss"
import "../../global.scss"

export default function NavBar() {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const navRef = useRef(null);
    const midRef = useRef(null);
    const [toggle, setToggle] = useState(false);

    const menuList = [
        {
            id: 1,
            item: "HOME",
        },
        {
            id: 2,
            item: "ABOUT",
        },
        {
            id: 3,
            item: "PORTFOLIO",
        },
        {
            id: 4,
            item: "PROJECT",
        },
        {
            id: 5,
            item: "CONTACT",
        },
    ];

    //navbar animation
    useEffect(() => {

        let navbarPlayed = sessionStorage.getItem("navbarPlayed")
        if (!navbarPlayed) {

            let navTl = gsap.timeline({
                onComplete: () => {
                    sessionStorage.setItem("navbarPlayed", true)
                }
            })

                //landing animation from top for navbar
                .fromTo(navRef.current, { y: '-100%', opacity: 0 }, { delay: 4, y: "0%", opacity: 1, duration: 1 })

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

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

    };


    const mobileMenu = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <Divider />
                {menuList.map((id, item) => (
                    <ListItem button key={id}>
                        <ListItemIcon>

                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <nav className='navbar' ref={navRef}>
            <div className="menu">
                <Menu />
            </div>
            <div className="left"></div>
            <div className="right">
                <div className="navlink">
                    <div role="list" className="hashlink"><HashLink to="/#home">HOME</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/#about">ABOUT</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/#project">PROJECT</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/#contact">CONTACT</HashLink></div>
                    <div role="list" className="hashlink"><HashLink to="/blogs">BLOG</HashLink></div>
                </div>
                <div className="icon">
                    <div className="darkmode-button">
                        <DarkMode />
                    </div>
                    <div className="menubar" onClick={() => setToggle(!toggle)}>
                        {/* {toggle ? <CloseIcon /> : <MenuIcon />} */}
                        {
                            <React.Fragment >
                                <MenuIcon onClick={toggleDrawer(true)}></MenuIcon>
                                <SwipeableDrawer
                                    onClose={toggleDrawer(false)}
                                    onOpen={toggleDrawer(true)}
                                >
                                    {mobileMenu}
                                </SwipeableDrawer>
                            </React.Fragment>
                        }
                    </div>
                    <div className="like-button">
                        <Badge badgeContent={4} color="primary">
                            <ThumbUpRoundedIcon color="inherit" />
                        </Badge>
                        <Badge badgeContent={4} color="primary">
                            <FavoriteRoundedIcon color="inherit" />
                        </Badge>
                    </div>
                </div>
            </div>
        </nav>
    )
}
