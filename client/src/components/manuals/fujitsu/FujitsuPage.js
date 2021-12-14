import React from 'react';

// Page parts
import ScrollToTop from '../../routing/ScrollToTop';
import FujitsuHeader from './FujitsuHeader';
import FujitsuTable from './FujitsuTable';

const FujitsuPage = () => {
  return (
    <div className='content'>
      <ScrollToTop />
      <FujitsuHeader />
      <FujitsuTable />
    </div>
  );
};

export default FujitsuPage;
