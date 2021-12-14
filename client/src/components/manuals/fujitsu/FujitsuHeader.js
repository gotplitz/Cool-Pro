import React from 'react';

import fujiLogo from '../../../assets/images/fujitsu-red-jpg-rgb_tcm127-1146712.jpg';

const FujitsuHeader = () => {
    return (
        <section>
            <div className='container'>
                <div className='space-2'></div>
                <div className='grid'>
                    <div className='column-12 why-cool-pro'>
                        <h4>Important Links and Resources</h4>
                        <h1 style={{ fontWeight: 700 }}>Fujistu General</h1>
                    </div>
                    <div className='column-12 manuals-logo'>
                        <a
                            href='https://www.fujitsugeneral.com/us/residential/index.html'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ borderBottom: 'none' }}
                        >
                            <img src={fujiLogo} alt='Fujitsu Logo' />
                        </a>
                    </div>
                </div>
                <div className='space-2'></div>
                <div className='grid'>
                    <div className='column-8 offset-2'>
                        <p style={{ textAlign: 'center' }}>
                            A comfortable home is a happy home. That's why
                            Fujitsu is one of the favorite brands in heating and
                            cooling systems. Check out useful links about their
                            products.
                        </p>
                    </div>
                </div>
                <div className='space-2'></div>
            </div>
        </section>
    );
};

export default FujitsuHeader;
