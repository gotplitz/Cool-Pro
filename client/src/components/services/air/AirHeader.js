import React from 'react';
import AirIcon from '../../extras/AirIcon';

import dogRoom from '../../../assets/images/relaxed-dog-in-living-room.jpg';

const AirHeader = () => {
    return (
        <section className='section-size-2'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-5 header-separation'>
                        <AirIcon />
                        <h4>Residential &amp; Commercial</h4>
                        <h1 className='animated-text'>Indoor Air Quality</h1>
                        <p>
                            Enjoyment of clean air and a neat house doesn't have
                            to be challenging. We have the products you need for
                            a healthy indoor environment.
                        </p>
                    </div>
                    <div className='column-6 offset-1'>
                        <div className='services-header-img'>
                            <img src={dogRoom} alt='Dog and family in room' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AirHeader;
