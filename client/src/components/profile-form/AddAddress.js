import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newAddress } from '../../actions/profile';
import ScrollToTop from '../routing/ScrollToTop';

const AddAddress = ({ newAddress, history }) => {
  const [formData, setFormData] = useState({
    identification: '',
    street: '',
    streettwo: '',
    city: '',
    state: 'NY',
    zipcode: ''
  });

  const { identification, street, streettwo, city, state, zipcode } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
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
            <h4>Update your contact information</h4>
            <h1 className="animated-text">Add Address</h1>
            <p>
              Add your billing address and the address where a service was
              performed. If you want, you can add other address where service
              was provider and where you would like to receive service in the
              future. Don't forget to identify them properly.
            </p>
          </div>
          <div className="column-8 profile-main-area">
            <form
              className="box white shadow text-left"
              onSubmit={e => {
                e.preventDefault();
                newAddress(formData, history);
              }}
            >
              <label>Label</label>
              <input
                name="identification"
                type="text"
                placeholder="e.g. Billing Address"
                value={identification}
                onChange={e => onChange(e)}
              />
              <label>Address first line</label>
              <input
                name="street"
                placeholder="e.g. 123 Main Street"
                value={street}
                onChange={e => onChange(e)}
              />
              <label>Address second line</label>
              <input
                name="streettwo"
                type="text"
                placeholder="e.g. Unit 1 or Appartment #"
                value={streettwo}
                onChange={e => onChange(e)}
              />
              <label>City</label>
              <input
                name="city"
                type="text"
                placeholder="e.g. Huntington"
                value={city}
                onChange={e => onChange(e)}
              />
              <label>State</label>
              <input
                name="state"
                type="text"
                placeholder="New York"
                value={state}
                readOnly
              />
              <label>Zip Code</label>
              <input
                name="zipcode"
                type="number"
                placeholder="e.g. 11720"
                value={zipcode}
                onChange={e => onChange(e)}
              />

              <button className="button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

AddAddress.propTypes = {
  newAddress: PropTypes.func.isRequired
};

export default connect(null, { newAddress })(withRouter(AddAddress));
