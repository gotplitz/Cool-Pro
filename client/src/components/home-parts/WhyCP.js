import React from 'react';

import freeEst from '../../assets/images/free-estimates.svg';
import resCom from '../../assets/images/residential-and-commercial.svg';
import priceMatch from '../../assets/images/price-match-guarantee.svg';
import financeIcon from '../../assets/images/60-months-financing.svg';

const WhyCP = () => {
    return (
        <section className='section-size-2 lighter-bg'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-12 why-cool-pro'>
                        <p>Why Cool Pro Mechanical?</p>
                        <h3>THE ADVANTAGES OF WORKING WITH EXPERTS</h3>

                        <div className='space-3'></div>
                        <div className='box white'>
                            <div className='grid columns-4 columns-tablet-2 columns-mobile-2'>
                                <div className='column why-boxes'>
                                    <div className='why-item'>
                                        <img
                                            src={freeEst}
                                            alt='Free Estimates'
                                        />
                                        <h5>Free Estimates</h5>
                                        {/* <p>
                      Let us come to your home or office and we will give you
                      the best price.
                    </p> */}
                                    </div>
                                </div>
                                <div className='column why-boxes'>
                                    <div className='why-item'>
                                        <img
                                            src={resCom}
                                            alt='Residential & Commercial'
                                        />
                                        <h5>Residential &amp; Commercial</h5>
                                        {/* <p>We service both residential and commercial business.</p> */}
                                    </div>
                                </div>
                                <div className='column why-boxes'>
                                    <div className='why-item'>
                                        <img
                                            src={priceMatch}
                                            alt='Price Match Guarantee'
                                        />
                                        <h5>Price Match Guarantee</h5>
                                        {/* <p>
                      We will offer you the best price we can, and if you happen
                      to find a better one, we will match it.
                    </p> */}
                                    </div>
                                </div>
                                <div className='column why-boxes'>
                                    <div className='why-item'>
                                        <img
                                            src={financeIcon}
                                            alt='60 Months Financing'
                                        />
                                        <h5>0% Interest Financing</h5>
                                        {/* <p>
                      Ask us about our financing options. 0% down, plans for all
                      services.
                    </p> */}
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

export default WhyCP;
