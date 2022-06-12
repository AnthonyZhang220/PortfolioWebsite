import React, { useEffect, useRef, useState } from "react";
import { init } from 'ityped';
import { gsap } from "gsap";
import { TweenMax, Power2 } from "gsap/all";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SvgIcon from '@mui/material/SvgIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';


// import './Animation';


import "./Hero.scss"


function MouseIcon(props) {

    return (
        <SvgIcon {...props}>
            <path d="M11.25 9.99989C11.25 10.4141 11.5858 10.7499 12 10.7499C12.4142 10.7499 12.75 10.4141 12.75 9.99989V6.99989C12.75 6.58567 12.4142 6.24989 12 6.24989C11.5858 6.24989 11.25 6.58567 11.25 6.99989V9.99989Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M18.75 9.07422C18.75 5.75272 16.3336 2.92485 13.0527 2.40682C12.3552 2.29669 11.6448 2.29669 10.9473 2.40682C7.6664 2.92485 5.25 5.75272 5.25 9.07422V14.9256C5.25 18.2471 7.6664 21.0749 10.9473 21.593C11.6448 21.7031 12.3552 21.7031 13.0527 21.593C16.3336 21.0749 18.75 18.247 18.75 14.9256L18.75 9.07422ZM12.8188 3.88846C15.3706 4.29137 17.25 6.49083 17.25 9.07422L17.25 14.9256C17.25 17.5089 15.3706 19.7084 12.8188 20.1113C12.2763 20.197 11.7237 20.197 11.1812 20.1113C8.62942 19.7084 6.75 17.5089 6.75 14.9256L6.75 9.07422C6.75 6.49083 8.62943 4.29137 11.1812 3.88846C11.7237 3.8028 12.2763 3.8028 12.8188 3.88846Z" fill="black" />
        </SvgIcon>
    )

}



