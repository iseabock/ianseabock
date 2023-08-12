import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { TypewriterContext } from '../util/Context';

const BlinkingCursor = ({ sentenceComplete }) => {
    const [show, setShow] = useState(true);
    const [isBlinkOn, setIsBlinkOn] = useState(false);

    // When sentence is complete, blink cursor for 7 seconds
    useEffect(() => {
        if (sentenceComplete) {
            setIsBlinkOn(true);
            setTimeout(() => {
                setIsBlinkOn(false);
                setShow((prevShow) => !prevShow);
            }, 7000);
        }
    }, [sentenceComplete]);

    // Remove cursor when blinking is done
    useEffect(() => {
        if (!isBlinkOn) return;

        const timer = setInterval(() => {
            setShow((prevShow) => !prevShow);
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, [isBlinkOn]);

    return <Box sx={{ width: '1rem' }}>{show ? '_' : ' '}</Box>;
};

const Typewriter = ({ sentence, typingSpeed }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const { sentenceComplete, setSentenceComplete } = useContext(TypewriterContext);

    // Randomize typing speed to mimic human typing... sort of. Bigger number = slower btw
    let speed = Math.floor(Math.random() * typingSpeed) + 50;

    // Type out sentence
    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < sentence.length) {
                setCurrentText((prevText) => prevText + sentence[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => {
            clearInterval(timer);
        };
    }, [sentence, currentIndex, typingSpeed]);

    useEffect(() => {
        currentText.length === sentence.length && setSentenceComplete(true);
    }, [currentText, sentence]);

    return (
        <Box flexDirection="column" alignItems="center" justifyContent="center">
            <Typography
                component="div"
                variant="courier"
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    whiteSpace: 'nowrap',
                    fontSize: '1.5rem'
                }}>
                {currentText}
                <BlinkingCursor sentenceComplete={sentenceComplete} />
            </Typography>
            <Box id="sentenceTest" sx={{ width: `100%` }}>
                <div
                    id="text"
                    style={{
                        whiteSpace: 'nowrap',
                        width: 'auto',
                        position: 'absolute',
                        color: 'transparent'
                    }}>
                    {sentence}
                </div>
            </Box>
        </Box>
    );
};

Typewriter.propTypes = {
    sentence: PropTypes.string,
    typingSpeed: PropTypes.number
    // containerSize: PropTypes.number
};

BlinkingCursor.propTypes = {
    sentenceComplete: PropTypes.bool
};

export default Typewriter;