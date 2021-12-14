import React, { Fragment } from 'react';
import { Spinner } from 'react-bootstrap';

const Spinning = () => {
  return (
    <Fragment>
      <div className="main-spinning-wrap">
        <div className="secondary-spinning-wrap">
          <Spinner animation="grow" variant="primary" />{' '}
          <Spinner animation="grow" variant="danger" />{' '}
          <Spinner animation="grow" variant="warning" />
        </div>
      </div>
    </Fragment>
  );
};

export default Spinning;
