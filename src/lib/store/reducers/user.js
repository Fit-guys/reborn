import { user as actionTypes } from '../action-types';

const initialState = {
  authenticated: false,
  token: '',
  expires: '',
  user: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.LOGIN:
    case actionTypes.SIGNUP:
      return { ...state, ...payload };
    case actionTypes.GET_USER:
      return { ...state, user: payload };
    default:
      return initialState;
  }
};
