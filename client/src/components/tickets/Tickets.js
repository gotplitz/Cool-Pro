import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinning from '../layout/Spinning';
import { getTickets } from '../../actions/ticket';
import TicketItem from './TicketItem';
import TicketForm from './TicketForm';
import ScrollToTop from '../routing/ScrollToTop';

const Tickets = ({ getTickets, auth, ticket: { tickets, loading } }) => {
  useEffect(() => {
    getTickets();
  }, [getTickets]);

  return loading ? (
    <Spinning />
  ) : (
    <Fragment>
      <ScrollToTop />
      <section className="section-size-2 lighter-bg">
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
                  <h1 className="animated-text">Tickets</h1>
                </Fragment>
              ) : (
                <Fragment>
                  <h4>A better and easy way to request support</h4>
                  <h1 className="animated-text">Support Tickets</h1>
                  <p>
                    Thanks for choosing Cool Pro Mechanical for all your HVAC
                    needs. We are sorry for the inconvenience you are having
                    right now, please give use your details of your issue and we
                    will get back to you ASAP.
                  </p>
                </Fragment>
              )}
            </div>
            <div className="column-8 profile-main-area">
              {tickets.map(ticket => (
                <TicketItem key={ticket._id} ticket={ticket} />
              ))}
              {auth.user && auth.user.usertype === 'client' && <TicketForm />}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Tickets.propTypes = {
  getTickets: PropTypes.func.isRequired,
  ticket: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ticket: state.ticket,
  auth: state.auth
});

export default connect(mapStateToProps, { getTickets })(Tickets);
