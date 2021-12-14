import React from 'react';
import ReactCompareImage from 'react-compare-image';
import RheemSlider from './RheemSlider';
import ReactTyped from 'react-typed';

import leftImg from '../../assets/images/old-hvac-system.jpg';
import rightImg from '../../assets/images/new-hvac-equipment.jpg';
import rheemPartner from '../../assets/images/rheem-partner-logo.png';

const Slider = () => {
    return (
        <section className='section-size-2' style={{ padding: 0 }}>
            <div style={{ width: '100%', height: 'auto', maxHeight: 1000 }}>
                <div className='inner main-text'>
                    <h2>
                        <span>Get Today </span>
                        <ReactTyped
                            loop
                            className='typed-words'
                            strings={[
                                'A New',
                                'An Energy Efficient',
                                'A Modern',
                                'A Powerful',
                            ]}
                            shuffle={false}
                            backDelay={5000}
                            fadeOut={true}
                            fadeIn={true}
                            loopCount={0}
                            showCursor={false}
                            cursorChar=''
                        />
                        <span> System</span>
                    </h2>
                    <p>with Long Island's HVAC Pros</p>
                </div>

                <ReactCompareImage
                    leftImage={leftImg}
                    rightImage={rightImg}
                    hover
                />
                <div className='rheem-slider'>
                    <img
                        className='rheem-header-logo'
                        src={rheemPartner}
                        alt='Rheem Partners Logo'
                    />
                    <div className='rheem-slides'>
                        <RheemSlider />
                    </div>
                </div>
                <div className='rheem-slider-mobile'>
                    <img
                        className='rheem-header-logo'
                        src={rheemPartner}
                        alt='Rheem Partners Logo'
                    />
                    <div className='rheem-slides'>
                        <RheemSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
