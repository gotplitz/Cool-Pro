import React from 'react';

import HeatingHeader from './HeatingHeader';
import HeatingEfficiency from './HeatingEfficiency';
import HeatingProducts from './HeatingProducts';
import HeatTest from '../../extras/HeatTest';
import ScrollToTop from '../../routing/ScrollToTop';

const HeatingPage = () => {
    return (
        <div className='content'>
            <ScrollToTop />
            <HeatingHeader />
            <HeatingEfficiency />
            <HeatingProducts />
            <HeatTest />
        </div>
    );
};

export default HeatingPage;
