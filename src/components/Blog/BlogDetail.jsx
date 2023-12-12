import { useParams } from "react-router-dom"
import { useRef, useEffect } from "react"
import { CardActions, CardContent, IconButton, Typography } from "@mui/material"
import CardHeader from "@mui/material/CardHeader"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import useFetchBlogById from "../../hooks/useFetchBlogById"
import generateMD from "../../hooks/generateMD"
import useBlogScrollProgress from "../../hooks/useBlogScrollProgress"
import LinearProgress from '@mui/material/LinearProgress';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import MoodRoundedIcon from '@mui/icons-material/MoodRounded';
import Chip from "@mui/material/Chip"
import "./BlogDetail.scss"

function BlogDetail() {

    const bodyHTMLRef = useRef(null)
    const { blogId } = useParams();
    const { blog } = useFetchBlogById(blogId)
    const { progress } = useBlogScrollProgress()

    useEffect(() => {
        console.log(blogId)
        const bodyEle = document.getElementById("blog-body-html")
        const tocEle = document.getElementById("blog-toc")
        // Check if blog is not null before updating innerHTML
        if (blog && blog.body_html) {
            bodyEle.innerHTML = blog.body_html;
            tocEle.innerHTML = generateMD(blog.body_html);
            console.log(1, tocEle.innerHTML)
        }

    }, [blogId, blog])

    return (
        <>
            <div className="blog-detail">
                <LinearProgress className="progress-bar" variant="determinate" value={progress} />
                <div className="blog-detail-container">
                    <div className="blog-detail-main">
                        <div className="blog-cover" >
                            <img src={blog?.cover_image} />
                        </div>
                        <div className="blog-body">
                            <div className="blog-title">
                                <Typography variant="h4">
                                    {blog?.title}
                                </Typography>
                            </div>
                            <div className="blog-body-html" id="blog-body-html" ref={bodyHTMLRef}>
                            </div>
                        </div>
                    </div>
                    <div className="blog-detail-sidebar">
                        <div className="blog-detail-sidebar-container">
                            <div className="blog-author-tile">
                                <CardHeader
                                    avatar={
                                        <Avatar src={blog?.user.profile_image} alt={blog?.username} />
                                    }
                                    title={blog?.user.name}
                                    subheader={`Published on ${blog?.readable_publish_date}`}
                                />
                                <div className="blog-tag-list">
                                    {blog?.tags.map((text, index) => (
                                        <Button className="tag" variant="contained" color="secondary" size="small" key={index}>
                                            #{text}
                                        </Button>
                                    ))}
                                </div>
                                <CardActions>
                                    <Button color="success" variant="text">{blog?.reading_time_minutes} mins read</Button>
                                </CardActions>
                                <CardActions>
                                    <Chip icon={<ChatBubbleOutlineRoundedIcon />} label={`${blog?.comments_count} comments`} variant="outlined" />
                                    <Chip icon={<MoodRoundedIcon />} label={`${blog?.public_reactions_count} reactions`} variant="outlined" />
                                </CardActions>
                            </div>
                            <div className="blog-toc-tile" id="blog-toc">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default BlogDetail