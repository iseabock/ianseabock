import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Paper = ({ children }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('laptop'));

    const topCornerVariations = [
        {
            top: 8,
            right: 8,
            boxShadow: `6px 5px 10px 3px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-5deg)'
        },
        {
            top: 4,
            left: 15,
            boxShadow: `1px -2px 12px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(5deg)'
        },
        {
            top: 4,
            right: 10,
            boxShadow: `6px 5px 12px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-5deg)'
        },
        {
            top: 2,
            left: 20,
            boxShadow: `-1px 2px 12px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(5deg)'
        },
        {
            top: 2,
            left: 13,
            boxShadow: `-1px 2px 12px 3px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(4deg)'
        }
    ];

    const bottomCornerVariations = [
        {
            bottom: 8,
            left: 8,
            boxShadow: `6px 5px 10px 7px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-6deg)'
        },
        {
            bottom: 8,
            right: 8,
            boxShadow: `6px 5px 10px 7px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(5deg)'
        },
        {
            bottom: 8,
            left: 8,
            boxShadow: `3px 2px 9px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-6deg)'
        },
        {
            bottom: 8,
            right: 8,
            boxShadow: `3px 2px 9px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(6deg)'
        },
        {
            bottom: 8,
            right: 8,
            boxShadow: `3px 1px 9px 2px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(6deg)'
        }
    ];

    const topVariation = Math.floor(Math.random() * 5);
    const bottomVariation = Math.floor(Math.random() * 5);

    return (
        <Box>
            <Box
                component="div"
                sx={{
                    backgroundColor: theme.palette.paper.background,
                    position: 'relative',
                    width: matches ? '55%' : '100%',
                    padding: '2em',
                    margin: '9rem auto',
                    border: '1px solid rgba(0, 0, 0, .04)',
                    borderRadius: '5px',
                    '&:before': {
                        content: '" "',
                        position: 'absolute',
                        width: '15%',
                        height: '33%',
                        zIndex: '-1',
                        backgroundColor: theme.palette.shadow.primary,
                        ...topCornerVariations[topVariation]
                    },
                    '&:after': {
                        content: '" "',
                        position: 'absolute',
                        width: '33%',
                        height: '10%',
                        zIndex: '-1',
                        borderRadius: '0 0 0 5px',
                        backgroundColor: theme.palette.shadow.primary,
                        ...bottomCornerVariations[bottomVariation]
                    }
                }}>
                {children}
            </Box>
        </Box>
    );
};

Paper.propTypes = {
    children: PropTypes.array
};

export default Paper;
