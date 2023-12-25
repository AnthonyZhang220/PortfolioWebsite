import { Typography } from '@mui/material'
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import React, { useEffect } from 'react'
import { Card } from '@mui/material';

import "./BlogSidebar.scss"

function BlogSidebar({ allTags, tagFilter, selectedTags }) {
    useEffect(() => {
        console.log(allTags, selectedTags)
    }, [allTags, selectedTags])
    return (
        <Box className="blog-sidebar-container" component={Card} variant='outlined' sx={{ borderRadius: 4 }}>
            <Box className="blog-sidebar-title">
                <Typography variant='h6'>
                    All Tags
                </Typography>
            </Box>
            <Box className="blog-sidebar-tag-list">
                {
                    allTags?.map((tag, index) => (
                        <Box className="blog-sidebar-tag" key={index} >
                            <Chip onClick={() => tagFilter(tag)} label={`#${tag}`} color={selectedTags?.has(tag) ? "success" : "secondary"} variant={selectedTags?.has(tag) ? "filled" : "outlined"} size="medium" clickable />
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}

export default BlogSidebar