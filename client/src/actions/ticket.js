import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_TICKETS,
  TICKET_ERROR,
  ADD_TICKET,
  GET_TICKET,
  ADD_DISCUSSION
} from './types';

// Get tickets
export const getTickets = () => async dispatch => {
  try {
    const res = await axios.get('/api/tickets');

    dispatch({
      type: GET_TICKETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TICKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a new ticket
export const addTicket = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/tickets', formData, config);

    dispatch({
      type: ADD_TICKET,
      payload: res.data
    });

    dispatch(setAlert('Ticket has been opened', 'success'));
  } catch (err) {
    dispatch({
      type: TICKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get one ticket
export const getTicket = id => async dispatch => {
  try {
    const res = await axios.get(`/api/tickets/${id}`);

    dispatch({
      type: GET_TICKET,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TICKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add a discussions
export const addDiscussion = (ticketId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/tickets/discussion/${ticketId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_DISCUSSION,
      payload: res.data
    });

    dispatch(setAlert('Your reply has been submitted', 'success'));
  } catch (err) {
    dispatch({
      type: TICKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
