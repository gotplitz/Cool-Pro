import React from 'react';

import airQual from '../../../assets/images/house-with-interior-design-and-quality-air.jpg';

const AirEfficiency = () => {
    return (
        <section
            className='section-size-2 services-heating'
            style={{
                backgroundImage: `url(${airQual})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='container'>
                <div className='grid centered'>
                    <div className='column-4'>
                        <h2>
                            Take Control
                            <br />
                            of your Indoor
                            <br />
                            Air Quality
                        </h2>
                    </div>
                    <div className='column-7 offset-1'>
                        <p>
                            We offer products that reduce pollutants that can
                            contribute to foul odors, headache, lung irritation
                            and fatigue. Some of these pollutants can even play
                            a part in influencing long-term conditions like
                            asthma, allergies and infectious diseases.
                        </p>
                        <p>
                            We have partnered with the leaders in Indoor Air
                            Quality products and services to ensure your home is
                            the place where you can spend real quality time with
                            all your family and friends.
                        </p>
                    </div>
                </div>
            </div>
            <div className='services-background-overlay'></div>
        </section>
    );
};

export default AirEfficiency;
