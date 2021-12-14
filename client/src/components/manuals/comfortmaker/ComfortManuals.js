import React from 'react';

// Page parts
import ScrollToTop from '../../routing/ScrollToTop';
import ComfortHeader from './ComfortHeader';
import ComfortTable from './ComfortTable';

const ComfortManuals = () => {
  return (
    <div className='content'>
      <ScrollToTop />
      <ComfortHeader />
      <ComfortTable />
    </div>
  );
};

export default ComfortManuals;
