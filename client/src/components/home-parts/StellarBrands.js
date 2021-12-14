import React from 'react';
import { Link } from 'react-router-dom';

import fuJi from '../../assets/images/fujitsu-red-jpg-rgb_tcm127-1146712.jpg';
import confMa from '../../assets/images/comfortmaker-logo.png';
import bossCh from '../../assets/images/Bosch-Logo.jpg';
import rheEm from '../../assets/images/rheem_logo.png';
import rgfLogo from '../../assets/images/rgflogo.png';
import aprilAire from '../../assets/images/aprilaire-logo-partners.png';

const StellarBrands = () => {
    return (
        <section className='section-size-2 lighter-bg'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-12 logos-section'>
                        <h2>Stellar Service with a Personal Touch</h2>
                        <p>
                            You deserve the best, therefore, we work with the
                            best brands, combining them with a team of
                            professionals in cooling, heating and hot water
                            heaters, for residential and commercial
                            installations.
                        </p>

                        <div className='space-3'></div>
                        <div className='box white'>
                            <div className='suppliers grid columns-6 columns-tablet-3 columns-mobile-2'>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.fujitsugeneral.com'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img src={fuJi} alt='Fujitsu logo' />
                                    </a>
                                </div>
                                <div className='suppliers-item column'>
                                    <Link to='/comfortmaker-air-conditioning-and-heating'>
                                        <img
                                            src={confMa}
                                            alt='Comfortmaker logo'
                                        />
                                    </Link>
                                </div>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.bosch-thermotechnology.us/us/en/ocs/residential/inverter-ducted-split-system-ids-20--1100954-p/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img src={bossCh} alt='Bosch logo' />
                                    </a>
                                </div>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.rheem.com/?utm_source=wca&utm_medium=email&utm_campaign=011920_Rheem%20Dispatch%20Webinar_AC_US_RH_PP%20%283%29&spMailingID=16862794&spUserID=MjcwMjk0OTQ4NDg3S0&spJobID=1801397472&spReportId=MTgwMTM5NzQ3MgS2'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img src={rheEm} alt='Rheem logo' />
                                    </a>
                                </div>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.rgf.com/products/air/halo-led-whole-home-in-duct-air-purifier/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img
                                            src={rgfLogo}
                                            alt='RGF Enviromental Group'
                                        />
                                    </a>
                                </div>
                                <div className='suppliers-item column'>
                                    <a
                                        href='https://www.aprilaire.com/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        <img
                                            src={aprilAire}
                                            alt='April Aire logo'
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

export default StellarBrands;
