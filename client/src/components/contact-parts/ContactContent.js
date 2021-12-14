import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const ContactContent = () => {
    return (
        <section className='section-size-4 lighter-bg'>
            <div className='container'>
                <div className='grid'>
                    <div className='column-6'>
                        <h4>Do you have more questions</h4>
                        <h2 className='animated-text'>Get In Touch.</h2>
                        <p>
                            If you have more questions about our services, our
                            products and who we are, don't hesitate in
                            contacting us, and we will get back to you ASAP.
                        </p>
                        <p>
                            <Link to='/register'>Register today</Link> for a
                            more user friendly way to request a quote, if you
                            have an account,{' '}
                            <Link to='/quotes'>
                                click here to submit the request from your
                                dashboard
                            </Link>
                        </p>
                        <p>
                            Are you looking for a change in your career? Come
                            join the family-owned and operated team at Cool Pro
                            Mechanical! We are looking for qualified and
                            passionate foremans, installers, and technicians in
                            the HVAC field. Contact us today!
                        </p>
                        <div className='space-3'></div>
                        <ContactForm />
                        <div className='space-3'></div>
                    </div>
                    <div className='column-5 offset-1 text-right'>
                        <h5>Cool Pro Mechanical Locations</h5>
                        <ul>
                            <li>Huntington Station</li>
                            <li>East Northport</li>
                            <li>Ronkonkoma</li>
                        </ul>
                        <div className='space-3'></div>
                        <h5>Servicing</h5>
                        <p>
                            Suffolk County
                            <br />
                            Nassau County
                        </p>
                        <div className='space-3'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContent;
