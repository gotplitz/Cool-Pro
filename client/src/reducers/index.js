import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import email from './email';
import quote from './quote';
import ticket from './ticket';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  email,
  quote,
  ticket
});
