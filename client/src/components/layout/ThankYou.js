import { Link } from 'react-router-dom';
import React from 'react';
import ScrollToTop from '../routing/ScrollToTop';

const ThankYou = () => {
    return (
        <div className='content'>
            <ScrollToTop />
            <section className='section-size-2'>
                <div className='container'>
                    <h1>Thank You</h1>
                    <h2>We Have Received Your Request</h2>
                    <h4 style={{ marginBottom: 50 }}>
                        {' '}
                        A Cool Pro Mechanical representative will contact you
                        shortly. If you need immediate assistance please call us
                        at <a href='tel:6314054161'>(631) 405-4161</a>
                    </h4>
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

export default ThankYou;
