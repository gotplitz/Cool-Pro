import React from 'react';

import coolPro from '../../assets/images/cool-pro-mechanical-logo.svg';
import creditCards from '../../assets/images/credit-cards-logos.png';
import homeAd01 from '../../assets/images/home-advisor-5-years.png';
import homeAd02 from '../../assets/images/soap.png';
import homeAd03 from '../../assets/images/elite.png';

const Footer = () => {
    return (
        <footer className='footer section-size-1 border-top'>
            <div className='grid columns-1'>
                <div className='column column-12 footer-cool-pro'>
                    <img
                        src={coolPro}
                        alt='Cool Pro Mechanical Huntington Station'
                    />
                    <br />
                    <small style={{ textTransform: 'uppercase' }}>
                        Our Location
                    </small>
                    <h6>261 Broadway, Huntington Station, NY 11746</h6>
                    <br />
                    <a
                        href='https://www.bbb.org/us/ny/huntington-station/profile/heating-and-air-conditioning/cool-pro-mechanical-llc-0121-149883/#sealclick'
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{ borderBottom: 'none' }}
                    >
                        <img
                            src='https://seal-newyork.bbb.org/seals/blue-seal-293-61-bbb-149883.png'
                            style={{ border: 0, width: 250 }}
                            alt='Cool Pro Mechanical LLC BBB Business Review'
                        />
                    </a>
                </div>
            </div>
            <div className='grid columns-3 footer-middle-level'>
                <div className='column footer-left-column'>
                    <small style={{ textTransform: 'uppercase' }}>
                        We accept all major Credit Cards
                    </small>
                    <img src={creditCards} alt='Credit Cards logos' />
                </div>
                <div className='column footer-center-column'>
                    <img src={homeAd01} alt='5 years' />
                    <img src={homeAd02} alt='Home Advisors Member' />
                    <img src={homeAd03} alt='Elite service provider' />
                </div>
                <div className='column footer-right-column'>
                    <small style={{ textTransform: 'uppercase' }}>
                        Follow us
                    </small>
                    <div className='social-networks-bottom'>
                        <a
                            href='https://www.facebook.com/coolproli'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-facebook-f'></i>
                        </a>
                        {/* <a href='/#' target='_blank' rel='noopener noreferrer'>
                            <i className='fab fa-instagram'></i>
                        </a> */}
                        <a
                            href='https://www.google.com/search?q=cool+pro+mechanical'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fab fa-google'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='grid columns-1 legal font-size-1'>
                <span>Designed and Coded by</span>
                <span>
                    <a
                        href='https://ferociousmedia.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Ferocious Media
                    </a>
                </span>
                <div>Cool Pro Mechanical &copy; 2021 | All Rights Reserved</div>
            </div>
        </footer>
    );
};

export default Footer;
