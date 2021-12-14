import React from 'react';

import heatingBack from '../../../assets/images/conceptual-interior-room.jpg';

const HeatingEfficiency = () => {
    return (
        <section
            className='section-size-2 services-heating'
            style={{
                backgroundImage: `url(${heatingBack})`,
                backgroundSize: 'cover',
            }}
        >
            <div className='container'>
                <div className='grid centered'>
                    <div className='column-4'>
                        <h2>
                            Efficiency
                            <br />
                            is our priority
                        </h2>
                    </div>
                    <div className='column-7 offset-1'>
                        <p>
                            Our units work in reverse of cooling systems in
                            winter, absorbing heat from the outside air and
                            moving it indoors to heat your home. As a result,
                            you get a heating system for a whole-house comfort.
                        </p>
                        <p>
                            Available in numerous mix-and-match capacities and
                            configurations, there's a Halcyon mini-split system
                            for even the most difficult to heat and cool areas.
                        </p>
                    </div>
                </div>
            </div>
            <div className='services-background-overlay'></div>
        </section>
    );
};

export default HeatingEfficiency;
