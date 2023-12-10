import { useState, useMemo, useEffect, useCallback, useRef } from 'react';

import { musicList } from './MusicList';

function useMusicPlayer() {
    const getDefaultVolume = () => {
        //get DefaultVolume
        const defaultVolume = localStorage.getItem('volume')
        if (defaultVolume == null) {
            localStorage.setItem('volume', 0.2);
        }

        return defaultVolume * 1
    }

    const audioRef = useRef(null)
    const randomizer = Math.floor(Math.random() * (musicList.length - 1) + 1)
    const [volume, setVolume] = useState(getDefaultVolume);
    const [duration, setDuration] = useState(0); // seconds
    const [position, setPosition] = useState(0);
    const [currentMusicInfo, setCurrentMusicInfo] = useState({ ...musicList.find(music => music.id === randomizer) })
    const [paused, setPaused] = useState(true);
    const listLength = musicList.length;


    const formatDuration = useMemo(() => {
        return (value) => {
            const minute = Math.floor(value / 60);
            const secondLeft = Math.floor(value - minute * 60);
            return `${minute}:${secondLeft <= 9 ? `0${secondLeft}` : secondLeft}`;
        };
    }, []);


    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
            setPaused(false);
        } else {
            audioRef.current.pause();
            setPaused(true);
        }
    };

    const handlePosition = (value) => {
        setPosition(value);
        audioRef.current.currentTime = value;
    };

    //handle 
    const handleRewind = () => {
        handlePosition(Math.max(0, audioRef.current.currentTime - 5));
    };
    const handleForward = () => {
        handlePosition(Math.min(duration, audioRef.current.currentTime + 5));
    };

    //prev/next music
    const handleSkipNext = useCallback(() => {
        setCurrentMusicInfo((prevMusicInfo) => (prevMusicInfo.id === listLength ? { ...musicList.find(music => music.id === 1) } : { ...musicList.find(music => music.id === prevMusicInfo.id + 1) }));

        audioRef.current.load();
        if (!paused) {
            audioRef.current.play();
        }
    }, [audioRef, listLength, paused]);

    const handleSkipPrevious = useCallback(() => {
        setCurrentMusicInfo((prevMusicInfo) => (prevMusicInfo.id === 1 ? { ...musicList.find(music => music.id === listLength) } : { ...musicList.find(music => music.id === prevMusicInfo.id - 1) }));

        audioRef.current.load();
        if (!paused) {
            audioRef.current.play();
        }
    }, [audioRef, listLength, paused]);

    const handleVolume = (event, newVolume) => {
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    }

    const handleGetAudioData = useCallback(() => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    }, [audioRef]);

    const handleTimeUpdate = useCallback(() => {
        if (audioRef.current) {
            setPosition(audioRef.current.currentTime);
            if (audioRef.current.currentTime >= audioRef.current.duration) {
                handleSkipNext();
            }
        }
    }, [audioRef, handleSkipNext]);

    useEffect(() => {
        if (audioRef.current) {
            const currentAudioRef = audioRef.current;

            currentAudioRef.addEventListener('loadedmetadata', handleGetAudioData);
            currentAudioRef.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                // cleanup
                currentAudioRef.removeEventListener('loadedmetadata', handleGetAudioData);
                currentAudioRef.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }

    }, [audioRef, handleGetAudioData, handleTimeUpdate]);

    useEffect(() => {
        localStorage.setItem('volume', volume)
    }, [volume])

    const state = {
        volume,
        duration,
        position,
        currentMusicInfo,
        paused,
    }

    const setters = {
        setVolume,
        setDuration,
        setPosition,
        setCurrentMusicInfo,
        setPaused
    }
    const handlers = {
        togglePlay,
        handleForward,
        handlePosition,
        handleRewind,
        handleSkipNext,
        handleSkipPrevious,
        handleVolume,
        handleTimeUpdate,
        handleGetAudioData,
        formatDuration

    }
    return { audioRef, ...state, ...setters, ...handlers }
}

export default useMusicPlayer