import { useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { ScrollToPlugin } from 'gsap/all'
import { ScrollTrigger } from "gsap/all";
import { HashLink } from "react-router-hash-link"

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';



import "./NavBar.scss"
import "../../global.scss"
import useMediaQuery from "@mui/material/useMediaQuery";


export default function NavBar({ mode }) {


    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = useMediaQuery("(max-width: 600px)");
    const CLIENT_SCREEN_HEIGHT = useMediaQuery(("(max-height: 700px)"));
    const leftNavRef = useRef(null);
    const rightNavRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event).key === 'Tab' ||
                (event).key === 'Shift')
        ) {
            return;
        }

        setIsOpen(open);
    };
    const linkList = [
        {
            name: "Project",
            link: "/#project",
            hashlink: true,
        },
        {
            name: "Blog",
            link: "/blog",
            hashlink: false,
        },
        {
            name: "About",
            link: "/about",
            hashlink: false,
        },
        {
            name: "Contact",
            link: "/#contact",
            hashlink: true,
        },
    ]
    return (
        <>
            <Box className='top-nav' id='top-nav' sx={{ bgcolor: "background.default" }}>
                <Box className="top-nav-container">
                    <Box className="top-left" ref={leftNavRef}>
                        <Box className='logo'>
                            <Link to='/'>
                                {
                                    mode === "light" ?
                                        <img src="/assets/az_logo.png" alt="logo" width='64px' height='64px' />
                                        :
                                        <img src="/assets/az_logo_white.png" alt="logo" width='64px' height='64px' />
                                }
                            </Link>
                        </Box>
                    </Box>
                    {isMobile ?
                        <Box className="top-right" ref={rightNavRef}>
                            <Box className="icon">
                                <Box className="menubar">
                                    {
                                        isOpen ?
                                            <IconButton onClick={toggleDrawer(false)} color='black' aria-label="menu-button close">
                                                <CloseRoundedIcon />
                                            </IconButton>
                                            :
                                            <IconButton onClick={toggleDrawer(true)} color='black' aria-label="menu-button open">
                                                <MenuIcon />
                                            </IconButton>
                                    }
                                </Box>
                            </Box>
                        </Box>
                        :
                        <Box className="top-nav-links">
                            {
                                linkList?.map((item, index) => (
                                    <Box className="nav-link" key={index}>
                                        {item.hashlink ?
                                            <HashLink to={item.link}>
                                                <Typography variant="h5">
                                                    {item.name}
                                                </Typography>
                                            </HashLink> :
                                            <Link to={item.link} >
                                                <Typography variant="h5">
                                                    {item.name}
                                                </Typography>
                                            </Link>
                                        }
                                    </Box>
                                ))
                            }
                        </Box>
                    }
                </Box>
            </Box>
            <SwipeableMenu isMobile={isMobile} CLIENT_SCREEN_HEIGHT={CLIENT_SCREEN_HEIGHT} toggleDrawer={toggleDrawer} isOpen={isOpen} />
        </>
    )
}

export const SwipeableMenu = ({ isOpen, toggleDrawer, isMobile, CLIENT_SCREEN_HEIGHT }) => {
    const menuTopList = [
        {
            text: "Home",
            icon: "",
            link: "/",
            hashlink: false,
        },
        {
            text: "Project",
            icon: "",
            link: "/#project",
            hashlink: true,
        },
        {
            text: "Blog",
            icon: "",
            link: "/blog",
            hashlink: true,
        },
    ]
    const menuBottomList = [
        {
            text: "About",
            icon: "",
            link: "/about",
            hashlink: false,
        },
        {
            text: "Skill",
            icon: "",
            link: "/about/#skill",
            hashlink: true,
        },
        {
            text: "Contact",
            icon: "",
            link: "/#contact",
            hashlink: true,
        },
    ]

    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                {menuTopList.map((item, index) => (
                    <ListItem key={item.text} disablePadding  >
                        <ListItemButton href={item.link} sx={{ height: isMobile || CLIENT_SCREEN_HEIGHT ? 70 : 100 }} >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                {menuBottomList.map((item, index) => (
                    <ListItem key={item.text} disablePadding >
                        <ListItemButton href={item.link} sx={{ height: isMobile || CLIENT_SCREEN_HEIGHT ? 70 : 100 }} >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <SwipeableDrawer
            anchor="top"
            open={isOpen}
            elevation={1}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
        >
            {list()}
        </SwipeableDrawer>
    )

}
