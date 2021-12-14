import React from 'react';

import AirHeader from './AirHeader';
import AirEfficiency from './AirEfficiency';
import AirProducts from './AirProducts';
import CoolTest from '../../extras/CoolTest';
import AirVideo from './AirVideo';
import ScrollToTop from '../../routing/ScrollToTop';

const AirPage = () => {
    return (
        <div className='content'>
            <ScrollToTop />
            <AirHeader />
            <AirEfficiency />
            <AirVideo />
            <AirProducts />
            <CoolTest />
        </div>
    );
};

export default AirPage;
