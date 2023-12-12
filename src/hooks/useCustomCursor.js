import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';



function useCustomCursor() {
    const cursorRef = useRef(null)
    const projectScrollerRef = useRef(null);

    const [progress, setProgress] = useState(0);
    const [cursorOnProjectSection, setCursorOnProjectSection] = useState(false)

    const handleLeft = () => {
        const el = projectScrollerRef.current;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        projectScrollerRef.current.scrollBy(-600, 0);

        const percentage = el.scrollLeft * 100 / maxScrollLeft

        setProgress(percentage)

    }

    const handleRight = () => {
        const el = projectScrollerRef.current;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;

        projectScrollerRef.current.scrollBy(600, 0);

        const percentage = el.scrollLeft * 100 / maxScrollLeft

        setProgress(percentage)
    }


    //custom cursor general initialization, div follow cursor on move 
    useEffect(() => {

        if (cursorRef.current) {
            let mouseX = 0, mouseY = 0;

            gsap.to({}, 0.016, {
                repeat: -1,

                onRepeat: function () {
                    gsap.set(cursorRef.current, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    })
                }
            })

            window.addEventListener("mousemove", function (e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
            })

            //destory listenter
        }
    }, [])


    useEffect(() => {

        if (projectScrollerRef.current && cursorRef.current) {
            //determine if cursor is on Project Section
            projectScrollerRef.current.addEventListener("mousemove", () => {
                cursorRef.current.classList.add("progress-cursor");
                cursorRef.current.classList.remove("cursor")
                setCursorOnProjectSection(true)
            })

            projectScrollerRef.current.addEventListener("mouseleave", () => {
                cursorRef.current.classList.remove("progress-cursor");
                cursorRef.current.classList.add("cursor")
                setCursorOnProjectSection(false)
            })


        }
    }, [projectScrollerRef, cursorRef])

    //change cursor based on cursor location overlapping with different elements
    useEffect(() => {

        if (cursorRef.current) {
            let buttons = Array.from(document.getElementsByTagName("button"));
            let links = Array.from(document.getElementsByTagName("a"));
            let h1s = Array.from(document.getElementsByTagName("h1"));
            let images = Array.from(document.getElementsByTagName("img"));

            buttons.forEach(button => {
                button.addEventListener("mouseleave", () => {
                    cursorRef.current.classList.remove("grow");
                })
                button.addEventListener("mousemove", () => {
                    cursorRef.current.classList.add("grow");
                })
            })

            links.forEach(link => {
                link.addEventListener("mouseleave", () => {
                    cursorRef.current.classList.remove("grow");
                })
                link.addEventListener("mousemove", () => {
                    cursorRef.current.classList.add("grow");
                })
            })
            h1s.forEach(h1 => {
                h1.addEventListener("mouseleave", () => {
                    cursorRef.current.classList.remove("growtext");
                })
                h1.addEventListener("mousemove", () => {
                    cursorRef.current.classList.add("growtext");
                })
            })
            images.forEach(img => {
                img.addEventListener("mouseleave", () => {
                    cursorRef.current.classList.remove("growimg");
                })
                img.addEventListener("mousemove", () => {
                    cursorRef.current.classList.add("growimg");
                })
            })
        }
    })

    //change cursor on Project section to scroll
    useEffect(() => {
        const el = projectScrollerRef.current;

        if (el) {
            const maxScrollLeft = el.scrollWidth - el.clientWidth;
            const onWheel = e => {
                if (e.deltaY === 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY * 10,
                    behavior: "smooth"
                });
                const percentage = el.scrollLeft * 100 / maxScrollLeft

                setProgress(percentage)

            };

            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    })

    return { handleLeft, handleRight, cursorRef, projectScrollerRef, progress, cursorOnProjectSection };
}

export default useCustomCursor