export default function Hero() {

    const isMobile = useMediaQuery("(max-width:600px");

    const midRef = useRef(null);
    const scrolldownRef = useRef(null);
    const introRef = useRef(null);
    const hiRef = useRef(null);
    const happyRef = useRef(null);

    const laptopRef = useRef(null);
    const heroTechIconRef = useRef(null);
    const heroIconContainerRef = useRef(null);
    const canvasRef = useRef(null);

    const heroTech = ["assets/icon/js_official.svg", "assets/icon/reactjs.svg", "assets/icon/css.svg", "assets/icon/html.svg", "assets/icon/scss.svg", "assets/icon/mui.svg", "assets/icon/git.svg", "assets/icon/npm.svg"]


    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);


    //entry animation
    useEffect(() => {
        let entryPlayed = sessionStorage.getItem("hasMyAnimationPlayed")
        let introPlayed = sessionStorage.getItem("introPlayed");

        //entry timeline
        const entryTimeline = gsap.timeline({
            onComplete: () => {
                console.log(sessionStorage)
                sessionStorage.setItem("hasMyAnimationPlayed", true);
                introTimeline.play();

            }
        })

        //show laptop
        entryTimeline.fromTo(laptopRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
            //show Hi
            .set(hiRef.current, { opacity: 0 })
            .set(happyRef.current, { opacity: 0 })

            .to(laptopRef.current, { opacity: 1, duration: 1 })

            .to(hiRef.current, { opacity: 1, duration: 1 })

            .to(hiRef.current, { opacity: 0, duration: 0.5 })
            .set(hiRef.current, { opacity: 0 })

            .to(happyRef.current, { opacity: 1, duration: 1 })
            .to(happyRef.current, { opacity: 0, duration: 0.5 })
            .set(happyRef.current, { opacity: 0 })
            .to(laptopRef.current, 1, { scale: 2, opacity: 0, transformOrigin: '50% 50%' })


        //home timeline
        const introTimeline = gsap.timeline({
            onComplete: () => {
                sessionStorage.setItem("introPlayed", true)
            }
        })
            .set(".hero-title-line > *", { x: "10%", y: "10%" })

            //hero text
            .from(".hero-title-line > *", 1, {
                y: 100,
                ease: "power4.out",
                // delay: 1,
                skewY: 7,
                stagger: {
                    amount: 0.3
                }
            })

            .fromTo(".hero-title-line > *", { x: "10%" }, { x: "0%", duration: 1 })

            .fromTo(".hero-image", { x: "-10%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1 }, "<")


            .fromTo('#top-nav', {
                y: '5%', opacity: 0
            }, { y: '0%', opacity: 1, duration: 0.5 }, "<")

            .fromTo('.hero-tech-icon-container > .hero-tech-icon', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 2 }, "<")
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




    const getRandomSize = () => {

        return Math.random() * (120 - 80) + 80;
    }

    // const getRandomPosition = (prevMin, prevMax) => {
    //     let min = prevMin + 50;
    //     let max = 600;
    //     let prev = Math.random() * (max - min) + min;
    //     prevMin = prev;
    //     return prev
    // }

    // const randNum = (min, max) => Math.random() * (max - min) + min;
    // function getMaxSize(elements) {
    //     var width = 0, height = 0;
    //     for (const el of elements) {
    //         width = Math.max(width, el.offsetWidth);
    //         height = Math.max(height, el.offsetWidth);
    //     }
    //     return { width, height };
    // }
    // function intToBase(n, digits = "abcdefghijklmnopqrstuvwxyz") {
    //     const base = digits.length, result = [];
    //     do {
    //         result.push(digits[(n |= 0) % base]);
    //         n = n / base;
    //     } while (n > 0);
    //     return result.reverse().join("");
    // }

    // useEffect(() => {
    //     getRandomPosition()
    //     getRandomSize()
    // }, [prevMin, prevMax])

    useEffect(() => {

        const TRIES_PER_BOX = 50;
        const randUint = range => Math.random() * range | 0;
        const placing = [...document.querySelectorAll(".hero-tech-icon")].map(el => Bounds(el, 5));
        const fitted = [];
        const areaToFit = Bounds();
        var maxTries = TRIES_PER_BOX * placing.length;
        while (placing.length && maxTries > 0) {
            let i = 0;
            while (i < placing.length) {
                const box = placing[i];
                box.moveTo(randUint(areaToFit.w - box.w), randUint(areaToFit.h - box.h));
                if (fitted.every(placed => !placed.overlaps(box))) {
                    fitted.push(placing.splice(i--, 1)[0].placeElement());
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
            console.log(box)
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



    //particles sphere animation
    // useEffect(() => {
    //     const scene = new THREE.Scene();
    //     document.addEventListener("mousemove", onMouseMove, false);
    //     const camera = new THREE.PerspectiveCamera(
    //         75,
    //         window.innerWidth / window.innerHeight,
    //         0.1,
    //         1000
    //     );

    //     let mouseX;
    //     let mouseY;

    //     const renderer = new THREE.WebGLRenderer({ alpha: true });
    //     renderer.setClearColor(0xffffff, 0);
    //     renderer.setSize(window.innerWidth, window.innerHeight);

    //     sphereRef.current.appendChild(renderer.domElement);
    //     // document.body.appendChild(renderer.domElement);

    //     window.addEventListener("resize", function () {
    //         camera.aspect = window.innerWidth / window.innerHeight;
    //         camera.updateProjectionMatrix();
    //         renderer.setSize(window.innerWidth, window.innerHeight);
    //     });

    //     const dot = new THREE.TextureLoader().load('sphere-dot.png');
    //     const distance = Math.min(200, window.innerWidth / 4);
    //     let vertices = [];
    //     let theta, phi;
    //     let x, y, z;

    //     // const vertex = new THREE.Vector3();

    //     for (let i = 0; i < 1600; i++) {
    //         theta = Math.acos(THREE.Math.randFloatSpread(2));
    //         phi = THREE.Math.randFloatSpread(360);

    //         // const theta = THREE.Math.randFloatSpread(360);
    //         x = distance * Math.sin(theta) * Math.cos(phi);
    //         y = distance * Math.sin(theta) * Math.sin(phi);
    //         z = distance * Math.cos(theta);

    //         vertices.push(x, y, z);
    //     }

    //     console.log(dot)

    //     const geometry = new THREE.BufferGeometry();
    //     geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

    //     //setting material color and size
    //     const material = new THREE.PointsMaterial({ sizeAttenuation: true, size: 3, map: dot });
    //     material.color.setHSL(0, 0, 0.75);
    //     // var mesh = new THREE.Mesh(geometry, material);

    //     const particles = new THREE.Points(geometry, material);

    //     console.log(particles)
    //     // particles.boundingSphere = 50;

    //     //adding particles to group for sphere
    //     const renderingParent = new THREE.Group();
    //     renderingParent.add(particles);

    //     const resizeContainer = new THREE.Group();
    //     resizeContainer.add(renderingParent);
    //     scene.add(resizeContainer);

    //     camera.position.z = 500;
    //     scene.add(camera);



    //     const animate = function () {
    //         requestAnimationFrame(animate);
    //         renderer.render(scene, camera);
    //     };

    //     var myTween;

    //     function onMouseMove(event) {
    //         if (myTween) myTween.kill();

    //         mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    //         mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    //         myTween = gsap.to(particles.rotation, {
    //             duration: 0.1,
    //             x: mouseY * -1,
    //             y: mouseX,
    //         });
    //         //particles.rotation.x = mouseY*-1;
    //         //particles.rotation.y = mouseX;
    //     }

    //     animate();

    //     // Scaling animation
    //     const animProps = { scale: 1, xRot: 0, yRot: 0 };

    //     gsap.to(animProps, {
    //         duration: 10,
    //         scale: 1.3,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "sine",
    //         onUpdate: function () {
    //             renderingParent.scale.set(
    //                 animProps.scale,
    //                 animProps.scale,
    //                 animProps.scale
    //             );
    //         },
    //     });

    //     gsap.to(animProps, {
    //         duration: 120,
    //         xRot: Math.PI * 2,
    //         yRot: Math.PI * 4,
    //         repeat: -1,
    //         yoyo: true,
    //         ease: "none",
    //         onUpdate: function () {
    //             renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
    //         },
    //     });
    // })


    //hero tech icon animation
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     canvas.width = canvas.clientWidth;
    //     canvas.height = canvas.clientHeight;
    //     const ctx = canvas.getContext("2d");

    //     if (window.devicePixelRatio > 1) {
    //         canvas.width = canvas.clientWidth * 2;
    //         canvas.height = canvas.clientHeight * 2;
    //         ctx.scale(2, 2);
    //     }

    //     function getTexture(emoji) {
    //         const tempCanvas = document.createElement("canvas");
    //         const tempCtx = tempCanvas.getContext("2d");
    //         tempCanvas.width = 60;
    //         tempCanvas.height = 60;
    //         tempCtx.textAlign = 'center';
    //         tempCtx.textBaseline = 'middle';
    //         tempCtx.font = '54px serif';
    //         tempCtx.fillText(emoji, 30, 35);
    //         return tempCanvas;
    //     }

    //     const imgArray = [getTexture('🦊'), getTexture('🦓'), getTexture('🐹'), getTexture('🐨')];

    //     let width = canvas.offsetWidth; // Width of the canvas
    //     let height = canvas.offsetHeight; // Height of the canvas
    //     const dots = []; // Every dots in an array

    //     const DOTS_AMOUNT = 6; // Amount of dots on the screen
    //     const DOT_RADIUS = 60; // Radius of the dots
    //     let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
    //     let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
    //     let PERSPECTIVE = width * 0.8;

    //     class Dot {
    //         constructor() {
    //             this.x = (Math.random() - 0.5) * width; // Give a random x position
    //             this.y = (Math.random() - 0.5) * height; // Give a random y position
    //             this.z = Math.random() * width; // Give a random z position
    //             this.radius = 10; // Size of our element in the 3D world

    //             this.texture = imgArray[Math.floor(Math.random() * imgArray.length)];

    //             this.xProjected = 0;
    //             this.yProjected = 0;
    //             this.scaleProjected = 0;

    //             TweenMax.to(this, (Math.random() + 5), {
    //                 z: width,
    //                 repeat: -1,
    //                 yoyo: true,
    //                 yoyoEase:true,
    //                 delay: 0,
    //             });
    //         }
    //         // Do some math to project the 3D position into the 2D canvas
    //         project() {
    //             this.scaleProjected = PERSPECTIVE / (PERSPECTIVE + this.z);
    //             this.xProjected = (this.x * this.scaleProjected) + PROJECTION_CENTER_X;
    //             this.yProjected = (this.y * this.scaleProjected) + PROJECTION_CENTER_Y;
    //         }
    //         // Draw the dot on the canvas
    //         draw() {
    //             this.project();
    //             ctx.globalAlpha = 1;
    //             ctx.drawImage(this.texture, this.xProjected - DOT_RADIUS, this.yProjected - DOT_RADIUS, DOT_RADIUS * 2 * this.scaleProjected, DOT_RADIUS * 2 * this.scaleProjected)
    //         }
    //     }

    //     function createDots() {
    //         // Empty the array of dots
    //         dots.length = 0;

    //         // Create a new dot based on the amount needed
    //         for (let i = 0; i < DOTS_AMOUNT; i++) {
    //             // Create a new dot and push it into the array
    //             dots.push(new Dot());
    //         }
    //     }

    //     /* ====================== */
    //     /* ======== RENDER ====== */
    //     /* ====================== */
    //     function render() {
    //         // Clear the scene
    //         ctx.clearRect(0, 0, width, height);

    //         // Loop through the dots array and draw every dot
    //         for (var i = 0; i < dots.length; i++) {
    //             dots[i].draw();
    //         }

    //         window.requestAnimationFrame(render);
    //     }


    //     // Function called after the user resized its screen
    //     function afterResize() {
    //         width = canvas.offsetWidth;
    //         height = canvas.offsetHeight;
    //         if (window.devicePixelRatio > 1) {
    //             canvas.width = canvas.clientWidth * 2;
    //             canvas.height = canvas.clientHeight * 2;
    //             ctx.scale(2, 2);
    //         } else {
    //             canvas.width = width;
    //             canvas.height = height;
    //         }
    //         PROJECTION_CENTER_X = width / 2;
    //         PROJECTION_CENTER_Y = height / 2;
    //         PERSPECTIVE = width * 0.8;

    //         createDots(); // Reset all dots
    //     }

    //     // Variable used to store a timeout when user resized its screen
    //     let resizeTimeout;
    //     // Function called right after user resized its screen
    //     function onResize() {
    //         // Clear the timeout variable
    //         resizeTimeout = window.clearTimeout(resizeTimeout);
    //         // Store a new timeout to avoid calling afterResize for every resize event
    //         resizeTimeout = window.setTimeout(afterResize, 500);
    //     }
    //     window.addEventListener('resize', onResize);

    //     // Populate the dots array with random dots
    //     createDots();

    //     // Render the scene
    //     window.requestAnimationFrame(render);

    //     // const imgArray = ["assets/icon/js_official.svg", "assets/icon/reactjs.svg", "assets/icon/css.svg", "assets/icon/html.svg"];
    // })



    return (
        <React.Fragment>
            <div className="opening-animation">
                <div className="opening-image" ref={laptopRef}>
                    <img src="/assets/images/macbook_pro.png" alt="macbook_pro.png" />
                </div>
                <div className="hi" ref={hiRef}>Hi</div>
                <div className="happy" ref={happyRef}>I'm happy you're here</div>
            </div>
            <div className='hero' id='hero' ref={introRef}>
                <div className="hero-wrapper-flex">
                    <div className="hero-center" >
                        <div className="hero-text-wrapper">
                            <div className="hero-title" ref={midRef}>
                                <div className="hero-title-line">
                                    <Typography variant="h2" style={{ display: "inline-flex" }}>
                                        I'm&nbsp;
                                    </Typography>
                                    <Typography variant="h1" style={{ display: "inline-flex" }}>
                                        Anthony,
                                    </Typography>
                                </div>
                                <div className="hero-title-line">
                                    <Typography variant="h2" style={{ display: "inline-flex" }}>
                                        a motivated
                                    </Typography>
                                </div>
                                <div className="hero-title-line">
                                    <Typography variant="h1">
                                        Frontend Developer
                                    </Typography>
                                </div>
                                <div className="hero-title-line">
                                    <Typography variant="h2" style={{ display: "inline-flex" }}>
                                        based in New York City
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        {/* <div className="hero-image">
                            {
                                !isMobile ?
                                    < img src="/assets/images/macbook_pro.png" alt="macbook_pro" />
                                    :
                                    null

                            }
                        </div> */}
                        <canvas ref={canvasRef}></canvas>
                        <div className="hero-tech-icon-container" ref={heroIconContainerRef}>
                            {heroTech?.map((path, index) => (
                                <Box
                                    key={index}
                                    className="hero-tech-icon"
                                    id="hero-tech-icon"
                                    ref={heroTechIconRef}
                                    component='img'
                                    backgroundColor='#ffffff'
                                    sx={{
                                        display: 'flex',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        p: 2,
                                        m: 1,
                                        borderRadius: 2,
                                        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
                                    }}
                                    src={path} height={`${getRandomSize()}px`} alt="">
                                </Box>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='scroll-mouse' ref={scrolldownRef}>
                    <div className='scroll-mouse-text'>
                        Scroll Down
                    </div>
                    <div className='scroll-mouse-icon'>
                        {/* <FontAwesomeIcon icon={faMouse} fontSize={30} /> */}
                        <MouseIcon sx={{ fontSize: 40 }} />
                        <ArrowRightAltIcon sx={{ fontSize: 30, transform: 'rotate(90deg)' }} />
                    </div>
                </div>
                {/* <div className="resume-wrapper">
                    <div className="resume-text">
                        CV Download
                    </div>
                    <div className="resume">
                        <IconButton >
                            <FingerprintIcon sx={{ fontSize: 40, color: 'black' }} />
                        </IconButton>
                    </div>
                </div> */}
            </div>
        </React.Fragment >

    )
}