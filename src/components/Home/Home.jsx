import { useEffect, useRef } from "react";
import { init } from 'ityped';
import { gsap } from "gsap/all";
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import { ScrollToPlugin } from 'gsap/all';
import * as THREE from 'three';

// import './Animation';


import "./Home.scss"



export default function Home() {

    const textRef = useRef(null);
    const midRef = useRef(null);
    const socialRef = useRef(null);
    const touchRef = useRef(null);
    const arrowdownRef = useRef(null);
    const introRef = useRef(null);
    const hiRef = useRef(null);
    const happyRef = useRef(null);
    const sphereRef = useRef(null);

    const learnmoreRef = useRef(null);
    gsap.registerPlugin(ScrollToPlugin);



    //entry animation
    useEffect(() => {
        let entryPlayed = sessionStorage.getItem("hasMyAnimationPlayed")
        let introPlayed = sessionStorage.getItem("introPlayed");

        //entry timeline
        const entryTimeline = gsap.timeline({
            onComplete: () => {
                console.log(sessionStorage)
                sessionStorage.setItem("hasMyAnimationPlayed", true)

            }
        })

            //show Hi
            .set(hiRef.current, { opacity: 0 })
            .set(happyRef.current, { opacity: 0 })

            .to(hiRef.current,
                { opacity: 1, duration: 1 }
            )

            .to(hiRef.current,
                { opacity: 0, duration: 1 }
            )

            .to(happyRef.current, { opacity: 1, duration: 1 })
            .to(happyRef.current, { opacity: 0, duration: 1 })

            .set(hiRef.current, { opacity: 0 })
            .set(happyRef.current, { opacity: 0 })



        //home timeline
        const introTimeline = gsap.timeline({
            onComplete: () => {
                sessionStorage.setItem("introPlayed", true)
            }
        })
            //mid flexbox
            .fromTo(midRef.current, {
                y: '25%', opacity: 0
            }, { y: "0%", opacity: 1, duration: 1.5 })

            //social icon
            .fromTo([socialRef.current, touchRef.current], {
                y: '5%', opacity: 0
            }, { y: '0%', opacity: 1, duration: 1 })

            // show canvas in s
            .fromTo("#canvas", { opacity: 0 },
                {
                    opacity: 0.3, duration: 1
                })


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
    })

    //role animation
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ['Developer...', 'Engineer...']
        });
    }, [])

    //particles sphere animation
    useEffect(() => {
        const scene = new THREE.Scene();
        document.addEventListener("mousemove", onMouseMove, false);
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        let mouseX;
        let mouseY;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0xffffff, 0);
        renderer.setSize(window.innerWidth, window.innerHeight);

        sphereRef.current.appendChild(renderer.domElement);
        // document.body.appendChild(renderer.domElement);

        window.addEventListener("resize", function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        const distance = Math.min(200, window.innerWidth / 4);
        let vertices = [];
        let theta, phi;
        let x, y, z;

        // const vertex = new THREE.Vector3();

        for (let i = 0; i < 1600; i++) {
            theta = Math.acos(THREE.Math.randFloatSpread(2));
            phi = THREE.Math.randFloatSpread(360);

            // const theta = THREE.Math.randFloatSpread(360);
            x = distance * Math.sin(theta) * Math.cos(phi);
            y = distance * Math.sin(theta) * Math.sin(phi);
            z = distance * Math.cos(theta);

            vertices.push(x, y, z);
        }

        console.log(vertices)

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

        //setting material color and size
        const material = new THREE.PointsMaterial({ color: 0xC0C0C0, size: 3 });
        // var mesh = new THREE.Mesh(geometry, material);



        const particles = new THREE.Points(geometry, material);

        console.log(particles)
        // particles.boundingSphere = 50;

        //adding particles to group for sphere
        const renderingParent = new THREE.Group();
        renderingParent.add(particles);

        const resizeContainer = new THREE.Group();
        resizeContainer.add(renderingParent);
        scene.add(resizeContainer);



        camera.position.z = 500;
        scene.add(camera);



        const animate = function () {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        var myTween;

        function onMouseMove(event) {
            if (myTween) myTween.kill();

            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            myTween = gsap.to(particles.rotation, {
                duration: 0.1,
                x: mouseY * -1,
                y: mouseX,
            });
            //particles.rotation.x = mouseY*-1;
            //particles.rotation.y = mouseX;
        }

        animate();

        // Scaling animation
        const animProps = { scale: 1, xRot: 0, yRot: 0 };

        gsap.to(animProps, {
            duration: 10,
            scale: 1.3,
            repeat: -1,
            yoyo: true,
            ease: "sine",
            onUpdate: function () {
                renderingParent.scale.set(
                    animProps.scale,
                    animProps.scale,
                    animProps.scale
                );
            },
        });

        gsap.to(animProps, {
            duration: 120,
            xRot: Math.PI * 2,
            yRot: Math.PI * 4,
            repeat: -1,
            yoyo: true,
            ease: "none",
            onUpdate: function () {
                renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
            },
        });
    })




    return (
        <div className='home' id='home' ref={introRef}>
            <div className="hi" ref={hiRef}>Hi</div>
            <div className="happy" ref={happyRef}>I'm happy you're here</div>
            <div className="top" ref={touchRef}>
            </div>
            <div className="mid" ref={midRef}>
                <div className="wrapper">
                    <div className="top-spacing"></div>
                    <div className="sphere" id='sphere' ref={sphereRef}></div>
                    <div className="greetings">
                        {/* <h2>Hi, I'm</h2> */}
                        <h2>Hi! I'm Anthony...</h2>
                        <h3>a motivated Frontend <span ref={textRef}></span></h3>
                        <h4>
                            based in New York City
                        </h4>
                    </div>
                    <div className="iconContainer">
                        <div className="linkedin">
                            <a href="https://www.linkedin.com/in/anthony-xiangyu-zhang/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                        <div className="github">
                            <a href="https://github.com/AnthonyZhang220" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </div>
                        <div className="stackoverflow">
                            <a href="https://stackoverflow.com/users/6162027/anthony220" target="_blank" rel="noreferrer"> <i className="fab fa-stack-overflow"></i></a>
                        </div>
                        <div className="hackerrank">
                            <a href="https://www.hackerrank.com/anthonyzhang1997" target="_blank" rel="noreferrer"> <i className="fab fa-hackerrank"></i></a>
                        </div>
                        <div className="medium">
                            <a href="https://medium.com/@anthonyzhang220" target="_blank" rel="noreferrer"> <i className="fab fa-medium"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom" ref={socialRef}>
                <div className="bottom-spacing">
                    {/* <div className="learnmore" ref={learnmoreRef}>
                            Learn more
                        </div> */}
                    {/* <a href="#about">
                        <div className="arrowdown" ref={arrowdownRef}>
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </a> */}
                    <div className="container" ref={arrowdownRef}>
                        <div className="touch">
                            <IconButton component='a' href="./#about">
                                <FingerprintIcon sx={{ fontSize: 35, textAlign: 'center' }} />
                            </IconButton>
                        </div>
                        <div className="touch-text">
                            Learn More
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}