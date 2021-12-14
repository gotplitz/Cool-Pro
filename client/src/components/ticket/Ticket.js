import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinning from '../layout/Spinning';
import { getTicket } from '../../actions/ticket';

// parts for ticket
import TicketItem from '../tickets/TicketItem';
import DiscussionItem from './DiscussionItem';
import DiscussionForm from './DiscussionForm';
import ScrollToTop from '../routing/ScrollToTop';

const Ticket = ({ getTicket, ticket: { ticket, loading }, match }) => {
  useEffect(() => {
    getTicket(match.params.id);
  }, [getTicket, match.params.id]);

  return loading || ticket === null ? (
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
                  to="/tickets"
                  className="white-button"
                  style={{ marginBottom: 30, display: 'block' }}
                >
                  Tickets
                </Link>
              </div>
            </div>
            <div className="column-8 offset-1">
              <TicketItem ticket={ticket} showActions={false} />
            </div>
          </div>
        </div>
      </section>
      <DiscussionForm ticketId={ticket._id} />
      <section className="lighter-bg section-size-1">
        <div className="container">
          <div className="grid center">
            <div className="column-8 offset-3">
              <h5>Discussions</h5>
              <div className="space-2"></div>
              <div className="column-12">
                <ul className="comments box white shadow">
                  {ticket.discussions.length > 0 ? (
                    ticket.discussions.map(discussion => (
                      <DiscussionItem
                        key={discussion._id}
                        discussion={discussion}
                        ticketId={ticket._id}
                      />
                    ))
                  ) : (
                    <Fragment>
                      There is no discussion to this ticket request yet.
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

Ticket.propTypes = {
  getTicket: PropTypes.func.isRequired,
  ticket: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ticket: state.ticket
});

export default connect(mapStateToProps, { getTicket })(Ticket);
