import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import Paper from './Paper';

import { TypewriterContext } from '../util/Context';

const HomeSection = ({ sectionObject }) => {
    const theme = useTheme();
    const { sentenceComplete } = useContext(TypewriterContext);

    return (
        <section hidden={sentenceComplete ? false : true} className="inactive">
            <Paper>
                <Typography
                    variant="libre"
                    component="h2"
                    sx={{
                        fontSize: '2.8em',
                        fontWeight: 'normal',
                        textAlign: 'center',
                        padding: '0.2em 0',
                        margin: 0,
                        borderTop: `1px solid ${theme.palette.shadow.primary}`,
                        borderBottom: `1px solid ${theme.palette.shadow.primary}`
                    }}>
                    {sectionObject.title}
                </Typography>
                {sectionObject.copy.map((copyItem, index) => (
                    <Typography
                        key={index}
                        variant="libre"
                        component="p"
                        sx={{
                            textAlign: 'left',
                            margin: '1.5em 0'
                        }}>
                        {copyItem}
                    </Typography>
                ))}
            </Paper>
        </section>
    );
};

HomeSection.propTypes = {
    sectionObject: PropTypes.object
};

export default HomeSection;
