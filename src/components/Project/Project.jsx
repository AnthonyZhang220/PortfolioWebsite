import React, { useEffect, useRef } from "react";
import { projectdata } from "./ProjectData.js"
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { makeStyles } from "@material-ui/styles";


import Icon from '@material-ui/core/Icon';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@material-ui/core';
import { Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import SvgIcon from '@mui/material/SvgIcon';
import Divider from "@material-ui/core/Divider";
import Box from '@mui/material/Box';

import "./Project.scss"

const useStyles = makeStyles({
    imageIcon: {
        display: "flex",
        height: "inherit",
        width: "inherit",
    },
    iconRoot: {
        textAlign: "center",
    },
    card: {
        width: 400,
        height: 650,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    }
});

export default function Project() {

    const classes = useStyles();

    gsap.registerPlugin(ScrollTrigger);
    const listRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(listRef.current, {
            y: "25%", opacity: 0
        }, {
            y: "0%", opacity: 1, duration: 2,
            scrollTrigger: {
                trigger: listRef.current,
                start: "top bottom"
            },
        });
    });


    return (
        <div className='project' id='project' >
            <div className='title'>
                <h1>Project</h1>
                <div className="project-wrapper" ref={listRef}>
                    {projectdata?.map(({ id, title, subtitle, thumbnail, description, tech, WebsiteUrl, GitHubUrl }) => (
                        <Card key={id} className={classes.card} sx={{ ml: 5 }}>
                            <CardMedia
                                component="img"
                                alt={title}
                                height="300"
                                image={thumbnail}
                            />
                            <CardContent>
                                <Box sx={{ mx: 2 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {title}
                                    </Typography>
                                    <Typography gutterBottom variant="body1" component="div">
                                        {subtitle}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {description}
                                    </Typography>
                                </Box>
                                <Divider variant='middle' />
                                <Box sx={{ m: 2 }}>
                                    <Typography gutterBottom variant="body2">
                                        Technology & Library used
                                    </Typography>
                                    <Stack direction='row' spacing={2}>
                                        {tech?.map(techUrl => (
                                            <Icon className={{ root: classes.iconRoot }} key={techUrl}>
                                                <img className={classes.imageIcon} src={techUrl} alt='' />
                                            </Icon>
                                        ))}
                                    </Stack>
                                </Box>
                                <Divider />
                            </CardContent>
                            <CardActions >
                                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                                    <Stack direction='row' spacing={2}>
                                        <Button variant='contained' size="medium" href={GitHubUrl} target='_blank'>GitHub</Button>
                                        <Button variant='contained' size="medium" href={WebsiteUrl} target='_blank'>Website</Button>
                                        {/* <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton> */}
                                    </Stack>
                                </Box>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            </div>
        </div >
    )
};
