import { LOGOUT, LOGIN, REGISTER } from './types';
import { setAlert } from './alert';

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch(setAlert('Logged out', 'success'));
};

export const login = () => ({
  type: LOGIN,
});

export const register = () => ({
  type: REGISTER,
});
