import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteProduct } from '../../actions/profile';

const Products = ({ product, deleteProduct }) => {
  const products = product.map(prod => (
    <div key={prod._id} className="grid line-inside">
      <div className="column-2 column-tablet-6 column-mobile-2">
        {prod.brand}
      </div>
      <div className="column-5 column-tablet-6 column-mobile-5">
        {prod.model} • {prod.serial}
      </div>
      <div className="column-4 column-tablet-6 column-mobile-4">
        <Moment format="MM/DD/YYYY">{prod.purchasedate}</Moment> •{' '}
        {prod.whereis}
      </div>
      <div className="column-1 column-tablet-6 column-mobile-1">
        <button onClick={() => deleteProduct(prod.id)} className="red-button">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <Fragment>
      <div className="grid">
        <div className="column-2 column-tablet-6 column-mobile-2">Brand</div>
        <div className="column-5 column-tablet-6 column-mobile-5">
          Model • Serial
        </div>
        <div className="column-5 column-tablet-12 column-mobile-5">Details</div>
      </div>
      <div className="dashboar-extras-line">{products}</div>
    </Fragment>
  );
};

Products.propTypes = {
  product: PropTypes.array.isRequired,
  deleteProduct: PropTypes.func.isRequired
};

export default connect(null, { deleteProduct })(Products);
