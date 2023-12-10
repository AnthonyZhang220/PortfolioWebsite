import React from 'react'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import "./Banner.scss";

function Banner() {
    return (
        <div className='banner'>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: "30px", flexWrap: 'wrap' }}>
                <Card elevation={0} sx={{
                    p: 1,
                    m: 2,
                    borderRadius: '30px',
                    boxShadow: "0 1.5rem 2rem -2rem hsl(200 50% 20% / 40%)",
                    // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}>
                    <CardContent>
                        <Box sx={{
                            display: 'flex', justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <EventAvailableOutlinedIcon sx={{ color: "#fa5502", fontSize: 40 }} />
                            <Grid container item xs={12} direction='column' textAlign='center' px={3} wrap='nowrap'>
                                <Typography variant="h4" >
                                    2+ Years
                                </Typography>
                                <Typography variant="h6" noWrap >
                                    Frontend Development
                                </Typography>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
                <Card elevation={0} sx={{
                    p: 1,
                    m: 2,
                    borderRadius: '30px',
                    boxShadow: "0 1.5rem 2rem -2rem hsl(200 50% 20% / 40%)",
                    // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}>
                    <CardContent>
                        <Box sx={{
                            display: 'flex', justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <ScienceOutlinedIcon sx={{ color: "#e39905", fontSize: 40 }} />
                            <Grid container item xs={12} direction='column' textAlign='center' px={3} wrap='nowrap'>
                                <Typography variant='h4' >
                                    5+ Projects
                                </Typography>
                                <Typography variant='h6' noWrap >
                                    Hands-on Experience
                                </Typography>
                            </Grid>
                        </Box>
                    </CardContent>
                </Card>
                <Card elevation={0} sx={{
                    p: 1,
                    m: 2,
                    borderRadius: '30px',
                    boxShadow: "0 1.5rem 2rem -2rem hsl(200 50% 20% / 40%)",
                    // boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}>
                    <CardContent>
                        <Box sx={{
                            display: 'flex', justifyContent: "center",
                            alignItems: "center",
                        }}>
                            <SchoolOutlinedIcon sx={{ color: "#118a39", fontSize: 40 }} />
                            <Grid container item xs={12} direction='column' textAlign='center' px={2} wrap='nowrap'>
                                <Typography variant='h4' noWrap>
                                    4 Certificates
                                </Typography>
                                <Typography variant='h6' noWrap >
                                    Coursera, MOOC
                                </Typography>
                            </Grid>
                        </Box>

                    </CardContent>
                </Card>
            </Box>
        </div>
    )
}

export default Banner