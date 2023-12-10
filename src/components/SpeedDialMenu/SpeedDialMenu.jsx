import React from "react"
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import SvgIcon from '@mui/material/SvgIcon';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import { ReactComponent as BubbleTeaIcon } from "./bubble-tea.svg"
import { useMusicPlayerContext } from '../../contexts/MusicPlayerContext';

function SpeedDialMenu(props) {
    const backToTop = props.backToTop;
    const { paused, togglePlay } = useMusicPlayerContext()

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const backToTopHandler = () => {
        backToTop();
        handleClose();
    }
    const goToGitHubHandler = () => {
        window.location.href = "https://github.com/AnthonyZhang220"
        handleClose();
    }

    const buyBubbleTea = () => {
        handleClose();
    }


    const actions = [
        { icon: paused ? <PlayArrowRoundedIcon fontSize='large' /> : <PauseRoundedIcon fontSize='large' />, name: paused ? 'Play some music!' : 'Pause', action: togglePlay },
        { icon: <GitHubIcon fontSize='large' />, name: 'Go to Github', action: goToGitHubHandler },
        { icon: <SvgIcon fontSize='large'><BubbleTeaIcon /></SvgIcon>, name: 'Buy me a bubble tea', action: buyBubbleTea },
        { icon: <KeyboardArrowUpRoundedIcon fontSize='large' />, name: 'Scroll to top', action: backToTopHandler, },
    ];

    return (
        <Box sx={{ position: "fixed", bottom: 0, right: 0, height: 330, transform: 'translateZ(0px)', flexGrow: 1, zIndex: 999, }}>
            <Backdrop open={open} />
            <SpeedDial
                ariaLabel="SpeedDial tooltip"
                sx={{ position: 'absolute', bottom: 32, right: 32 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        FabProps={{ size: "large" }}
                        onClick={action.action}
                    />
                ))}
            </SpeedDial>
        </Box>
    )
}

export default SpeedDialMenu