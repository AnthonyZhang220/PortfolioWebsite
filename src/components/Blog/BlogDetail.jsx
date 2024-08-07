import { useParams } from "react-router-dom"
import { useRef, useEffect } from "react"
import { CardActions, Typography, Box } from "@mui/material"
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
import { Card } from "@mui/material"
import BlogCard from "./BlogCard"
import useFetchAllBlogs from "../../hooks/useFetchAllBlogs"
import "./BlogDetail.scss"
import BlogSidebar from "./BlogSidebar"

function BlogDetail() {

    const bodyHTMLRef = useRef(null)
    const { blogId } = useParams();
    const { blog } = useFetchBlogById(blogId)
    const { progress } = useBlogScrollProgress()
    const { blogList, allTags, selectedTags, tagFilter, error } = useFetchAllBlogs();
    useEffect(() => {
        const bodyEle = document.getElementById("blog-body-html")
        const tocEle = document.getElementById("blog-toc")
        // Check if blog is not null before updating innerHTML
        if (blog && blog.body_html) {
            bodyEle.innerHTML = blog.body_html;
            tocEle.innerHTML = generateMD(blog.body_html);
        }

    }, [blogId, blog])

    return (
        <>
            <Box className="blog-detail">
                <LinearProgress className="progress-bar" variant="determinate" value={progress} />
                <Box className="blog-detail-container">
                    <Card className="blog-detail-main" variant="outlined">
                        <Box className="blog-cover" >
                            <img src={blog?.cover_image} alt={blog?.cover_iamge} />
                        </Box>
                        <Box className="blog-body">
                            <Box className="blog-title">
                                <Typography variant="h4">
                                    {blog?.title}
                                </Typography>
                            </Box>
                            <Box className="blog-body-html" id="blog-body-html" ref={bodyHTMLRef}>
                            </Box>
                        </Box>
                    </Card>
                    <Box className="blog-detail-sidebar">
                        <Box className="blog-detail-sidebar-container">
                            <Box className="blog-author-tile">
                                <CardHeader
                                    avatar={
                                        <Avatar src={blog?.user.profile_image} alt={blog?.username} />
                                    }
                                    title={blog?.user.name}
                                    subheader={`Published on ${blog?.readable_publish_date}`}
                                />
                                <Box className="blog-tag-list">
                                    {blog?.tags.map((text, index) => (
                                        <Chip className="tag" variant="outlined" color="secondary" key={index} label={`#${text}`} />
                                    ))}
                                </Box>
                                <CardActions>
                                    <Button color="success" variant="text">{blog?.reading_time_minutes} mins read</Button>
                                </CardActions>
                                <CardActions>
                                    <Chip icon={<ChatBubbleOutlineRoundedIcon />} label={`${blog?.comments_count} comments`} className="count-chip" variant="outlined" />
                                    <Chip icon={<MoodRoundedIcon />} label={`${blog?.public_reactions_count} reactions`} className="count-chip" variant="outlined" />
                                </CardActions>
                            </Box>
                            <Card className="blog-toc-tile" id="blog-toc">
                            </Card>
                            <BlogSidebar allTags={allTags} tagFilter={tagFilter} selectedTags={selectedTags} />
                            {
                                error ? <Typography>{error}</Typography> :
                                    blogList?.map((item) => (
                                        <BlogCard {...item} cover_image={item.cover_image = null} user={item.user = null} selectedTags={selectedTags} key={item.id} />
                                    ))
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}


export default BlogDetail