import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '../../assets/MainLogo';
import honeyPDF from '../../assets/images/Honeywell.pdf';


const Navbar = () => {
    const onClick = () => {
        const findClass = document.querySelector('.wrapper');
        const findHove = document.querySelectorAll('.has-dropdown');

        if (findClass && findClass.classList.contains('dropdown-hovered')) {
            findClass.classList.remove('dropdown-hovered');
        }

        findHove.forEach((el) => {
            if (el && el.classList.contains('hover')) {
                el.classList.remove('hover');
            }
        });

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <Fragment>
            <header className='header'>
                <Link onClick={onClick} className='brand' to='/'>
                    <MainLogo className='default' />
                </Link>

                <ul className='menu main'>
                    <li className='menu-item'>
                        <Link onClick={onClick} className='menu-link' to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link
                            onClick={onClick}
                            className='menu-link'
                            to='/about-cool-pro'
                        >
                            About
                        </Link>
                    </li>
                    <li className='menu-item has-dropdown'>
                        <Link
                            onClick={onClick}
                            className='menu-link'
                            to='/cool-pro-mechanical-services'
                        >
                            Services
                        </Link>

                        <ul className='dropdown-nav'>
                            <li className='menu-item'>
                                <Link
                                    onClick={onClick}
                                    className='menu-link'
                                    to='/services/heating-systems'
                                >
                                    Heating Systems
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link
                                    onClick={onClick}
                                    className='menu-link'
                                    to='/services/cooling-systems'
                                >
                                    Cooling Systems
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link
                                    onClick={onClick}
                                    className='menu-link'
                                    to='/services/water-systems'
                                >
                                    Hot Water Systems
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link
                                    onClick={onClick}
                                    className='menu-link'
                                    to='/services/air-systems'
                                >
                                    Indoor Air Quality
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item has-dropdown'>
                        <Link onClick={onClick} className='menu-link' to='#!'>
                            Resources
                        </Link>

                        <ul className='dropdown-nav'>
                            <li className='menu-item'>
                                <a
                                    className='menu-link'
                                    href='https://www.aprilaire.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    April Aire
                                </a>
                            </li>
                            <li className='menu-item'>
                                <a
                                    className='menu-link'
                                    href='https://www.aprilaire.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Bosch
                                </a>
                            </li>
                            <li className='menu-item'>
                                <Link
                                    onClick={onClick}
                                    className='menu-link'
                                    to='/comfortmaker-air-conditioning-and-heating'
                                >
                                    Comfortmaker
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link
                                    onClick={onClick}
                                    className='menu-link'
                                    to='/fujitsu-general'
                                >
                                    Fujitsu
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <a
                                    className='menu-link'
                                    href= {honeyPDF}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Honeywell
                                </a>
                            </li>
                            <li className='menu-item'>
                                <a
                                    className='menu-link'
                                    href='https://www.rgf.com/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    RGF Environmental
                                </a>
                            </li>
                            <li className='menu-item'>
                                <a
                                    className='menu-link'
                                    href='https://www.rheem.com/?utm_source=wca&utm_medium=email&utm_campaign=011920_Rheem%20Dispatch%20Webinar_AC_US_RH_PP%20%283%29&spMailingID=16862794&spUserID=MjcwMjk0OTQ4NDg3S0&spJobID=1801397472&spReportId=MTgwMTM5NzQ3MgS2'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Rheem
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='menu-item'>
                        <a
                            className='menu-link'
                            href='https://licoolpro.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Promos &amp; Offers
                        </a>
                    </li>
                    <li className='menu-item'>
                        <Link
                            onClick={onClick}
                            className='menu-link'
                            to='/reviews'
                        >
                            Customer Reviews
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link
                            onClick={onClick}
                            className='menu-link'
                            to='/contact-cool-pro'
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className='menu-item'>
                        <Link
                            onClick={onClick}
                            className='menu-link'
                            to='/blog-and-tips'
                        >
                            Blog
                        </Link>
                    </li>
                </ul>
            </header>

            <div className='burger'>
                <hr />
                <hr />
                <hr />
            </div>
        </Fragment>
    );
};

export default Navbar;
