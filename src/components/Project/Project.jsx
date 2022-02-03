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
import Divider from "@material-ui/core/Divider";
import Box from '@mui/material/Box';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
import Chip from '@mui/material/Chip';


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
        width: 450,
        height: 650,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "2px 8px 24px rgb(0 0 0 / 8%)",
        "&:hover": {
            boxShadow: "2px 16px 48px rgba(0,0,0,0.3)"
        }

    }
});

export default function Project() {

    const classes = useStyles();

    gsap.registerPlugin(ScrollTrigger);
    const listRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(listRef.current, {
            y: "15%", opacity: 0
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
                <h2>Project.</h2>
                <span className='subtitle'>
                    Take a took at what I have created, in the past.
                </span>
            </div>
            <div className="project-subtitle">
                <h2></h2>
            </div>
            <div className="project-wrapper" ref={listRef}>
                {projectdata?.map(({ id, title, subtitle, thumbnail, description, tech, WebsiteUrl, GitHubUrl, library, index }) => (
                    <div key={id}>
                        <Card className={classes.card} sx={{ ml: 5 }}>
                            <CardMedia
                                component="img"
                                alt={title}
                                height="250"
                                image={thumbnail}
                            />
                            <CardContent>
                                <Box sx={{ mx: 1 }}>
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
                                <Box sx={{ m: 1 }}>
                                    <Typography gutterBottom variant="body2">
                                        Technology used
                                    </Typography>
                                    <Stack direction='row' spacing={2}>
                                        {tech?.map(techUrl => (
                                            <Icon key={index}>
                                                <img className={classes.imageIcon} src={techUrl} alt='' />
                                            </Icon>
                                        ))}
                                    </Stack>
                                </Box>
                                <Divider variant='middle' />
                                <Box sx={{ m: 1 }}>
                                    <Typography gutterBottom variant="body2">
                                        Library used
                                    </Typography>
                                    <Stack direction='row' spacing={1}>
                                        {library?.map(lib => (
                                            <Chip label={lib} key={index} />
                                        ))}
                                    </Stack>
                                </Box>
                                <Divider variant='middle' />
                            </CardContent>
                            <CardActions >
                                <Box sx={{ ml: 1, mb: 1 }}>
                                    <Stack direction='row' spacing={2}>
                                        <Button variant='contained' size="medium" href={GitHubUrl} target='_blank'>GitHub</Button>
                                        <Button variant='contained' size="medium" href={WebsiteUrl} target='_blank' endIcon={<ForwardRoundedIcon />}>Website</Button>
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
                    </div>
                ))}
            </div>
        </div >
    )
};
