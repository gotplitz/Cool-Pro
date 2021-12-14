import React from 'react';

import WaterHeader from './WaterHeader';
import WaterEfficiency from './WaterEfficiency';
import WaterProducts from './WaterProducts';
import CoolTest from '../../extras/CoolTest';
import ScrollToTop from '../../routing/ScrollToTop';

const WaterPage = () => {
    return (
        <div className='content'>
            <ScrollToTop />
            <WaterHeader />
            <WaterEfficiency />
            <WaterProducts />
            <CoolTest />
        </div>
    );
};

export default WaterPage;
