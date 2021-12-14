import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

const Message = ({ msg }) => {
  return (
    <div>
      <Alert variant="success">{msg}</Alert>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired
};

export default Message;
