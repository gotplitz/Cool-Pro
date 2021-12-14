import { Link } from 'react-router-dom';
import React from 'react';
import ScrollToTop from '../routing/ScrollToTop';

const NotFound = () => {
    return (
        <div className='content'>
            <ScrollToTop />
            <section className='section-size-2'>
                <div className='container'>
                    <h1>
                        <i className='fas fa-exclamation-triangle'></i> 404 :-(
                    </h1>
                    <p style={{ marginBottom: 50 }}>
                        {' '}
                        The page you are trying to access doesn't exist.
                    </p>
                    <div>
                        <Link
                            className='register-sign-in about-cta-button'
                            to='/'
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFound;
