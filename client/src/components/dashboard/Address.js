import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAddress } from '../../actions/profile';

const Address = ({ address, deleteAddress }) => {
  const addresses = address.map(addr => (
    <div key={addr._id} className="grid line-inside">
      <div className="column-3 column-tablet-12 column-mobile-3">
        {addr.identification}
      </div>
      <div className="column-4 column-tablet-5 column-mobile-4">
        {addr.street}, {addr.streettwo}
      </div>
      <div className="column-4 column-tablet-5 column-mobile-4">
        {addr.city}, {addr.state} {addr.zipcode}
      </div>
      <div className="column-1 column-tablet-2 column-mobile-1">
        <button onClick={() => deleteAddress(addr.id)} className="red-button">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <div className="grid">
        <div className="column-3 column-tablet-12 column-mobile-3">Label</div>
        <div className="column-4 column-tablet-5 column-mobile-4">Address</div>
        <div className="column-5 column-tablet-7 column-mobile-5">Location</div>
      </div>
      <div className="dashboar-extras-line">{addresses}</div>
    </Fragment>
  );
};

Address.propTypes = {
  address: PropTypes.array.isRequired,
  deleteAddress: PropTypes.func.isRequired
};

export default connect(null, { deleteAddress })(Address);
