import { combineReducers } from 'redux';
import authReducer from './authReducer';
import coinsReducer from './coinsReducer';

export default combineReducers({
  auth: authReducer,
  coins: coinsReducer,
});
