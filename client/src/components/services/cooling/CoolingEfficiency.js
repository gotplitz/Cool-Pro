import React from 'react';

import coolingBack from '../../../assets/images/colorful-living-room.jpg';

const HeatingEfficiency = () => {
    return (
        <section
            className='section-size-2 services-heating'
            style={{
                backgroundImage: `url(${coolingBack})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='container'>
                <div className='grid centered'>
                    <div className='column-4'>
                        <h2>
                            Energy Efficient
                            <br />
                            Systems for a<br />
                            Cool House
                        </h2>
                    </div>
                    <div className='column-7 offset-1'>
                        <p>
                            Making a smart decision about your home's air
                            conditioning system can have a substantial impact on
                            your utility bills, and from this, your comfort. We
                            want to help you get a system that will help you to
                            relax.
                        </p>
                        <p>
                            Our systems will lower your electric bill up to 24%,
                            helping save approximately $1,000 annually, so you
                            can use your money for more important things without
                            sacrificing your comfort.
                        </p>
                    </div>
                </div>
            </div>
            <div className='services-background-overlay'></div>
        </section>
    );
};

export default HeatingEfficiency;
