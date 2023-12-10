
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function CircularProgressWithLabel({ progress }) {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={progress} size={80} thickness={2} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h5"
                    component="div"
                    color="text.secondary"
                    sx={{ fontWeight: "bold" }}
                >{`${Math.round(progress)}%`}</Typography>
            </Box>
        </Box>
    );
}
