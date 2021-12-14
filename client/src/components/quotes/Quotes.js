import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinning from '../layout/Spinning';
import { getQuotes } from '../../actions/quote';
import QuoteItem from './QuoteItem';
import QuoteForm from './QuoteForm';
import ScrollToTop from '../routing/ScrollToTop';

const Quotes = ({ getQuotes, auth, quote: { quotes, loading } }) => {
  useEffect(() => {
    getQuotes();
  }, [getQuotes]);

  return loading ? (
    <Spinning />
  ) : (
    <Fragment>
      <section className="section-size-2 lighter-bg">
        <ScrollToTop />
        <div className="container">
          <div className="grid">
            <div className="column-4 ">
              <Link
                to="/dashboard"
                className="white-button"
                style={{ marginBottom: 30, display: 'block' }}
              >
                Back to Dashboard
              </Link>

              {auth.user && auth.user.usertype === 'worker' ? (
                <Fragment>
                  <h4>List of requests</h4>
                  <h1 className="animated-text">Quotes</h1>
                </Fragment>
              ) : (
                <Fragment>
                  <h4>A better and easy way to schedule a visit</h4>
                  <h1 className="animated-text">Quotes</h1>
                  <p>
                    Thanks for choosing Cool Pro Mechanical for all your HVAC
                    needs. Please, use this form to book an appointment with one
                    of our expert to get your Free Estimate.
                  </p>
                </Fragment>
              )}
            </div>
            <div className="column-8 profile-main-area">
              {quotes.map(quote => (
                <QuoteItem key={quote._id} quote={quote} />
              ))}
              {auth.user && auth.user.usertype === 'client' && <QuoteForm />}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Quotes.propTypes = {
  getQuotes: PropTypes.func.isRequired,
  quote: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  quote: state.quote,
  auth: state.auth
});

export default connect(mapStateToProps, { getQuotes })(Quotes);
