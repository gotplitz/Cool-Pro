import React from 'react';
import { Carousel } from 'react-bootstrap';

import itemOne from '../../assets/images/Rheem-Full-Residential-Heating-Cooling-Product.png';
import itemTwo from '../../assets/images/rheem-Electric-Tank-Water-Heaters.jpg';
import itemThree from '../../assets/images/rheem-exhaustion-fan.jpg';

const RheemSlider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className='d-block' src={itemOne} alt='First slide' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block' src={itemTwo} alt='Second Slide' />
            </Carousel.Item>
            <Carousel.Item>
                <img className='d-block' src={itemThree} alt='Third Slide' />
            </Carousel.Item>
        </Carousel>
    );
};

export default RheemSlider;
