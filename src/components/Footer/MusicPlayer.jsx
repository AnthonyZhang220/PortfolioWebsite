import React, { useState, useRef, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';


import { musicList } from './MusicList.js';


const Widget = styled('div')(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: '100%',
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
    backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
    backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
    width: 100,
    height: 100,
    objectFit: 'cover',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.08)',
    '& > img': {
        width: '100%',
    },
});

const TinyText = styled(Typography)({
    fontSize: '.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

export default function MusicPlayer() {


    const randomizer = Math.floor(Math.random() * (musicList.length - 1) + 1)

    const theme = useTheme();

    const audioRef = useRef();


    const [volume, setVolume] = useState(0.2);
    const [duration, setDuration] = useState(0); // seconds
    const [position, setPosition] = useState(0);
    const [paused, setPaused] = useState(true);
    const [songId, setSongId] = useState(randomizer);


    // const [current, setCurrent] = useState(0);


    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = Math.floor(value - minute * 60);
        return `${minute}:${secondLeft <= 9 ? `0${secondLeft}` : secondLeft}`;
    }
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

    const handleGetAudioData = () => {
        audioRef.current.volume = localStorage.getItem('volume');

        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    }

    const timeLeft = Math.floor(duration) - Math.floor(position)

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setPosition(audioRef.current.currentTime)
        }

        //auto skip to next song when previous song ends
        if (timeLeft === 0) {
            handleSkipNext();
        }
    }

    const handlePlay = () => {

        if (paused) {
            audioRef.current.play();
            setPaused(false)

        } else {
            audioRef.current.pause();
            setPaused(true)

        }
    };

    const handlePosition = (value) => {
        setPosition(value);

        audioRef.current.currentTime = position;
    }

    const handleRewind = () => {
        setPosition(audioRef.current.currentTime - 5);
        audioRef.current.currentTime -= 5;

        if (position <= 0) {
            setPosition(0);
        }
    }

    const handleForward = () => {

        setPosition(audioRef.current.currentTime + 5);
        audioRef.current.currentTime += 5;


        if (position >= duration) {
            setPosition(duration);
        }
    }

    const handleSkipNext = () => {

        if (songId < musicList.length) {
            setSongId(songId + 1);
        }

        if (songId === musicList.length) {
            setSongId(1);
        }

        audioRef.current.load();

        setTimeout(() => {
            audioRef.current.play();
        }, 1000)
    }

    const handleSkipPrevious = () => {
        if (songId > 1) {
            setSongId(songId - 1);
        }

        if (songId === 1) {
            setSongId(musicList.length);
        }

        audioRef.current.load();
        audioRef.current.play();

    }

    const handleVolume = (event, newVolume) => {
        setVolume(newVolume);
        localStorage.setItem('volume', newVolume);

        audioRef.current.volume = newVolume;

    }

    useEffect(() => {
        localStorage.setItem('volume', 0.2);
    }, [])




    return (
        <Box sx={{ minWidth: '300px', width: '100%', overflow: 'hidden' }}>
            <Widget>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CoverImage>
                        <img
                            alt={musicList.find(x => x.id === songId).cover}
                            src={musicList.find(x => x.id === songId).cover}
                        />
                    </CoverImage>
                    <Box sx={{ ml: 1.5, minWidth: 0 }}>
                        <Typography variant="caption" color="text.primary" fontWeight={700}>
                            {musicList.find(x => x.id === songId).artist}
                        </Typography>
                        <Typography wrap='true'>
                            <>
                                <b>
                                    {musicList.find(x => x.id === songId).title}
                                </b>
                            </>
                        </Typography>
                        <Typography noWrap letterSpacing={-0.25}>
                            {musicList.find(x => x.id === songId).performer}
                        </Typography>
                    </Box>
                </Box>
                <Slider
                    aria-label="time-indicator"
                    size="small"
                    value={position}
                    min={0}
                    step={1}
                    max={duration}
                    onChange={(_, value) => handlePosition(value)}
                    sx={{
                        color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 8,
                            height: 8,
                            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                            '&:before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                                    ? 'rgb(255 255 255 / 16%)'
                                    : 'rgb(0 0 0 / 16%)'
                                    }`,
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.28,
                        },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                    }}
                >
                    <TinyText>{formatDuration(position)}</TinyText>
                    <TinyText>-{formatDuration(duration - position)}</TinyText>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: -1,
                    }}
                >
                    <IconButton aria-label="previous song" onClick={handleSkipPrevious} >
                        <SkipPreviousRoundedIcon fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                    <IconButton aria-label="previous song" onClick={handleRewind} >
                        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                    <IconButton
                        aria-label={paused ? 'play' : 'pause'}
                        onClick={handlePlay}
                    >
                        {paused ? (
                            <PlayArrowRounded
                                sx={{ fontSize: '3.5rem' }}
                                htmlColor={mainIconColor}
                            />
                        ) : (
                            <PauseRounded sx={{ fontSize: '3.5rem' }} htmlColor={mainIconColor} />
                        )}
                    </IconButton>
                    <audio id='audio' preload='auto' ref={audioRef} onLoadedMetadata={handleGetAudioData} onTimeUpdate={handleTimeUpdate}>
                        <source src={musicList.find(x => x.id === songId).source} type="audio/mpeg"></source>
                    </audio>
                    <IconButton aria-label="next song" onClick={handleForward}>
                        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                    <IconButton aria-label="next song" onClick={handleSkipNext} >
                        <SkipNextRoundedIcon fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                </Box>
                <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                    {
                        volume === 0 ?
                            <VolumeOffIcon htmlColor={lightIconColor} />
                            :
                            <VolumeDownRounded htmlColor={lightIconColor} />

                    }
                    <Slider
                        aria-label="Volume"
                        min={0}
                        max={1}
                        step={0.01}
                        value={volume}
                        onChange={handleVolume}
                        sx={{
                            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                            '& .MuiSlider-track': {
                                border: 'none',
                            },
                            '& .MuiSlider-thumb': {
                                width: 24,
                                height: 24,
                                backgroundColor: '#fff',
                                '&:before': {
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                    boxShadow: 'none',
                                },
                            },
                        }}
                    />
                    <VolumeUpRounded htmlColor={lightIconColor} />
                </Stack>
            </Widget>
        </Box>
    );
}
