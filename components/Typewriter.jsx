import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const BlinkingCursor = ({ sentenceComplete }) => {
    const [show, setShow] = useState(true);
    const [isBlinkOn, setIsBlinkOn] = useState(false);

    useEffect(() => {
        if (sentenceComplete) {
            setIsBlinkOn(true);
            setTimeout(() => {
                setIsBlinkOn(false);
                setShow(false);
            }, 7000);
        }
    }, [sentenceComplete]);

    useEffect(() => {
        if (!isBlinkOn) return;

        const timer = setInterval(() => {
            setShow((prevShow) => !prevShow);
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, [isBlinkOn]);

    return <div sx={{ width: '1rem' }}>{show ? '_' : ' '}</div>;
};
const Typewriter = ({ sentence, typingSpeed }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fontSize, setFontSize] = useState(16);
    let speed = Math.floor(Math.random() * typingSpeed) + 50;

    useEffect(() => {
        var container = document.getElementById('sentenceTest');
        var text = document.getElementById('text');
        var fontSize = 20;
        text.style.fontSize = fontSize + 'px';
        while (Math.ceil(text.clientWidth) > container.clientWidth) {
            fontSize--;
            text.style.fontSize = fontSize + 'px';
            setFontSize(`${fontSize--}px`);
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

    return (
        <Box flexDirection="column" alignItems="center" justifyContent="center">
            <Typography
                component="div"
                sx={{
                    width: '24rem',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    margin: '0 auto',
                    whiteSpace: 'nowrap',
                    fontSize: fontSize
                }}>
                {currentText}
                <BlinkingCursor sentenceComplete={currentText.length === sentence.length} />
            </Typography>
            <div id="sentenceTest" style={{ width: '24rem' }}>
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
            </div>
        </Box>
    );
};

Typewriter.propTypes = {
    sentence: PropTypes.string,
    typingSpeed: PropTypes.number
};

BlinkingCursor.propTypes = {
    sentenceComplete: PropTypes.bool
};

export default Typewriter;
