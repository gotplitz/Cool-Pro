import React from 'react';

import coolIcon from '../../assets/images/cooling-icon.png';
import coolBack from '../../assets/images/cooler-fan.jpg';
import heatingIcon from '../../assets/images/heating-icon.png';
import heatingBack from '../../assets/images/blur-close-up-coffee-coffee-cup.jpg';
import waterIcon from '../../assets/images/water-icon.png';
import waterBack from '../../assets/images/bathing-woman-relaxing-in-bath-smiling-relaxing.jpg';
import indoorAir from '../../assets/images/indoor-air-icon.png';
import indoorBack from '../../assets/images/smiling-senior-man-in-glasses-relaxing-on-sofa.jpg';

const ServiceMasonry = () => {
    return (
        <section className='section-size-2'>
            <div className='container'>
                <div className='grid masonry columns-2'>
                    <div className='grid-sizer'></div>
                    <div className='grid-item column branding'>
                        <a
                            className='thumb space-2 animated'
                            href='/services/cooling-systems'
                        >
                            <img alt='Nice black fan' src={coolBack} />
                            <div className='labels'>
                                <img
                                    src={coolIcon}
                                    alt='Cooling System Icon'
                                    className='icons-masonry'
                                />
                            </div>
                            <div className='caption'>
                                <div className='title'>Cooling Systems</div>
                                <div className='sub'>
                                    Home and Office Air Conditioner
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <div className="grid-item column branding">
            <a
              className="thumb space-2 animated"
              href="/services/cooling-systems"
            >
              <img alt="Air conditioner maintenance" src={coolBg} />
              <div className="labels">Maintenance</div>
              <div className="caption">
                <div className="title">Replacement & Repairs</div>
                <div className="sub">Upgrade your systems</div>
              </div>
            </a>
          </div> */}
                    <div className='grid-item column design'>
                        <a
                            className='thumb space-2 animated'
                            href='/services/heating-systems'
                        >
                            <img
                                alt='Modifying temperature'
                                src={heatingBack}
                            />
                            <div className='labels'>
                                <img
                                    src={heatingIcon}
                                    alt='Heating Icon'
                                    className='icons-masonry'
                                />
                            </div>
                            <div className='caption'>
                                <div className='title'>Heating Systems</div>
                                <div className='sub'>
                                    Home &amp; Office Heating
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='grid-item column design'>
                        <a
                            className='thumb space-2 animated'
                            href='/services/water-systems'
                        >
                            <img alt='Woman in a tub' src={waterBack} />
                            <div className='labels'>
                                <img
                                    src={waterIcon}
                                    alt='Water Icon'
                                    className='icons-masonry'
                                />
                            </div>
                            <div className='caption'>
                                <div className='title'>
                                    Water Heating System
                                </div>
                                <div className='sub'>
                                    Hot water tank replacements for your home
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='grid-item column design'>
                        <a
                            className='thumb space-2 animated'
                            href='/services/air-systems'
                        >
                            <img alt='Main relaxing' src={indoorBack} />
                            <div className='labels'>
                                <img
                                    src={indoorAir}
                                    alt='Indor air Icon'
                                    className='icons-masonry'
                                />
                            </div>
                            <div className='caption'>
                                <div className='title'>Indoor Air Quality</div>
                                <div className='sub'>
                                    For your home and office
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceMasonry;
