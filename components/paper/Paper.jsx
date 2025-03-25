import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import BentCorner from './BentCorner';

const Paper = ({ children }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('laptop'));

    return (
        <Box
            sx={{
                position: 'relative',
                width: matches ? '55%' : '90%',
                margin: '8rem auto'
            }}>
            <BentCorner x="left" y="top" />
            <BentCorner x="right" y="top" />
            <BentCorner x="left" y="bottom" />
            <BentCorner x="right" y="bottom" />
            <Box
                component="div"
                sx={{
                    backgroundColor: theme.palette.paper.background,
                    position: 'relative',
                    padding: '2em',
                    border: '1px solid rgba(0, 0, 0, .04)',
                    borderRadius: '5px'
                }}>
                {children}
            </Box>
        </Box>
    );
};

Paper.propTypes = {
    children: PropTypes.node
};

export default Paper;
