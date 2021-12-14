import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerProduct } from '../../actions/profile';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import ScrollToTop from '../routing/ScrollToTop';

const AddProduct = ({ registerProduct, history }) => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    serial: '',
    purchasedate: Date.now(),
    whereis: ''
  });

  const { brand, model, serial, purchasedate, whereis } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const dateChange = e => {
    setFormData({ ...formData, purchasedate: e });
  };

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
            <h4>Let us give you a better support</h4>
            <h1 className="animated-text">Product Registration</h1>
            <p>
              Register your products here, so when you need support or
              maintenance, or even an upgrade, it will be easy to give you a
              better and faster service.
            </p>
          </div>
          <div className="column-8 profile-main-area">
            <form
              className="box white shadow text-left"
              onSubmit={e => {
                e.preventDefault();
                registerProduct(formData, history);
              }}
            >
              <label>Brand</label>
              <input
                name="brand"
                type="text"
                placeholder="e.g. Rheem, or Bosch"
                value={brand}
                onChange={e => onChange(e)}
              />
              <label>Model</label>
              <input
                name="model"
                placeholder="e.g. CP123"
                value={model}
                onChange={e => onChange(e)}
              />
              <label>Serial Number</label>
              <input
                name="serial"
                type="text"
                placeholder="Find it on tag or label"
                value={serial}
                onChange={e => onChange(e)}
              />
              <label>Purchase Date</label>
              <DatePicker
                selected={purchasedate}
                onChange={e => dateChange(e)}
                dateFormat="MMMM d, yyyy"
                placeholder="e.g. 01/01/2020"
              />
              <label>Where is this located</label>
              <input
                name="whereis"
                type="text"
                placeholder="e.g. At Home"
                value={whereis}
                onChange={e => onChange(e)}
              />
              <small>
                If you created your address in your profile, and you name it,
                for example Home Address, use this label here
              </small>

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

AddProduct.propTypes = {
  registerProduct: PropTypes.func.isRequired
};

export default connect(null, { registerProduct })(withRouter(AddProduct));
