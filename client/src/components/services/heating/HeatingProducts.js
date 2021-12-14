import React from 'react';

import prodOne from '../../../assets/images/rheem-furnace.png';
import prodTwo from '../../../assets/images/bosch-inverter.png';
import prodThree from '../../../assets/images/fujitsu-ductless-split.png';

import fuJi from '../../../assets/images/fujitsu-red-jpg-rgb_tcm127-1146712.jpg';
import bossCh from '../../../assets/images/Bosch-Logo.jpg';
import rheEm from '../../../assets/images/rheem_logo.png';

const HeatingProducts = () => {
    return (
        <section className='section-size-2 lighter-bg'>
            <div className='container' style={{ maxWidth: '90%' }}>
                <div className='grid'>
                    <div className='column-12'>
                        <h2>Featured Products</h2>
                        <p>
                            Below some of the models that we will be installing
                            in your house
                        </p>
                        <div className='space-3'></div>
                        <div className='box white'>
                            <div className='grid columns-3 vcenter gallery'>
                                <div className='grid-item column undefined'>
                                    <a
                                        className='thumb space-1 lightbox'
                                        href={prodOne}
                                    >
                                        <img
                                            alt='Comfortmaker heat pump'
                                            src={prodOne}
                                        />
                                        <div className='labels'></div>
                                        <div className='caption'>
                                            <div className='title'>
                                                Furnaces
                                            </div>
                                            <div className='sub'>Rheem</div>
                                        </div>
                                    </a>
                                </div>
                                <div className='grid-item column undefined'>
                                    <a
                                        className='thumb space-1 lightbox'
                                        href={prodTwo}
                                    >
                                        <img
                                            alt='Fujitsu heat pump'
                                            src={prodTwo}
                                        />
                                        <div className='labels'></div>
                                        <div className='caption'>
                                            <div className='title'>
                                                Heat Pump Sytems
                                            </div>
                                            <div className='sub'>Bosch</div>
                                        </div>
                                    </a>
                                </div>
                                <div className='grid-item column undefined'>
                                    <a
                                        className='thumb space-1 lightbox'
                                        href={prodThree}
                                    >
                                        <img
                                            alt='Fujitsu furnance'
                                            src={prodThree}
                                        />
                                        <div className='labels'></div>
                                        <div className='caption'>
                                            <div className='title'>
                                                Ductless Mini Split Systems
                                            </div>
                                            <div className='sub'>Fujitsu</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='grid'>
                                <div className='column-12 logos-section'>
                                    <h2>Our Brands - Click to Learn More</h2>

                                    <div className='space-3'></div>
                                    <div className='box white'>
                                        <div className='suppliers grid columns-3 columns-tablet-3 columns-mobile-2'>
                                            <div className='suppliers-item column'>
                                                <a
                                                    href='https://www.fujitsugeneral.com/us/residential/technology/xlth-low-temp-heating.html'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <img
                                                        src={fuJi}
                                                        alt='Fujitsu logo'
                                                    />
                                                </a>
                                            </div>
                                            <div className='suppliers-item column'>
                                                <a
                                                    href='https://www.bosch-thermotechnology.us/us/en/ocs/residential/inverter-ducted-split-family-ids--18527266-p/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <img
                                                        src={bossCh}
                                                        alt='Bosch logo'
                                                    />
                                                </a>
                                            </div>
                                            <div className='suppliers-item column'>
                                                <a
                                                    href='https://www.rheem.com/products/residential/heating-and-cooling/furnaces/'
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <img
                                                        src={rheEm}
                                                        alt='Rheem logo'
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatingProducts;
