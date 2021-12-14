import axios from 'axios';
import { setAlert } from './alert';
import { ADD_EMAIL, EMAIL_ERROR, GET_EMAILS } from './types';

// Get emails
export const getEmails = () => async dispatch => {
  try {
    const res = await axios.get('/api/emails');

    dispatch({
      type: GET_EMAILS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: EMAIL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// New email sent
export const addEmail = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/emails', formData, config);

    dispatch({
      type: ADD_EMAIL,
      payload: res.data
    });

    dispatch(setAlert('You email has been sent!', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: EMAIL_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
