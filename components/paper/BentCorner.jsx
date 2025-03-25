import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const BentCorner = ({ x, y }) => {
    const theme = useTheme();

    const topRightVariations = [
        {
            top: 8,
            right: 8,
            boxShadow: `6px 5px 10px 3px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-5deg)'
        },
        {
            top: 4,
            right: 10,
            boxShadow: `6px 5px 12px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-5deg)'
        },
        {
            top: 10,
            right: 4,
            boxShadow: `1px 5px 8px 4px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-5deg)'
        }
    ];

    const topLeftVariations = [
        {
            top: 4,
            left: 15,
            boxShadow: `1px -2px 12px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(5deg)'
        },
        {
            top: 4,
            left: 20,
            boxShadow: `-1px 2px 12px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(5deg)'
        },
        {
            top: 4,
            left: 13,
            boxShadow: `-1px 2px 12px 3px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(4deg)'
        }
    ];

    const bottomRightCornerVariations = [
        {
            bottom: 8,
            right: 8,
            boxShadow: `6px 5px 10px 7px ${theme.palette.shadow.primary}`,
            transform: 'skew(8deg) skewY(5deg)'
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

    const bottomLeftCornerVariations = [
        {
            bottom: 8,
            left: 8,
            boxShadow: `6px 5px 10px 7px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-6deg)'
        },
        {
            bottom: 8,
            left: 8,
            boxShadow: `3px 2px 9px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-6deg)'
        },
        {
            bottom: 8,
            left: 6,
            boxShadow: `3px 2px 14px 6px ${theme.palette.shadow.primary}`,
            transform: 'skew(-8deg) skewY(-6deg)'
        }
    ];

    const getCornerVariation = (x, y) => {
        console.log('Math.floor(Math.random() * 3)', Math.floor(Math.random() * 3));
        if (x === 'right' && y === 'top') {
            return topRightVariations[Math.floor(Math.random() * 3)];
        } else if (x === 'left' && y === 'top') {
            return topLeftVariations[Math.floor(Math.random() * 3)];
        } else if (x === 'right' && y === 'bottom') {
            return bottomRightCornerVariations[Math.floor(Math.random() * 3)];
        } else if (x === 'left' && y === 'bottom') {
            return bottomLeftCornerVariations[2];
        }
    };

    return (
        <Box
            sx={{
                content: '" "',
                position: 'absolute',
                width: '15%',
                height: '15%',
                zIndex: -1,
                backgroundColor: theme.palette.shadow.primary,
                borderTopLeftRadius: '2px',
                ...getCornerVariation(x, y)
            }}
        />
    );
};

BentCorner.propTypes = {
    x: PropTypes.string,
    y: PropTypes.string,
    theme: PropTypes.object
};

export default BentCorner;
