import { useEffect, useRef, Fragment } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SvgIcon from '@mui/material/SvgIcon';
// import './Animation';
import "./Hero.scss"
import { useMediaQuery } from "@mui/material";

function MouseIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M11.25 9.99989C11.25 10.4141 11.5858 10.7499 12 10.7499C12.4142 10.7499 12.75 10.4141 12.75 9.99989V6.99989C12.75 6.58567 12.4142 6.24989 12 6.24989C11.5858 6.24989 11.25 6.58567 11.25 6.99989V9.99989Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M18.75 9.07422C18.75 5.75272 16.3336 2.92485 13.0527 2.40682C12.3552 2.29669 11.6448 2.29669 10.9473 2.40682C7.6664 2.92485 5.25 5.75272 5.25 9.07422V14.9256C5.25 18.2471 7.6664 21.0749 10.9473 21.593C11.6448 21.7031 12.3552 21.7031 13.0527 21.593C16.3336 21.0749 18.75 18.247 18.75 14.9256L18.75 9.07422ZM12.8188 3.88846C15.3706 4.29137 17.25 6.49083 17.25 9.07422L17.25 14.9256C17.25 17.5089 15.3706 19.7084 12.8188 20.1113C12.2763 20.197 11.7237 20.197 11.1812 20.1113C8.62942 19.7084 6.75 17.5089 6.75 14.9256L6.75 9.07422C6.75 6.49083 8.62943 4.29137 11.1812 3.88846C11.7237 3.8028 12.2763 3.8028 12.8188 3.88846Z" fill="black" />
        </SvgIcon>
    )
}

