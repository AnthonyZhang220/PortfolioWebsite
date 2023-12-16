
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function ThemeProviderContext({ children }) {
    const isMobile = useMediaQuery('(max-width: 834px)');
    const theme = createTheme({
        palette: {
            primary: {
                light: '#845fcc',
                main: '#6638c0',
                dark: '#472786'
            },
            secondary: {
                light: '#a279e9',
                main: '#8b58e4',
                dark: '#613d9f',
            },
            white: {
                main: '#fafafa'
            },
            black: {
                main: '#212121'
            },
            mode: mode ? 'dark' : 'light'

        },
        typography: {
            fontFamily: `"Roboto", sans-serif`,
            h2: {
                fontSize: isMobile ? "3rem" : "4rem",
            },
            h3: {
                fontSize: isMobile ? "2rem" : "3rem",
            },
            caption: {
                fontSize: "1rem",
            },
        }
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}