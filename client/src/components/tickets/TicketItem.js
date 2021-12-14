import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const TicketItem = ({
  auth,
  ticket: {
    _id,
    user,
    tickettitle,
    purchasedate,
    equipmentbrand,
    ticketdetails,
    name,
    photo,
    discussions,
    date,
    address,
    product,
  },
  showActions,
}) => (
  <Fragment>
    {(auth.user && user === auth.user._id) ||
    (auth.user && auth.user.usertype === 'worker') ? (
      <div className='quotee-post'>
        <div className='post-avatar'>
          {auth.user.usertype === 'worker' ? (
            <Link to={`/profile/${user}`}>
              <img src={`/uploads/${photo}`} alt={name} />
            </Link>
          ) : (
            <Fragment>
              <img src={`/uploads/${photo}`} alt={name} />
            </Fragment>
          )}
        </div>
        <div className='caption'>
          <div className='title'>{tickettitle}</div>
          {auth.user.usertype === 'worker' ? (
            <Fragment>
              <h6>
                Requested by <Link to={`/profile/${user}`}>{name}</Link> on{' '}
                <Moment format='MM/DD/YYYY'>{date}</Moment>
              </h6>
            </Fragment>
          ) : (
            <Fragment>
              <h6>
                Date <Moment format='MM/DD/YYYY'>{date}</Moment>
              </h6>
            </Fragment>
          )}

          <p>{ticketdetails}</p>

          {showActions && (
            <Fragment>
              <div className='sub'>
                Purchase or Service Date{' '}
                <Moment format='MM/DD/YYYY'>{purchasedate}</Moment> | Brand:{' '}
                <span>{equipmentbrand}</span>
                <br />
                <div className='reply-quote'>
                  <Link className='red-button' to={`/tickets/${_id}`}>
                    Reply <span>{discussions.length}</span>
                  </Link>
                </div>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    ) : null}
  </Fragment>
);

TicketItem.defaultProps = {
  showActions: true,
};

TicketItem.propTypes = {
  ticket: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(TicketItem);
