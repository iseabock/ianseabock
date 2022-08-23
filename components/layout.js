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
        <Container>
            <Head>
                <link rel="icon" href="/favicon.ico" />
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
            <main>
                <Box>
                    <Box>{children}</Box>
                </Box>
            </main>
            <Footer />
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.array,
    home: PropTypes.bool
};

export default Layout;
