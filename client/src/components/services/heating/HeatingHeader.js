import React from 'react';
import HeatingIcon from '../../extras/HeatingIcon';

import warmHome from '../../../assets/images/family-at-home-at-christmas-time.jpg';

const HeatingHeader = () => {
    return (
        <section className='section-size-2'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-5 header-separation'>
                        <HeatingIcon />
                        <h4>Residential &amp; Commercial</h4>
                        <h1 className='animated-text'>Heating Systems</h1>
                        <p>
                            We have the best products and services to bring
                            heating to your house, so you can enjoy the winter
                            in the warmth of your home.
                        </p>
                    </div>
                    <div className='column-6 offset-1'>
                        <div className='services-header-img'>
                            <img
                                src={warmHome}
                                alt='Family time at warm home'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatingHeader;
