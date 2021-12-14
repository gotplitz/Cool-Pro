import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import textIcon from '../../assets/images/cool-pro-text-message-icon.png';
import phoneIcon from '../../assets/images/cool-pro-text-message-icon.png';

const TopBar = ({ auth: { isAuthenticated, loading, user }, logout }) => {
    const authLinks = (
        <Fragment>
            <div className='column column-5 column-tablet-5 column-mobile-5 top-left-button-set'>
                <Link to='/dashboard' className='white-button'>
                    <i className='fas fa-ellipsis-h'></i>
                    <span>Go to Dashboard</span>
                </Link>
                <a onClick={logout} href='/#' className='red-button'>
                    <i className='fas fa-sign-out-alt'></i>
                    <span>Log Out</span>
                </a>
                {user && user.usertype === 'worker' ? (
                    <Link to='/quotes' className='red-button'>
                        <i className='fas fa-dollar-sign'></i>
                        <span>Quotes</span>
                    </Link>
                ) : (
                    <Link to='/contact-cool-pro' className='red-button'>
                        <i className='fas fa-dollar-sign'></i>
                        <span>Get A Quote</span>
                    </Link>
                )}
            </div>
            <div className='column column-1 column-tablet-1 column-mobile-4 top-middle-set'>
                <div className='welcome-message-top'>
                    Hi, {user && user.name}
                </div>
            </div>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <div className='column column-6 column-tablet-6 column-mobile-8 top-left-button-set'>
                <Link to='/register' className='white-button'>
                    <i className='fas fa-user-plus'></i>
                    <span>Register</span>
                </Link>
                <Link to='/login' className='red-button'>
                    <i className='fas fa-user-check'></i>
                    <span>Sign In</span>
                </Link>
                <Link from='/quotes' to='/contact-cool-pro' className='red-button'>
                    <i className='fas fa-dollar-sign'></i>
                    <span>Get A Quote</span>
                </Link>
            </div>
        </Fragment>
    );

    return (
        <div className='grid top-bar'>
            {!loading && (
                <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
            )}
            <div className='column column-1 column-tablet-1 column-mobile-3 top-right-set'>
                <div className='social-networks-top'>
                    <a
                        href='https://www.facebook.com/coolproli'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a
                        href='https://www.google.com/search?q=cool+pro+mechanical'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fab fa-google'></i>
                    </a>
                </div>
            </div>
            <div className='column column-5 columun-tablet-5 column-mobile-12 top-last-set'>
                <div className='phones-blocks'>
                    <div className='phones-icons'>
                        <img src={textIcon} alt='Text Messages Icon' />
                    </div>
                    <div className='phones-blocks-texts'>
                        <a
                            href='sms:6314054161'
                            style={{ borderBottom: 'none' }}
                        >
                            <p>SEND START VIA SMS</p>
                            <h6>(631) 405-4161</h6>
                        </a>
                    </div>
                </div>
                <div className='phones-blocks'>
                    <div className='phones-icons'>
                        <img src={phoneIcon} alt='Text Messages Icon' />
                    </div>
                    <div className='phones-blocks-texts'>
                        <a
                            href='tel:8446312665'
                            style={{ borderBottom: 'none' }}
                        >
                            <p>CONTACT US 24/7</p>
                            <h5>844-631-COOL</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopBar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logout })(TopBar);
