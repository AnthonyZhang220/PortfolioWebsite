import { createContext, useContext } from 'react';
import useMusicPlayer from '../hooks/useMusicPlayer';

const MusicPlayerContext = createContext();

export const useMusicPlayerContext = () => useContext(MusicPlayerContext);

export const MusicPlayerProvider = ({ children }) => {
    const { ...musicPlayer } = useMusicPlayer();

    return (
        <MusicPlayerContext.Provider value={{ ...musicPlayer }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};