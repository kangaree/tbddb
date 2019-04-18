import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import birthdays from './birthdays_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  birthdays,
});

export default RootReducer;
