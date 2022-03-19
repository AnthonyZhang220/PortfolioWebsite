import React, { useRef, useEffect, useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import Menu from "../Menu/Menu";
import { gsap } from "gsap/all";
import { HashLink } from "react-router-hash-link";
import { ScrollToPlugin } from 'gsap/all'
import { ScrollTrigger } from "gsap/all";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
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

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';

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
    })
})

export default function NavBar({ darkTheme }) {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const classes = useStyles();
    const navRef = useRef(null);
    const midRef = useRef(null);
    // const [toggle, setToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [like, setLike] = useState(0);
    const [fav, setFav] = useState(0);

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

    const likeCount = () => {
        setLike(like + 1);
    }

    const favCount = () => {
        setFav(fav + 1);
    }


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
                    <div className="menubar">
                        {
                            <React.Fragment >
                                <IconButton onClick={toggleDrawer(true)} >
                                    <MenuRoundedIcon sx={{ fontSize: 30 }} />
                                </IconButton>
                                <SwipeableDrawer
                                    className={classes.drawer}
                                    anchor='top'
                                    open={isOpen}
                                    onClose={toggleDrawer(false)}
                                    onOpen={toggleDrawer(true)}
                                    transitionDuration={500}
                                    elevation={10}
                                >
                                    <Box
                                        sx={{ width: 'auto' }}
                                        role="presentation"
                                        onClick={toggleDrawer(false)}
                                        onKeyDown={toggleDrawer(false)}
                                        className={classes.content}
                                    >
                                        <Box
                                            sx={{ height: 100, fontSize: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                        >
                                            <IconButton onClick={toggleDrawer(false)}>
                                                <CloseRoundedIcon sx={{ fontSize: 30 }} />
                                            </IconButton>
                                        </Box>
                                        <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                                            <ListItem divider sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} component={HashLink} to='/#home'>
                                                <IconButton>
                                                    <HomeRoundedIcon sx={{ fontSize: 30 }} />
                                                </IconButton>
                                            </ListItem>
                                            {['about', 'project', 'contact'].map((text, index) => (
                                                <ListItem button sx={{ height: 100 }} key={text} alignItems="center" component={HashLink} to={`/#${text}`} >
                                                    <Divider light variant="normal" />
                                                    <ListItemText disableTypography primary={<Typography variant="h5" sx={{ letterSpacing: 5 }}>{text.toUpperCase()}</Typography>} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} />
                                                </ListItem>
                                            ))}
                                            <ListItem button sx={{ height: 100 }} className={classes.list} alignItems="center" component={HashLink} to='/blogs' >
                                                <ListItemText disableTypography primary={<Typography variant="h5" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', letterSpacing: 5 }}>BLOG</Typography>} />
                                            </ListItem>
                                        </List>
                                    </Box>
                                </SwipeableDrawer>
                            </React.Fragment>
                        }
                    </div>
                    <div className="features">
                        <Box>
                            <Box>
                                <IconButton x={{ fontSize: 30 }}>
                                    <DarkMode/>
                                </IconButton>
                            </Box>
                            {/* <Box>
                                <Badge badgeContent={like} color="primary">
                                    <ThumbUpRoundedIcon onClick={likeCount} color="inherit" />
                                </Badge>
                            </Box>
                            <Box>
                                <Badge badgeContent={fav} color="primary">
                                    <FavoriteRoundedIcon onClick={favCount} color="inherit" />
                                </Badge>
                            </Box> */}
                        </Box>
                    </div>
                </div>
            </div >
        </nav >
    )
}
