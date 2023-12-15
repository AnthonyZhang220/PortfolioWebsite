import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import "./BlogCard.scss"

export default function BlogCard(props) {
    const { id, cover_image, title, tag_list, readable_publish_date, reading_time_minutes, description, user, selectedTags } = props;
    const navigate = useNavigate();
    return (
        <Card className="blog-card" variant="outlined" sx={{ maxWidth: 400, m: 2, borderRadius: 4, cursor: "pointer", display: "flex", flexDirection: "column" }} onClick={() => navigate(`/blog/${id}`)} >
            <CardMedia
                className="blog-card-cover"
                sx={{ height: 200 }}
                image={cover_image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {description}
                </Typography>
            </CardContent>
            <Box className="tag-list">
                {tag_list?.map((text, index) => (
                    <Chip className="tag" label={`#${text}`} color={selectedTags?.has(text) ? "success" : "secondary"}
                        variant={selectedTags?.has(text) ? "filled" : "outlined"}
                        size="small" key={index} />
                ))}
            </Box>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" src={user.profile_image} alt={user.username} />
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={user.name}
                subheader={`Published on ${readable_publish_date}`}
                sx={{ marginTop: "auto" }}
            />
            <CardActions>
                <Button color="success" variant="text">{reading_time_minutes} mins read</Button>
                <Link to={`/blog/${id}`} style={{ marginLeft: "auto" }}>
                    <Button variant="text" >Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    );
}