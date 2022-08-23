import React from 'react';
import Head from 'next/head';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';

import config from '../config';

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{config.siteTitle}</title>
            </Head>

            <Typography
                sx={{
                    lineHeight: 1.2,
                    letterSpacing: '-0.05rem',
                    textAlign: 'center'
                }}>
                i write a little code and do other things too.
            </Typography>
        </Layout>
    );
}
