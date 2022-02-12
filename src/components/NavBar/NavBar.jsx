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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { createStyles, makeStyles } from "@mui/styles";
import "./NavBar.scss"
import "../../global.scss"

const useStyles = makeStyles(() => {
    createStyles({
        drawer: {
            width: 'auto',
            zIndex: 2000,
        },
        content: {
            flexGrow: 1,
            overflow: "auto",
        },
        list: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        hashlink: {
            textDecoration: 'none',
        }
    })
})

export default function NavBar() {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const classes = useStyles();
    const navRef = useRef(null);
    const midRef = useRef(null);
    // const [toggle, setToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
            item: "PROJECT",
        },
        {
            id: 4,
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

    const toggleDrawer = () => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setIsOpen(!isOpen);


    };


    const mobileMenu = () => (
        <Box
            sx={{ width: 'auto', height: 400, zIndex: 2000 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className={classes.content}
        >
            <List>
                {/* <Divider /> */}
                {menuList?.map((item) => (
                    <ListItem button key={item}>
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
                    <div className="menubar">
                        {
                            <React.Fragment >
                                <MenuIcon onClick={toggleDrawer(true)} />
                                <SwipeableDrawer
                                    className={classes.drawer}
                                    anchor='top'
                                    open={isOpen}
                                    onClose={toggleDrawer(false)}
                                    onOpen={toggleDrawer(true)}
                                    transitionDuration={500}
                                    elevation={3}
                                >
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={toggleDrawer(false)}
                                        onKeyDown={toggleDrawer(false)}
                                        className={classes.content}
                                    >

                                        <List>
                                            <Box
                                                sx={{ height: 100 }}>

                                            </Box>
                                            {['home', 'about', 'project', 'contact', 'blog'].map((text, index) => (
                                                <ListItem button key={text} className={classes.list} >
                                                    <HashLink className={classes.hashlink} to={`/#${text}`}>
                                                        <ListItemText className={classes.list} primary={text.toUpperCase()} />
                                                    </HashLink>
                                                </ListItem>
                                            ))}
                                        </List>
                                        {mobileMenu}
                                    </Box>
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
