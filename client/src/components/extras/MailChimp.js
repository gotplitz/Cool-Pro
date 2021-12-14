import React from 'react';
import { Link } from 'react-router-dom';

const MailChimp = () => {
    return (
        <section className='section-size-2 yellow-bg'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-12'>
                        <div className='cta-wrap'>
                            <h5>
                                Stay connected with{' '}
                                <span>Cool Pro Mechanical!</span>
                            </h5>
                            <p>
                                Create your account today and have access to
                                customer resources and an easy and faster way to
                                get in touch!
                            </p>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='column-12'>
                        <div className='cta-wrap'>
                            <Link to='/register' className='red-button'>
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MailChimp;
