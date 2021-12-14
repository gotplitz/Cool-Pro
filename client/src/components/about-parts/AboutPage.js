import React from 'react';

// About page parts
import AboutHeader from './AboutHeader';
import AboutHistory from './AboutHistory';
import AboutTeam from './AboutTeam';
import ScrollToTop from '../routing/ScrollToTop';

const AboutPage = () => {
    return (
        <div className='content'>
            <ScrollToTop />
            <AboutHeader />
            <AboutHistory />
            <AboutTeam />
        </div>
    );
};

export default AboutPage;
