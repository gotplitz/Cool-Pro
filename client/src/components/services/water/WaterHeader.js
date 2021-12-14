import React from 'react';
import WaterIcon from '../../extras/WaterIcon';

import waterHome from '../../../assets/images/father-and-son-playing-with-shaving-foam.jpg';

const WaterHeader = () => {
    return (
        <section className='section-size-2'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-5 header-separation'>
                        <WaterIcon />
                        <h4>Residential &amp; Commercial</h4>
                        <h1 className='animated-text'>Water Heating</h1>
                        <p>
                            You'll love the convenience and endless savings of
                            an energy efficient tankless system. Systems that
                            produce water only when you need it.
                        </p>
                    </div>
                    <div className='column-6 offset-1'>
                        <div
                            className='services-header-img'
                            style={{ justifyContent: 'flex-end' }}
                        >
                            <img src={waterHome} alt='Boy and dad shaving' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WaterHeader;
