import React, { useContext } from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Paper from './Paper';

import { TypewriterContext } from '../util/Context';

import constants from '../constants';

const Contact = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('laptop'));
    const { sentenceComplete } = useContext(TypewriterContext);

    return (
        <section hidden={sentenceComplete ? false : true} className="inactive">
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
                    Let&apos;s Connect
                </Typography>
                <Typography
                    variant="libre"
                    component="p"
                    sx={{
                        textAlign: 'left',
                        margin: '1.5rem 0',
                        fontSize: matches ? '1rem' : '1.2rem'
                    }}>
                    I&apos;m currently on the market for a new role, so if you&apos;re looking for a
                    developer...
                    <Link
                        href={constants.linkedin}
                        sx={{
                            marginLeft: '5px',
                            marginBottom: '-5px',
                            color: '#0070f3',
                            textDecoration: 'none'
                        }}
                        rel="noreferrer"
                        target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </Link>
                </Typography>
            </Paper>
        </section>
    );
};

export default Contact;
