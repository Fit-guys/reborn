import { user as actionTypes } from '../action-types';

export const logIn = (token, expires) => {
  const type = actionTypes.LOGIN;

  return async dispatch => dispatch({
    type, payload: { token, expires, authenticated: true },
  });
};

export const signUp = (token, expires) => {
  const type = actionTypes.SIGNUP;

  return async dispatch => dispatch({
    type, payload: { token, expires, authenticated: true },
  });
};

export const logOut = () => ({
  type: actionTypes.LOGOUT,
  authenticated: false,
  token: '',
  expires: 0,
});

export const getUser = user => ({
  type: actionTypes.GET_USER,
  payload: user,
});

export const passForgot = () => ({

});

export const passChange = () => {

};
