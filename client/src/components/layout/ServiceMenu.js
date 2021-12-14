import React from 'react';
import { Link } from 'react-router-dom';

import heatingIcon from '../../assets/images/heating-icon.png';
import coolingSyst from '../../assets/images/cooling-icon.png';
import waterIcon from '../../assets/images/water-icon.png';
import indoorAir from '../../assets/images/NEW-indoor-air-quality.png';

const ServiceMenu = () => {
    return (
        <div className='grid menu-services'>
            <div className='column column-3 column-tablet-3 column-mobile-3 menu-services-item'>
                <Link to='/services/heating-systems'>
                    <div className='item-icon'>
                        <img src={heatingIcon} alt='Heating Services' />
                    </div>
                    <div className='item-name'>
                        Heating
                        <br />
                        Systems
                    </div>
                </Link>
            </div>
            <div className='column column-3 column-tablet-3 column-mobile-3 menu-services-item'>
                <Link to='/services/cooling-systems'>
                    <div className='item-icon'>
                        <img src={coolingSyst} alt='Cooling Systems Services' />
                    </div>
                    <div className='item-name'>
                        Cooling
                        <br />
                        Systems
                    </div>
                </Link>
            </div>
            <div className='column column-3 column-tablet-3 column-mobile-3 menu-services-item'>
                <Link to='/services/water-systems'>
                    <div className='item-icon'>
                        <img
                            src={waterIcon}
                            alt='Water Heating Systems Services'
                        />
                    </div>
                    <div className='item-name'>
                        Hot Water
                        <br />
                        Systems
                    </div>
                </Link>
            </div>
            <div className='column column-3 column-tablet-3 column-mobile-3 menu-services-item'>
                <Link to='/services/air-systems'>
                    <div className='item-icon'>
                        <img src={indoorAir} alt='Indoor Quality Services' />
                    </div>
                    <div className='item-name'>
                        Indoor Air
                        <br />
                        Quality
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceMenu;
