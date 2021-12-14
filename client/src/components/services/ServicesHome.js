import React from 'react';

// Components parts for Services
import ServicesHeader from './ServicesHeader';
import ServiceMasonry from './ServiceMasonry';

const ServicesHome = () => {
  return (
    <div className="content">
      <ServicesHeader />
      <ServiceMasonry />
    </div>
  );
};

export default ServicesHome;
