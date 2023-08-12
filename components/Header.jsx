import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Typewriter from './Typewriter';

import constants from '../constants';

const Header = () => {
    return (
        <Box
            sx={{
                position: 'sticky',
                top: 0,
                // margin: '0 auto',
                height: '80vh',
                paddingTop: '15rem',
                paddingBottom: '16rem'
            }}>
            <Typography
                variant="courier"
                component="h1"
                sx={{
                    fontSize: '2.8rem',
                    lineHeight: 1.2,
                    fontWeight: 800,
                    letterSpacing: '-0.05rem',
                    textAlign: 'center'
                }}>
                {constants.name}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    marginTop: '1rem',
                    lineHeight: 1.2,
                    letterSpacing: '-0.05rem',
                    textAlign: 'center',
                    height: '2rem'
                }}>
                <Typewriter sentence={constants.sentence} typingSpeed={25} containerSize={35} />
            </Box>
        </Box>
    );
};

export default Header;
