import React from 'react';

import promoImg from '../../assets/images/RGF-UV.png';

const PromoHome = () => {
    return (
        <section className='section-size-2'>
            <div className='container'>
                <div className='grid home-promo-month'>
                    <div className='column column-9 column-mobile-8 promo-description'>
                        <h3>
                            Air purification systems that kill bacteria,
                            viruses, mold, and mildew
                        </h3>
                        <a className='promo-home-btn white-button' href='/contact-cool-pro'>
                            <span>Learn More</span>
                        </a>
                        <span className='promo-legal'>
                            Call for details. Some restrictions apply. Offer
                            subject to change without notice.
                        </span>
                    </div>

                    <div className='column column-3 column-mobile-4 promo-img-block'>
                        <div className='promo-img'>
                            <img src={promoImg} alt='Air purifier device' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='grid home-promo-month'>
                    <div className='column column-12 column-mobile-12 promo-description'>
                        <h3>Interest-free financing Available</h3>
                        <a className='promo-home-btn white-button' href='/contact-cool-pro'>
                            <span>Learn More</span>
                        </a>
                        <span className='promo-legal'>
                            Call for details. Some restrictions apply. Offer
                            subject to change without notice.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoHome;
