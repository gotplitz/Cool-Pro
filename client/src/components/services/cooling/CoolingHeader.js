import React from 'react';
import CoolingIcon from '../../extras/CoolingIcon';

import coolHome from '../../../assets/images/boy-and-dad-talk.jpg';

const HeatingHeader = () => {
    return (
        <section className='section-size-2'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-5 header-separation'>
                        <CoolingIcon />
                        <h4>Residential &amp; Commercial</h4>
                        <h1 className='animated-text'>Cooling Systems</h1>
                        <p>
                            There is nothing like coming home after a long day
                            at work. At Cool Pro Mechanical we are commited to
                            ensure you relax with a reliable and efficient A/C
                            System.
                        </p>
                    </div>
                    <div className='column-6 offset-1'>
                        <div className='services-header-img'>
                            <img src={coolHome} alt='Boy and dad talking' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeatingHeader;
