import React from 'react';

import serviceTop from '../../assets/images/friendly-family-with-a-dog.jpg';

const ServicesHeader = () => {
    return (
        <section className='section-size-6 lighter-bg background-zoom'>
            <img
                className='opacity-4 background'
                alt='Family with a dog'
                src={serviceTop}
            />
            <div className='container'>
                <div className='grid'>
                    <div className='column-8 centered text-center'>
                        <h1 className='animated-text'>Our Services</h1>
                        <h3>
                            We service and install all brands of HVAC and
                            specialize in Indoor Air Quality solutions for
                            commercial and residential locations.
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHeader;
