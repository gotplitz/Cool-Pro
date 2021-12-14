import React from 'react';

import acFan from '../../assets/images/ventilator-about-us.jpg';

const AboutHeader = () => {
    return (
        <section className='section-size-6 lighter-bg background-zoom'>
            <img
                className='opacity-4 background'
                alt='Big air conditioner fan'
                src={acFan}
            />
            <div className='container'>
                <div className='grid'>
                    <div className='column-8 centered text-center'>
                        <h3>Servicing Long Island for over 40 years</h3>
                        <h1 className='animated-text'>
                            About Cool Pro Mechanical
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeader;
