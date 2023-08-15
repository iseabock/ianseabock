import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import IconButton from '@mui/material/IconButton';

import { lightTheme } from '../theme';
import './index.scss';

import { ThemeContext } from '../util/Context';

function MyApp({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {/* <IconButton
                sx={{ position: 'absolute', top: '5px', right: '5px' }}
                onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                    <LightModeIcon sx={{ color: '#666666' }} />
                ) : (
                    <DarkModeIcon sx={{ color: '#666666' }} />
                )}
            </IconButton> */}
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object
};

export default MyApp;
