import React, { useEffect, useRef, useState } from "react";
import { projectdata } from "./ProjectData.js"
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { makeStyles } from "@material-ui/styles";
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
} from "react-share";
import {
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LineIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";



import Icon from '@material-ui/core/Icon';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Divider from "@material-ui/core/Divider";
import Box from '@mui/material/Box';
import ForwardRoundedIcon from '@mui/icons-material/ForwardRounded';
import Chip from '@mui/material/Chip';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Badge from '@mui/material/Badge';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Modal from '@mui/material/Modal';

import { styled } from '@mui/material/styles';
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
});

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '0px solid #000',
    boxShadow: 24,
    p: 4,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 10,
        border: `1px solid ${theme.palette.background.paper}`,
        padding: '0 2px',
        fontSize: 10,
    },
}));





export default function Project() {

    const classes = useStyles();

    gsap.registerPlugin(ScrollTrigger);


    const projectRef = useRef();
    const listRef = useRef();
    const [like, setLike] = useState(false);
    const [fav, setFav] = useState({
        id: '',
        isFav: false,
    });
    const [sharePage, setSharePage] = useState(false);
    const [shareId, setShareId] = useState(null);

    const handleLike = () => {
        setLike(true);
    }

    const handleFav = (id) => {
        console.log(fav)

        if (!fav.isFav && fav.id.includes(id)) {
            const updateFav = { id: id, isFav: true }
            setFav(...fav, ...updateFav);
        } else if (!fav.isFav) {
            setFav([...fav, { id, isFav: false }]);
        }
        setFav(!fav.isFav);
    }

    const handleShareOpen = (id) => {
        setShareId(id);
        setSharePage(true);
    }

    const handleShareClose = () => {
        setSharePage(false);
    }



    useEffect(() => {
        gsap.fromTo(listRef.current, {
            x: "10%", opacity: 0
        }, {
            x: "0%", opacity: 1, duration: 2,
            scrollTrigger: {
                trigger: projectRef.current,
                start: "top bottom"
            },
        });
    });

    // useEffect(() => {
    //     gsap.to(listRef.current, {
    //         x: () => -(listRef.current - document.documentElement.clientWidth) + 'px',
    //         ease: 'none',
    //         scrollTrigger: {
    //             trigger: 'contact',
    //             invalidateOnRefresh: true,
    //             scrub: 1,
    //             // end: () => "+=" + listRef.current.offsetWidth
    //         }
    //     })
    // });


    return (
        <div className='project' id='project' ref={projectRef}>
            <div className='project-title'>
                <h2>Project.&nbsp;</h2>
                <span className='subtitle'>
                    Take a took at what I have created, in the past.
                </span>
            </div>
            <div className="project-wrapper" >
                {projectdata?.map(({ id, title, subtitle, thumbnail, description, tech, WebsiteUrl, GitHubUrl, library, index }) => (
                    <>
                        <div key={id} className='card'>
                            <Card
                                key={id}
                                ref={listRef}
                                sx={{
                                    position: 'relative',
                                    width: 320,
                                    height: 'auto',
                                    margin: '10px',
                                    transition: "all 0.3s cubic-bezier(0,0,.5,1)",
                                    borderRadius: '16px',
                                    boxShadow: "0px 2px 12px rgb(0 0 0 / 8%)",
                                    "&:hover": {
                                        boxShadow: "0px 4px 24px rgb(0 0 0 / 0.2)",
                                    },
                                    flex: '0 0 10%',
                                }}>
                                <CardMedia
                                    component="img"
                                    alt={title}
                                    height="180"
                                    image={thumbnail}
                                />
                                <CardContent>
                                    <Box sx={{ mx: 1 }}>
                                        <Typography gutterBottom variant="body1" component="div">
                                            {title}
                                        </Typography>
                                        <Typography gutterBottom variant="body2" component="div">
                                            {subtitle}
                                        </Typography>
                                        {/* <Typography variant="body2" color="text.secondary">
                                        {description}
                                    </Typography> */}
                                    </Box>
                                    <Divider variant='middle' />
                                    <Box sx={{ m: 1 }}>
                                        <Typography gutterBottom variant="body3">
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
                                    <Divider variant="middle" />
                                    <Box sx={{ m: 1 }}>
                                        <Typography gutterBottom variant="body3">
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
                                <CardActions disableSpacing >
                                    <Button sx={{ m: 1 }} color="secondary" variant='contained' size="small" href={GitHubUrl} target='_blank'>GitHub</Button>
                                    <Button sx={{ m: 1 }} color="secondary" variant='contained' size="small" href={WebsiteUrl} target='_blank' endIcon={<ForwardRoundedIcon />}>Website</Button>
                                    <IconButton sx={{ m: 1 }} onClick={() => handleShareOpen(id)} >
                                        <ShareIcon></ShareIcon>
                                    </IconButton>
                                    {
                                        fav.isFav ?
                                            <IconButton sx={{ color: '#fe0000' }} onClick={() => handleFav(id)}>
                                                <FavoriteRoundedIcon></FavoriteRoundedIcon>
                                            </IconButton>
                                            :
                                            <IconButton onClick={() => handleFav(id)}>
                                                <FavoriteRoundedIcon></FavoriteRoundedIcon>
                                            </IconButton>
                                    }
                                </CardActions>
                            </Card>
                        </div>
                        {
                            shareId === id ?
                                <Modal
                                    key={shareId}
                                    open={sharePage}
                                    onClose={handleShareClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Share
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: 2 }}>
                                            <EmailShareButton url={WebsiteUrl}>
                                                <EmailIcon round size={50} />
                                            </EmailShareButton>
                                            <FacebookShareButton url={WebsiteUrl} quote={title}>
                                                <FacebookIcon round size={50} />
                                            </FacebookShareButton>

                                            <FacebookMessengerIcon round size={50} />
                                            <LineShareButton url={WebsiteUrl}>
                                                <LineIcon round size={50} />
                                            </LineShareButton>

                                            <LinkedinShareButton url={WebsiteUrl} title={title} summary={description}>
                                                <LinkedinIcon round size={50} />
                                            </LinkedinShareButton>


                                            <PinterestShareButton url={WebsiteUrl} media={thumbnail}>
                                                <PinterestIcon round size={50} />
                                            </PinterestShareButton>

                                            <WeiboIcon round size={50} />

                                            <RedditShareButton url={WebsiteUrl} title={title}>
                                                <RedditIcon round size={50} />
                                            </RedditShareButton>

                                            <TelegramShareButton url={WebsiteUrl} title={title}>
                                                <TelegramIcon round size={50} />
                                            </TelegramShareButton>

                                            <TwitterShareButton url={WebsiteUrl} title={title}>
                                                <TwitterIcon round size={50} />
                                            </TwitterShareButton>

                                            <WhatsappShareButton url={WebsiteUrl} title={title}>
                                                <WhatsappIcon round size={50} />
                                            </WhatsappShareButton>

                                            <WorkplaceShareButton url={WebsiteUrl} quote={description}>
                                                <WorkplaceIcon round size={50} />
                                            </WorkplaceShareButton>
                                        </Box>
                                        <Button onClick={handleShareClose}>Close</Button>
                                    </Box>
                                </Modal> : null
                        }
                    </>
                ))}
                <div className="left-button">
                    <ArrowCircleLeftRoundedIcon />
                </div>
                <div className="right-button">
                    <ArrowCircleRightRoundedIcon />
                </div>
            </div>
        </div >
    )
};