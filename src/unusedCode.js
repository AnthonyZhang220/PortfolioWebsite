
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