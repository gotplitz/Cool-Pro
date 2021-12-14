import React from 'react';

import cmLogo from '../../../assets/images/comfortmaker-logo.png';

const ComfortHeader = () => {
    return (
        <section>
            <div className='container'>
                <div className='space-2'></div>
                <div className='grid'>
                    <div className='column-12 why-cool-pro'>
                        <h4>Important Links and Resources</h4>
                        <h1 style={{ fontWeight: 700 }}>
                            Comfortmaker - Air Conditioning & Heating
                        </h1>
                    </div>
                    <div className='column-12 manuals-logo'>
                        <a
                            href='https://www.comfortmaker.com/en/us/'
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ borderBottom: 'none' }}
                        >
                            <img src={cmLogo} alt='Comfortmaker Logo' />
                        </a>
                    </div>
                </div>
                <div className='space-2'></div>
                <div className='grid'>
                    <div className='column-8 offset-2'>
                        <p style={{ textAlign: 'center' }}>
                            Comfortmaker is a brand with 100 years of
                            enginerring and quality manufacturing experience.
                            Below you will find links to their products and the
                            resources that are available to owners.
                        </p>
                    </div>
                </div>
                <div className='space-2'></div>
            </div>
        </section>
    );
};

export default ComfortHeader;
