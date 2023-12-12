import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/all';
import { Typography } from "@mui/material";
import BlogCard from "./BlogCard";
import useFetchAllBlogs from "../../hooks/useFetchAllBlogs";
import "./Blog.scss";

export default function Blog() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    const blogTitleRef = useRef();
    const { blogList, error, loading } = useFetchAllBlogs();

    useEffect(() => {
        const entryAnimation = gsap.fromTo(blogTitleRef.current, { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1,
            scrollTrigger: {
                trigger: blogTitleRef.current,
                start: 'mid bottom',
                // scrub: true,
            }
        });

        gsap.fromTo(blogTitleRef.current, { x: "-10%" }, {
            x: "10%",
            scrollTrigger: {
                trigger: blogTitleRef.current,
                start: 'top 85%',
                scrub: 1,
            }
        });

        return () => {
            entryAnimation.scrollTrigger.kill();
        }
    }, [])

    return (
        <div className="blog" id="blog">
            <div className='blog-title' ref={blogTitleRef} >
                <Typography variant="h3" fontWeight="500" >
                    Blogs.&nbsp;
                </Typography>
                <Typography variant="h3" color="#6e6e73" fontWeight="500" >
                    These articles might make you ponder, for a while.
                </Typography>
            </div>
            <div className="blog-container">
                <div className="blog-list">
                    {
                        error ? <Typography>{error}</Typography> :
                            blogList?.map((item) => (
                                <BlogCard {...item} key={item.id} />
                            ))
                    }
                </div>
            </div>
        </div>
    )
}
