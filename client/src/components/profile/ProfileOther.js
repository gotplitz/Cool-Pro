import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileOther = ({ profile: { address, product } }) => {
  return (
    <div className="grid">
      <div className="column-8 offset-4">
        <div className="client-details-other">
          <h3>Other Details</h3>
          <hr />
          <h6>Address</h6>
          {address.length > 0 ? (
            <Fragment>
              {address.map((address, index) => (
                <div key={index} className="grid" style={{ marginBottom: 30 }}>
                  <div className="column-6">{address.identification}</div>
                  <div className="column-6">
                    {address.street}, {address.streettwo}
                    <br />
                    {address.city}, {address.state}
                    <br />
                    {address.zipcode}
                  </div>
                </div>
              ))}
            </Fragment>
          ) : (
            <p>No address has been added yet</p>
          )}
          <hr />
          <h6>Registered Products</h6>
          {product.length > 0 ? (
            <Fragment>
              {product.map((product, index) => (
                <div
                  key={index}
                  className="grid"
                  style={{ marginBottom: 30, padding: '0 10px' }}
                >
                  <div className="column-6">
                    {product.brand}
                    <br />
                    {product.model}
                  </div>
                  <div className="column-6">
                    <p style={{ fontSize: 14 }}>
                      Serial: {product.serial}
                      <br />
                      Purchase Date:{' '}
                      <Moment format="DD/MM/YYYY">
                        {product.purchasedate}
                      </Moment>
                      <br />
                      Location: {product.whereis}
                    </p>
                  </div>
                </div>
              ))}
            </Fragment>
          ) : (
            <p>No product has been registered yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileOther.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileOther;
