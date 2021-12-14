import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';

const Progress = ({ percentage }) => {
  return (
    <ProgressBar>
      <ProgressBar striped variant="success" now={percentage} />
    </ProgressBar>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Progress;
