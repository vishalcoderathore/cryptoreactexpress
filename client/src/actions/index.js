import axios from 'axios';
import { FETCH_USER, FETCH_COINS } from './types';

/*
 * Old Syntax
 */
// export const fetchUser = () => {
//   return async function (dispatch) {
//     const res = await axios.get('/api/current_user');
//     dispatch({ type: FETCH_USER, payload: res.data });
//   };
// };

/*
 * New short syntax with async await
 */
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchCoins = () => async (dispatch) => {
  const res = await axios.get('/api/getcoins');
  dispatch({ type: FETCH_COINS, payload: res.data });
};
