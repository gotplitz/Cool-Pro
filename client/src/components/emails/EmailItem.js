import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const EmailItem = ({
  auth,
  email: { _id, fullname, email, phone, message, date }
}) => (
  <Fragment>
    {auth.user && auth.user.usertype === 'worker' ? (
      <div
        className="quotee-post"
        style={{
          borderBottom: '2px solid #e6e6e6',
          paddingBottom: 25,
          marginBottom: 25
        }}
      >
        <div className="caption">
          <div className="title">{fullname}</div>
          <Fragment>
            <p>
              Date <Moment format="MM/DD/YYYY">{date}</Moment>
            </p>
          </Fragment>

          <h6>{message}</h6>

          <Fragment>
            <div className="sub">
              <i className="fas fa-at"></i>{' '}
              <a href={`mailto:${email}`}>{email}</a> |{' '}
              <i className="fas fa-phone-alt"></i>{' '}
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
          </Fragment>
        </div>
      </div>
    ) : null}
  </Fragment>
);

EmailItem.defaultProps = {
  showActions: true
};

EmailItem.propTypes = {
  email: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(EmailItem);
