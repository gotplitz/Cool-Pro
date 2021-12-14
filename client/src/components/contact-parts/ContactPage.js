import React from 'react';

// Contact us page parts
import ContactHeader from './ContactHeader';
import ContactContent from './ContactContent';
import ContactMap from './ContactMap';
import ScrollToTop from '../routing/ScrollToTop';

const ContactPage = () => {
  return (
    <div className="content">
      <ScrollToTop />
      <ContactHeader />
      <ContactContent />
      <ContactMap />
    </div>
  );
};

export default ContactPage;
