import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '#e4f0e2'
        }
    },
    typography: {
        fontFamily: ['Courier New', 'Courier', 'monospace', 'serif'].join(',')
    }
});

export default theme;
