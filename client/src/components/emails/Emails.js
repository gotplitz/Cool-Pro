import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEmails } from '../../actions/email';
import Spinning from '../layout/Spinning';
import { Link } from 'react-router-dom';

import EmailItem from './EmailItem';
import ScrollToTop from '../routing/ScrollToTop';

const Emails = ({ getEmails, email: { emails, loading } }) => {
  useEffect(() => {
    getEmails();
  }, [getEmails]);
  return loading ? (
    <Spinning />
  ) : (
    <Fragment>
      <section className='section-size-2 lighter-bg'>
        <ScrollToTop />
        <div className='container'>
          <div className='grid'>
            <div className='column-4 '>
              <Link
                to='/dashboard'
                className='white-button'
                style={{ marginBottom: 30, display: 'block' }}
              >
                Back to Dashboard
              </Link>

              <Fragment>
                <h4>General Inquiries from Contact Us</h4>
                <h1 className='animated-text'>Inbox</h1>
                <p>
                  This is the list of inquiries received from the Contact Us
                  form. These can be prospects or other type of requests.
                </p>
              </Fragment>
            </div>
            <div className='column-8 profile-main-area'>
              {emails.map((email) => (
                <EmailItem key={email._id} email={email} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Emails.propTypes = {
  getEmails: PropTypes.func.isRequired,
  email: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.email,
});

export default connect(mapStateToProps, { getEmails })(Emails);
