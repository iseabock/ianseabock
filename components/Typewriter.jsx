import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Typewriter = ({ sentence, typingSpeed }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (currentIndex < sentence.length) {
                setCurrentText((prevText) => prevText + sentence[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(timer);
            }
        }, typingSpeed);

        return () => {
            clearInterval(timer);
        };
    }, [sentence, currentIndex, typingSpeed]);

    return <span>{currentText}</span>;
};

Typewriter.propTypes = {
    sentence: PropTypes.string,
    typingSpeed: PropTypes.number
};

export default Typewriter;
