import React from 'react';

import prodOne from '../../../assets/images/softsound-deluxe-16-two-stage-heat-pump-CCH6.png';
import prodTwo from '../../../assets/images/fo-17-20c.png';
import prodThree from '../../../assets/images/img-split-wall-rls3-series.png';
// import prodFour from '../../../assets/images/softsound-deluxe-19-air-conditioner-with-smartsense-CVA9.png';
import fuJi from '../../../assets/images/fujitsu-red-jpg-rgb_tcm127-1146712.jpg';
import bossCh from '../../../assets/images/Bosch-Logo.jpg';
import rheEm from '../../../assets/images/rheem_logo.png';
import confMa from '../../../assets/images/comfortmaker-logo.png';
import acImg from '../../../assets/images/bosch-air-conditioner.png';

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
                            <div className='grid columns-4 vcenter gallery'>
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
                                            <div className='title'>CCA7</div>
                                            <div className='sub'>
                                                Comfortmaker
                                            </div>
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
                                            <div className='title'>RA16</div>
                                            <div className='sub'>Rheem</div>
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
                                            <div className='title'>9RLS3Y</div>
                                            <div className='sub'>Fujitsu</div>
                                        </div>
                                    </a>
                                </div>
                                <div className='grid-item column undefined'>
                                    <a
                                        className='thumb space-1 lightbox'
                                        href={acImg}
                                    >
                                        <img
                                            alt='Comfortmaker unit'
                                            src={acImg}
                                        />
                                        <div className='labels'></div>
                                        <div className='caption'>
                                            <div className='title'>Bosch</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid container-md'>
                    <div className='column-12 logos-section'>
                        <h2>Our Brands - Click to Learn More</h2>

                        <div className='space-3'></div>
                        <div className='box white'>
                            <div className='suppliers grid columns-4 columns-tablet-3 columns-mobile-2'>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.fujitsu-general.com/us/products/central-air-conditioners/air-conditioners/index.html'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img src={fuJi} alt='Fujitsu logo' />
                                    </a>
                                </div>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.bosch-thermotechnology.us/us/en/residential/home/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img src={bossCh} alt='Bosch logo' />
                                    </a>
                                </div>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.rheem.com/products/residential/heating-and-cooling/air_conditioners/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img src={rheEm} alt='Rheem logo' />
                                    </a>
                                </div>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.comfortmaker.com/en/us/products/air-conditioners/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img
                                            src={confMa}
                                            alt='Comfort Maker logo'
                                        />
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

export default HeatingProducts;
