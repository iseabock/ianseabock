<link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
    rel="stylesheet"></link>;
import { createTheme } from '@mui/material/styles';

const theme = {
    typography: {
        courier: { fontFamily: ['Courier New', 'Courier', 'monospace', 'serif'].join(',') },
        libre: { fontFamily: ['Libre Baskerville', 'serif'].join(',') }
    },
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 640,
            laptop: 1024,
            desktop: 1200
        }
    }
};

const darkTheme = createTheme({
    palette: {
        background: {
            default: '#CCCCCC'
        },
        text: {
            primary: '#333333'
        },
        shadow: {
            primary: 'rgba(0, 0, 0, .12)',
            secondary: 'rgba(0, 0, 0, .02)'
        },
        paper: {
            background: '#DDDDDD'
        }
    },

    ...theme
});

const lightTheme = createTheme({
    palette: {
        background: {
            default: '#FFFFFF'
        },
        text: {
            primary: '#000000'
        },
        shadow: {
            primary: 'rgba(0, 0, 0, 0.18)',
            secondary: 'rgba(0, 0, 0, .08)'
        },
        paper: {
            background: '#FFFFFF'
        }
    },
    ...theme
});

export { darkTheme, lightTheme, theme };
