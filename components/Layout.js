import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from './Header';
import Footer from './Footer';
import config from '../config';

const Layout = ({ children }) => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FFFFFF',
                maxWidth: '1200px',
                height: '99vh'
            }}>
            <Head>
                <title>{config.siteTitle}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <meta name="description" content="Ian Seabock Personal Site" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        config.siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={config.siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Header />
            <Box sx={{ flex: '1 0 auto' }}>
                <Box>{children}</Box>
            </Box>
            <Footer />
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.array,
    home: PropTypes.bool
};

export default Layout;
