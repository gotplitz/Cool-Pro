import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_QUOTES,
  QUOTE_ERROR,
  ADD_QUOTE,
  GET_QUOTE,
  ADD_RESPONSE
} from './types';

// Get quotes
export const getQuotes = () => async dispatch => {
  try {
    const res = await axios.get('/api/quotes');

    dispatch({
      type: GET_QUOTES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a new quote
export const addQuote = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/quotes', formData, config);

    dispatch({
      type: ADD_QUOTE,
      payload: res.data
    });

    dispatch(setAlert('Quote Request Submitted', 'success'));
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get one quote
export const getQuote = id => async dispatch => {
  try {
    const res = await axios.get(`/api/quotes/${id}`);

    dispatch({
      type: GET_QUOTE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a responses
export const addResponse = (quoteId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/quotes/response/${quoteId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_RESPONSE,
      payload: res.data
    });

    dispatch(setAlert('Your response has been submitted', 'success'));
  } catch (err) {
    dispatch({
      type: QUOTE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
