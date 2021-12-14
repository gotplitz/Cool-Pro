import React from 'react';
import { Helmet } from 'react-helmet';

// Components parts
import Slider from '../home-parts/Slider';
import ServiceMenu from './ServiceMenu';
import StellarBrands from '../home-parts/StellarBrands';
import AboutShortcut from '../home-parts/AboutShortcut';
import PromoHome from '../home-parts/PromoHome';
import WhyCP from '../home-parts/WhyCP';
import HpTestimonials from '../extras/HpTestimonials';
import LastPosts from '../home-parts/LastPosts';
import MainHero from '../home-parts/MainHero';

const Landing = () => {
    return (
        <div className='content'>
            <Helmet>
                <title>Welcome</title>
                <meta
                    name='description'
                    content='ou deserve the best, therefore, we work with the best brands, combining them with a team of professionals in cooling, heating and hot water heaters, for residential and commercial installations.'
                />
            </Helmet>
            <MainHero />
            <section
                className='section-size-2 menu-services-desktop'
                style={{ paddingTop: 0 }}
            >
                <ServiceMenu />
            </section>
            <Slider />
            <StellarBrands />
            <AboutShortcut />
            <PromoHome />
            <WhyCP />
            <LastPosts />
            <HpTestimonials />
        </div>
    );
};

export default Landing;
