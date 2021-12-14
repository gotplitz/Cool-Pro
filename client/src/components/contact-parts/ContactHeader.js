import React from 'react';

import cpMap from '../../assets/images/contact-cool-pro-mechanical.jpg';

const ContactHeader = () => {
    return (
        <section className='section-size-6 lighter-bg background-zoom'>
            <img
                className='opacity-4 background'
                alt='Cool Pro Map Location'
                src={cpMap}
            />
            <div className='container'>
                <div className='grid'>
                    <div className='column-8 centered text-center'>
                        <h3>Would you like to know more</h3>
                        <h1 className='animated-text'>
                            Contact Cool Pro Mechanical Today
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHeader;
