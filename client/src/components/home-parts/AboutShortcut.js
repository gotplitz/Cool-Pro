import React from 'react';
import { Link } from 'react-router-dom';

import CoolVan from '../../assets/images/cool-pro-van.jpg';

const AboutShortcut = () => {
    return (
        <section className='section-size-2'>
            <div className='container'>
                <div className='grid home-about-section'>
                    <div className='column-4'>
                        <div className='about-cta-img'>
                            <img src={CoolVan} alt='Cool Pro van' />
                        </div>
                    </div>
                    <div className='column-8 about-cta-texting'>
                        <h6>LICENSED &amp; INSURED</h6>
                        <h3>
                            <span style={{ color: '#BA0404' }}>
                                FAMILY OWNED{' '}
                            </span>
                            AND OPERATED FOR +40 YEARS
                        </h3>
                        <Link
                            className='about-cta-button white-button'
                            to='/about-cool-pro'
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutShortcut;
