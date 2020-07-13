import { LOGOUT, LOGIN } from './types';
import { setAlert } from './alert';

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch(setAlert('Logged out', 'success'));
};

export const login = () => ({
  type: LOGIN,
});
