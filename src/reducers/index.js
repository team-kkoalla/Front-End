import { combineReducers } from 'redux';
import authReducer from './authReducer';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export default rootReducer;
