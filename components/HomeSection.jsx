import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Paper from './paper/Paper';

import { TypewriterContext } from '../util/Context';

const HomeSection = ({ sectionObject }) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('laptop'));
    const { sentenceComplete } = useContext(TypewriterContext);

    return (
        <section hidden={!sentenceComplete} className="inactive">
            <Paper>
                <Typography
                    variant="libre"
                    component="h2"
                    sx={{
                        fontSize: matches ? '2.8rem' : '2rem',
                        fontWeight: 'normal',
                        textAlign: 'center',
                        padding: '0.2em 0',
                        margin: 0,
                        borderTop: `1px solid ${theme.palette.shadow.primary}`,
                        borderBottom: `1px solid ${theme.palette.shadow.primary}`
                    }}>
                    {sectionObject.title}
                </Typography>
                {sectionObject.body.map((copyItem, index) => (
                    <Typography
                        key={index}
                        variant="libre"
                        component="p"
                        sx={{
                            textAlign: 'left',
                            margin: '1.5rem 0',
                            fontSize: matches ? '1rem' : '1.2rem'
                        }}
                        dangerouslySetInnerHTML={{
                            __html: copyItem
                        }}></Typography>
                ))}
            </Paper>
        </section>
    );
};

HomeSection.propTypes = {
    sectionObject: PropTypes.object
};

export default HomeSection;
