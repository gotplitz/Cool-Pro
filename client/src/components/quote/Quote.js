import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinning from '../layout/Spinning';
import { getQuote } from '../../actions/quote';

// parts for quote
import QuoteItem from '../quotes/QuoteItem';
import ResponseItem from './ResponseItem';
import ResponseForm from './ResponseForm';
import ScrollToTop from '../routing/ScrollToTop';

const Quote = ({ getQuote, quote: { quote, loading }, match }) => {
  useEffect(() => {
    getQuote(match.params.id);
  }, [getQuote, match.params.id]);

  return loading || quote === null ? (
    <Spinning />
  ) : (
    <Fragment>
      <ScrollToTop />
      <section className="section-size-1">
        <div className="container">
          <div className="grid center full-post">
            <div className="column-3">
              <div className="client-navigation">
                <Link
                  to="/dashboard"
                  className="white-button"
                  style={{ marginBottom: 30, display: 'block' }}
                >
                  Back to Dashboard
                </Link>
                <Link
                  to="/quotes"
                  className="white-button"
                  style={{ marginBottom: 30, display: 'block' }}
                >
                  Quotes
                </Link>
              </div>
            </div>
            <div className="column-8 offset-1">
              <QuoteItem quote={quote} showActions={false} />
            </div>
          </div>
        </div>
      </section>
      <ResponseForm quoteId={quote._id} />
      <section className="lighter-bg section-size-1">
        <div className="container">
          <div className="grid center">
            <div className="column-8 offset-3">
              <h5>Discussions</h5>
              <div className="space-2"></div>
              <div className="column-12">
                <ul className="comments box white shadow">
                  {quote.responses.length > 0 ? (
                    quote.responses.map(response => (
                      <ResponseItem
                        key={response._id}
                        response={response}
                        quoteId={quote._id}
                      />
                    ))
                  ) : (
                    <Fragment>
                      There is no response to this quote request yet.
                    </Fragment>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Quote.propTypes = {
  getQuote: PropTypes.func.isRequired,
  quote: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  quote: state.quote
});

export default connect(mapStateToProps, { getQuote })(Quote);