export default function Hero() {
    const isMobile = useMediaQuery("(max-width: 768px)")
    const scrolldownRef = useRef(null);
    const introRef = useRef(null);
    const hiRef = useRef(null);
    const happyRef = useRef(null);

    const heroTitleRef = useRef(null);
    const heroTechIconRef = useRef(null);
    const heroIconContainerRef = useRef(null);

    const heroTech = ["assets/skill_icons/js_official.svg", "assets/skill_icons/reactjs.svg", "assets/skill_icons/css.svg", "assets/skill_icons/html.svg", "assets/skill_icons/scss.svg", "assets/skill_icons/git.svg", "assets/skill_icons/graphql.svg", "assets/skill_icons/typescript.svg", "assets/skill_icons/postgresql.svg", "assets/skill_icons/docker.svg", "assets/skill_icons/nextjs.svg"]

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    //entry animation
    useEffect(() => {
        let entryPlayed = localStorage.getItem("hasMyAnimationPlayed")
        let introPlayed = localStorage.getItem("introPlayed");

        //entry timeline
        const entryTimeline = gsap.timeline({
            onComplete: () => {
                introTimeline.play();
                localStorage.setItem("hasMyAnimationPlayed", true);
            }
        })

        entryTimeline
            .set(document.body, { overflow: "hidden" })
            .set("#cursor", { display: "none" })
            .set(".hero-title-line > *", { opacity: 0, })

            .set(hiRef.current, { opacity: 0 })
            .set(happyRef.current, { opacity: 0 })

            .to(hiRef.current, { opacity: 1, duration: 1 })

            .to(hiRef.current, { opacity: 0, duration: 0.5 })
            .set(hiRef.current, { opacity: 0 })

            .to(happyRef.current, { opacity: 1, duration: 1 })
            .to(happyRef.current, { opacity: 0, duration: 0.5 })
            .set(document.body, { overflow: "auto" })
            .set("#cursor", { display: "block" })

        //home timeline
        const introTimeline = gsap.timeline({
            onComplete: () => {
                localStorage.setItem("introPlayed", true)
            }
        })
            .fromTo('.hero-tech-icon-container > .hero-tech-icon', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, x: "20%", duration: 1 }, "<")

            .fromTo(".hero-title-line > *", { x: "10%" }, { x: "0%", opacity: 1, duration: 0.5 })

            .fromTo('#top-nav', {
                opacity: 0
            }, { opacity: 1, duration: 0.5 }, "<")

            //scroll down animation
            .fromTo(scrolldownRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, "<")

        if (entryPlayed) {
            entryTimeline.kill();
            introTimeline.play();
        } else {
            const firstTimeTimeline = gsap.timeline();
            entryTimeline.add(introTimeline);
            firstTimeTimeline.play();
        }

        if (!introPlayed) {
            // introTimeline.kill()
        }

        return () => {
            entryTimeline.kill();
            // introTimeline.kill();
        }
    }, [])

    //role animation
    useEffect(() => {
        // init(textRef.current, {
        //     showCursor: true,
        //     backDelay: 500,
        //     backSpeed: 50,
        //     strings: ['Developer', 'Engineer']
        // });
    }, [])

    //scroll down animation
    useEffect(() => {
        gsap.to(scrolldownRef.current, {
            y: '20%',
            repeat: -1,
            yoyo: true,
            duration: 1,
        })
    }, [])

    useEffect(() => {
        gsap.fromTo(heroIconContainerRef.current, { y: "0%" }, {
            y: "-50%",
            scrollTrigger: {
                trigger: heroIconContainerRef.current,
                start: "top top",
                scrub: 1,
            }
        })
    })
    const getRandomSize = (isMobile) => {
        if (isMobile) {
            return Math.random() * (80 - 60) + 60;
        } else {
            return Math.random() * (120 - 80) + 80;
        }
    }

    useEffect(() => {
        const TRIES_PER_BOX = 30;
        const ICON_SPACING = 5;
        const randUint = range => Math.random() * range | 0;
        const icons = [...document.querySelectorAll(".hero-tech-icon")]
        const headerTitle = document.getElementById("hero-text-wrapper");

        const iconBounds = icons.map(el => Bounds(el, ICON_SPACING));
        const titleBounds = Bounds(headerTitle, ICON_SPACING)
        const fitted = [];
        const areaToFit = Bounds();
        let maxTries = TRIES_PER_BOX * icons.length;

        while (iconBounds.length && maxTries > 0) {
            let i = 0;
            while (i < iconBounds.length) {
                const iconBox = iconBounds[i];

                iconBox.moveTo(
                    randUint(areaToFit.w - iconBox.w),
                    randUint(areaToFit.h - iconBox.h),
                );

                const overlapsWithTitles = titleBounds.overlaps(iconBox);
                if (!overlapsWithTitles && fitted.every(placed => !placed.overlaps(iconBox))) {
                    fitted.push(iconBounds.splice(i--, 1)[0].placeElement())
                } else { maxTries-- }
                i++;
            }
        }

        function Bounds(el, pad = 0) {
            const box = el?.getBoundingClientRect() ?? {
                left: 0, top: 0,
                right: heroIconContainerRef.current.clientWidth, bottom: heroIconContainerRef.current.clientHeight,
                width: heroIconContainerRef.current.clientWidth, height: heroIconContainerRef.current.clientHeight
            };
            return {
                l: box.left - pad,
                t: box.top - pad,
                r: box.right + pad,
                b: box.bottom + pad,
                w: box.width + pad * 2,
                h: box.height + pad * 2,
                overlaps(bounds) {
                    return !(
                        this.l > bounds.r ||
                        this.r < bounds.l ||
                        this.t > bounds.b ||
                        this.b < bounds.t
                    );
                },
                moveTo(x, y) {
                    this.r = (this.l = x) + this.w;
                    this.b = (this.t = y) + this.h;
                    return this;
                },
                placeElement() {
                    if (el) {
                        el.style.top = (this.t + pad) + "px";
                        el.style.left = (this.l + pad) + "px";
                        el.classList.add("placed");
                    }
                    return this;
                }
            };
        }
    }, [])

    return (
        <Fragment>
            <Box className="opening-animation">
                <Box className="hi" ref={hiRef}>Hi</Box>
                <Box className="happy" ref={happyRef}>I'm happy you're here</Box>
            </Box>
            <Box className='hero' id='hero' ref={introRef}>
                <Box className="hero-text-wrapper" id="hero-text-wrapper" ref={heroTitleRef}>
                    <Box className="hero-title-line">
                        <Typography variant="h2" style={{ display: "inline-flex" }}>
                            I'm&nbsp;
                        </Typography>
                        <Typography variant="h2" fontWeight="bold" style={{ display: "inline-flex" }}>
                            Anthony,
                        </Typography>
                    </Box>
                    <Box className="hero-title-line">
                        <Typography variant="h2" style={{ display: "inline-flex" }}>
                            a passionate
                        </Typography>
                    </Box>
                    <Box className="hero-title-line">
                        <Typography variant="h2" fontWeight="bold" style={{ display: "inline-flex" }}>
                            Frontend Developer
                        </Typography>
                    </Box>
                    <Box className="hero-title-line">
                        <Typography variant="h2" style={{ display: "inline-flex" }}>
                            based in New York City.
                        </Typography>
                    </Box>
                </Box>
                <Box className="hero-tech-icon-container" ref={heroIconContainerRef}>
                    {heroTech?.map((path, index) => (
                        <Box
                            key={index}
                            className="hero-tech-icon"
                            id="hero-tech-icon"
                            ref={heroTechIconRef}
                            component='img'
                            src={path} height={`${getRandomSize(isMobile)}px`} alt="">
                        </Box>
                    ))}
                </Box>
                <Box className='scroll-mouse' ref={scrolldownRef}>
                    <Box className='scroll-mouse-text'>
                        Scroll Down
                    </Box>
                    <Box className='scroll-mouse-icon'>
                        {/* <FontAwesomeIcon icon={faMouse} fontSize={30} /> */}
                        <MouseIcon sx={{ fontSize: 40 }} />
                        <ArrowRightAltIcon sx={{ fontSize: 30, transform: 'rotate(90deg)' }} />
                    </Box>
                </Box>
            </Box>
            {/* <Box className="resume-wrapper">
                    <Box className="resume-text">
                        CV Download
                    </Box>
                    <Box className="resume">
                        <IconButton >
                            <FingerprintIcon sx={{ fontSize: 40, color: 'black' }} />
                        </IconButton>
                    </Box>
                </Box> */}
        </Fragment>

    )
}