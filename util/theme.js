<link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap"
    rel="stylesheet"></link>;
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#FFFFFF'
        },
        text: {
            primary: '#000000'
        },
        shadow: {
            primary: 'rgba(0, 0, 0, 0.18)'
        },
        paper: {
            background: '#FFFFFF'
        }
    },
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
});

export { theme };
