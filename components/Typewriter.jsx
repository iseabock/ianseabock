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

    return <Box>{show ? <span>_</span> : <span style={{ color: 'transparent' }}>_</span>}</Box>;
};

const Typewriter = ({ sentence, typingSpeed }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fontSize, setFontSize] = useState(20);
    const { sentenceComplete, setSentenceComplete } = useContext(TypewriterContext);

    // Randomize typing speed to mimic human typing... sort of. Bigger number = slower btw
    let speed = Math.floor(Math.random() * typingSpeed) + 50;

    // Type out sentence
    useEffect(() => {
        var container = document.getElementById('sentenceTest');
        var text = document.getElementById('text');
        var testFontSize = 20;
        text.style.fontSize = testFontSize + 'px';
        while (Math.ceil(text.clientWidth) > container.clientWidth) {
            testFontSize--;
            text.style.fontSize = testFontSize + 'px';
            setFontSize(`${testFontSize--}px`);
        }
    }, [fontSize]);

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
        <Box
            sx={{ width: '100%' }}
            flexDirection="column"
            alignItems="center"
            justifyContent="center">
            <Typography
                component="div"
                variant="courier"
                sx={{
                    width: 'fit-content',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    margin: '0 auto',
                    whiteSpace: 'nowrap',
                    fontSize: fontSize
                }}>
                {currentText}
                <BlinkingCursor sentenceComplete={sentenceComplete} />
            </Typography>
            <Box id="sentenceTest" sx={{ width: '24rem' }}>
                <Typography
                    component="div"
                    variant="courier"
                    id="text"
                    sx={{
                        whiteSpace: 'nowrap',
                        width: 'auto',
                        position: 'absolute',
                        color: 'transparent',
                        fontSize: fontSize
                    }}>
                    {sentence + '_'}
                </Typography>
            </Box>
        </Box>
    );
};

Typewriter.propTypes = {
    sentence: PropTypes.string,
    typingSpeed: PropTypes.number,
    containerSize: PropTypes.number
};

BlinkingCursor.propTypes = {
    sentenceComplete: PropTypes.bool
};

export default Typewriter;
