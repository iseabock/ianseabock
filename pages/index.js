import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import MainLayout from '../components/MainLayout';
import Contact from '../components/Contact';
import HomeSection from '../components/HomeSection';

import constants from '../constants';

const Home = () => {
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        });

        sections.forEach((section) => {
            observer.observe(section);
        });
    }, []);

    return (
        <MainLayout home={true}>
            <Box>
                {constants.home.map((sectionObject, index) => (
                    <HomeSection key={index} sectionObject={sectionObject} />
                ))}
                <Contact />
            </Box>
        </MainLayout>
    );
};

export default Home;
