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

import "./BlogCard.scss"

export default function BlogCard(props) {
    const { id, cover_image, title, name, tag_list, url, readable_publish_date, reading_time_minutes, description, user } = props;

    return (
        <Card className="blog-card" variant="outlined" sx={{ maxWidth: 345, m: 2, borderRadius: 4, cursor: "pointer" }} >
            <CardMedia
                className="blog-card-cover"
                sx={{ height: 175 }}
                image={cover_image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Box className="tag-list">
                {tag_list?.map((text, index) => (
                    <Button className="tag" variant="contained" color="secondary" size="small" key={index}>
                        #{text}
                    </Button>
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
            />
            <CardActions>
                <Button color="success" variant="text">{reading_time_minutes} mins read</Button>
                <Link to={`/blog/${id}`}>
                    <Button variant="text" >Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    );
}