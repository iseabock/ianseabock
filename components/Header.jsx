import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import config from '../config';

const Header = () => (
    <Box
        sx={{
            marginTop: '15rem',
            marginBottom: '1rem'
        }}>
        <Typography
            component="h1"
            sx={{
                fontSize: '2.5rem !important',
                lineHeight: 1.2,
                fontWeight: 800,
                letterSpacing: '-0.05rem',
                textAlign: 'center'
            }}>
            {config.name}
        </Typography>
    </Box>
);

export default Header;
