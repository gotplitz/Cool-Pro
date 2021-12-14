import React from 'react';

import tanklessWater from '../../../assets/images/rheem-performance-high-demand.png';
import rheEm from '../../../assets/images/rheem_logo.png';

const features = [
    {
        id: 1,
        subt: 'Save Money',
        caption:
            'All our products are high efficiency gauranteed, saving you up to $1,100 a year.',
    },
    {
        id: 2,
        subt: 'Less Space',
        caption:
            'Products designed to optimize the space of our customers home and office',
    },
    {
        id: 3,
        subt: 'Faster Installation',
        caption:
            'Enjoy hot water faster than you think, with a pro installation service.',
    },
    {
        id: 4,
        subt: 'Save Water',
        caption: `Save thousands of gallons per year with a built in recirculation pump.`,
    },
    {
        id: 5,
        subt: 'Innovation',
        caption:
            'Our systems are following the new trends of the industry with exclusive features.',
    },
    {
        id: 6,
        subt: 'EcoNet',
        caption: `The Smart Monitoring System offers new level of protection and comfort.`,
    },
    {
        id: 7,
        subt: 'Safety',
        caption:
            'Exclusive Overheat Film Wrap shuts down the unit if the heat exchanger overheats.',
    },
    {
        id: 8,
        subt: 'A Legacy of Experience',
        caption:
            'Our experience and the brands we work with are the guarantee you can trust.',
    },
];

const WaterProducts = () => {
    return (
        <section className='section-size-2 lighter-bg'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-12'>
                        <h2>Water Heater Features</h2>
                        <p>
                            We partnered with the best brands to offer legendary
                            services and products for your home and commercial
                            building. See below for the features of our
                            products, and why to choose us for your next
                            project.
                        </p>
                        <div className='space-3'></div>
                        <div className='box white'>
                            <div className='grid columns-2'>
                                <div className='grid-item column undefined'>
                                    <div className='grid columns-2'>
                                        {features.map((feature, id) => (
                                            <div
                                                key={id}
                                                className='grid-item column'
                                            >
                                                <div className='fetaured-wrap'>
                                                    <div className='featured-icon'>
                                                        <i className='fas fa-check-circle'></i>
                                                    </div>
                                                    <div className='featured-txt'>
                                                        <h3>{feature.subt}</h3>
                                                        <p>{feature.caption}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className='grid-item column water-heater-img'>
                                    <a
                                        href='https://www.rheem.com/products/residential/water-heating/tank/residential_gas/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <img
                                            alt='Rheem Tankless Water Heater'
                                            src={tanklessWater}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='grid'>
                            <div className='column column-12 logos-section'>
                                <h2>Our Brands - Click to Learn More</h2>

                                <div className='space-3'></div>
                                <div className='box white'>
                                    <a
                                        href='https://www.rheem.com/products/residential/water-heating/tank/residential_gas/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img src={rheEm} alt='Rheem logo' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterProducts;
