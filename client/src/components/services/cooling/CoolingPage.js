import React from 'react';

import CoolingHeader from './CoolingHeader';
import CoolingEfficiency from './CoolingEfficiency';
import CoolingProducts from './CoolingProducts';
import CoolTest from '../../extras/CoolTest';
import ScrollToTop from '../../routing/ScrollToTop';

const CoolingPage = () => {
    return (
        <div className='content'>
            <ScrollToTop />
            <CoolingHeader />
            <CoolingEfficiency />
            <CoolingProducts />
            <CoolTest />
        </div>
    );
};

export default CoolingPage;
