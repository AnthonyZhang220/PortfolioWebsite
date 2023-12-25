
import { useState, useMemo } from 'react';
import {
    createTheme, responsiveFontSizes,
} from '@mui/material';
import Cookies from 'js-cookie';



export default function useColorMode() {

    const [mode, setMode] = useState(Cookies.get("colorMode") ?? "light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                Cookies.set("colorMode", mode === "light" ? "dark" : "light")
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [mode],
    );

    const getDesignTokens = (mode) => ({
        palette: {
            mode,
            ...(mode === "light") ? {
                primary: {
                    main: "#6e41c8",
                    light: "#5523af",
                    dark: "#24005b"
                },
                secondary: {
                    main: "#625b70",
                    light: "#4a4358",
                    dark: "#1e192b"
                },
                text: {
                    primary: "#1c1b1e",
                    secondary: "#49454e"
                },
                background: {
                    default: "#fffbff",
                    paper: "#fdf8fd"
                },
            } : {
                primary: {
                    main: "#d1bcff",
                    light: "#eaddff",
                    dark: "#5523af"
                },
                secondary: {
                    main: "#ccc2db",
                    light: "#4a4358",
                    dark: "#1e192b"
                },
                text: {
                    primary: "#cac5ca",
                    secondary: "#cbc4cf"
                },
                background: {
                    default: "#141316",
                    paper: "#211f22"
                },
            },
            breakpoints: {
                values: {
                    xs: 0,
                    sm: 768,
                    md: 900,
                    lg: 1400,
                    xl: 1600
                },
            },
            typography: {
                fontFamily: ["Roboto", "sans-serif"].join(','),
            },
        },
    })

    let theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
    theme = responsiveFontSizes(theme);


    return [colorMode.toggleColorMode, theme, mode];
}