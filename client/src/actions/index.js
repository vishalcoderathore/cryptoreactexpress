import axios from 'axios';
import { FETCH_USER } from './types';

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
