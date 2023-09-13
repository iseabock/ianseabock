import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '../util/theme';
import './index.scss';

import { ThemeContext } from '../util/Context';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeContext.Provider value={null}>
            <ThemeProvider theme={theme}>
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
