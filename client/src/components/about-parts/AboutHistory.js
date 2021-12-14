import React from 'react';

import LogoTruch from '../../assets/images/cool-pro-truck-with-logo.jpg';

const AboutHistory = () => {
    return (
        <section
            className='section-size-3'
            style={{
                backgroundImage: `url(${LogoTruch})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='container'>
                <div className='grid'>
                    <div className='column-9 centered text-center'>
                        <h2>Who we are?</h2>
                        <div className='space-2'></div>
                        <p>
                            Cool Pro Mechanical has been leading the way for
                            residential and commercial HVAC services since 1977.
                            We are a family owned and operated business and
                            pride ourselves on quality work, customer
                            satisfaction, and follow through. The owner, Eric,
                            always has the customer’s best interest in mind. He
                            guides them through the most cost-effective solution
                            for each unique situation. We are staffed by the
                            best technicians and customer support staff in the
                            business.
                        </p>
                        <p>
                            Our goal at Cool Pro Mechanical is to ensure the
                            customer feels comfortable and educated to make the
                            right decision for themselves and their family.
                            Stellar service with a personal touch!
                        </p>
                    </div>
                </div>
            </div>
            <div className='services-background-overlay'></div>
        </section>
    );
};

export default AboutHistory;
