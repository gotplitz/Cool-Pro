import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const QuoteItem = ({
  auth,
  quote: {
    _id,
    user,
    projectname,
    rangeone,
    rangetwo,
    details,
    name,
    photo,
    responses,
    date,
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
          <div className='title'>{projectname}</div>
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

          <p>{details}</p>

          {showActions && (
            <Fragment>
              <div className='sub'>
                Available <Moment format='MM/DD/YYYY'>{rangeone}</Moment> or{' '}
                <Moment format='MM/DD/YYYY'>{rangetwo}</Moment>
                <br />
                <div className='reply-quote'>
                  <Link className='red-button' to={`/quotes/${_id}`}>
                    Reply <span>{responses.length}</span>
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

QuoteItem.defaultProps = {
  showActions: true,
};

QuoteItem.propTypes = {
  quote: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(QuoteItem);
