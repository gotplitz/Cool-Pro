import React from 'react';

import waterBack from '../../../assets/images/young-woman-relaxing-in-the-hydro-massage-bath.jpg';

const WaterEfficiency = () => {
    return (
        <section
            className='section-size-2 services-heating'
            style={{
                backgroundImage: `url(${waterBack})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='container'>
                <div className='grid centered'>
                    <div className='column-4'>
                        <h2>
                            Enjoy Hot Water
                            <br />
                            anytime you want
                            <br />
                            while you save money
                        </h2>
                    </div>
                    <div className='column-7 offset-1'>
                        <p>
                            Our systems offer continuous hot water for all your
                            needs, and you don't have to worry about your
                            electric bill every time you use it. Our tankless
                            water heaters only produce hot water when you need
                            it.
                        </p>
                        <p>
                            Imagine having your laundry and dish washer running
                            at the same time, and you taking a hot water bath
                            while you wait.
                        </p>
                    </div>
                </div>
            </div>
            <div className='services-background-overlay'></div>
        </section>
    );
};

export default WaterEfficiency;
